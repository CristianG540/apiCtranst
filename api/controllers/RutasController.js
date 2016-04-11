/**
 * RutasController
 *
 * @description :: Server-side logic for managing rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment = require("moment");

module.exports = {
  horarios : function(req, res){

    var queryStr = ""+
        "SELECT vpr.id,vpr.hora_salida as hora,CONCAT(v.numero_interno,' (',v.placa,')') as vehiculo,rn.descripcion AS ruta,vt.nombre as tipo,vpr.ruta_id,vt.nombre,v.placa,v.numero_interno,v.id AS vehiculoId, v.tipo_id,r.maestro_id AS rutaId,rn.id AS rutaSId,e.nombre AS empresa,(SELECT vtt.tarifa_id FROM vehiculos_tipo_tarifa vtt WHERE vtt.origen_id=r.origen_id AND vtt.destino_id=r.destino_id AND vtt.vehiculo_tipo_id = v.tipo_id AND vtt.ruta_maestra_id = vpr.ruta_id LIMIT 1) AS tarifa "+
        "FROM `vehiculos_plan_rodamiento` `vpr` "+
        "JOIN `vehiculos` `v` ON vpr.vehiculo_id = v.id "+
        "JOIN `vehiculos_tipo` `vt` ON v.tipo_id = vt.id "+
        "JOIN `empresas` `e` ON v.empresas_id = e.id "+
        "JOIN `rutas` `r` ON r.maestro_id = vpr.ruta_id "+
        "JOIN `rutas` `rn` ON rn.id = vpr.ruta_id "+
        "WHERE vpr.fecha = ? AND r.destino_id = ? AND r.origen_id = ? "+
        "ORDER BY `vpr`.`hora_salida` ASC";

    VehiculosPlanRodamiento.query(queryStr, [req.param('fecha'),req.param('idDestino'),req.param('idOrigen')], function(err, results) {
      if (err) {return res.serverError(err);}
      return res.json(results);
    });


  }
};

