/**
 * Vehiculos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'vehiculos',
  attributes: {
    empresas_id: {
      type: 'integer',
      required: true
    },
    centro_operacion: {
      type: 'string',
      required: true,
      size: 2
    },
    numero_interno: {
      type: 'integer',
      required: true
    },
    placa: {
      type: 'string',
      required: true,
      size: 10
    },
    chasis: {
      type: 'string',
      required: true,
      size: 45
    },
    motor: {
      type: 'string',
      required: true,
      size: 45
    },
    marca_id: {
      type: 'integer',
      required: true
    },
    linea: {
      type: 'string',
      size: 45
    },
    modelo: {
      type: 'string',
      size: 45,
      required: true
    },
    color: {
      type: 'string',
      size: 45
    },
    foto: {
      type: 'string',
      size: 45
    },
    carroseria: {
      type: 'string',
      size: 45
    },
    numero_sillas: {
      type: 'integer'
    },
    capacidad_personas_sentado: {
      type: 'integer'
    },
    capacidad_personas_pie: {
      type: 'string',
      size: 45
    },
    capacidad_peso: {
      type: 'string',
      size: 45
    },
    tipo_id: {
      type: 'integer',
      required: true
    },
    departamento_matricula_id: {
      type: 'integer',
      required: true
    },
    lugar_matricula_id: {
      type: 'integer',
      required: true
    },
    ruta_tipo: {
      type: 'string',
      size: 45
    },
    servicio_tipo_id: {
      type: 'integer',
      required: true
    },
    combustible: {
      type: 'string',
      size: 45
    },
    capacidad_combustible: {
      type: 'string',
      size: 45
    },
    pignoracion: {
      type: 'string',
      defaultsTo: 0
    },
    pignoracion_empresa: {
      type: 'string',
      size: 45
    },
    pignoracion_fecha: {
      type: 'datetime'
    },
    pignoracion_valor: {
      type: 'string',
      size: 45
    },
    seguro_obligatorio: {
      type: 'string',
      size: 20
    },
    seguro_obligatorio_fecha_vence: {
      type: 'datetime'
    },
    tarjeta_operacion: {
      type: 'string',
      size: 20
    },
    terjeta_op_fecha_vence: {
      type: 'datetime'
    },
    fecha_vence_revision_tecnico: {
      type: 'datetime'
    },
    fecha_vence_extintor: {
      type: 'datetime'
    },
    poliza_resp_civil_fecha_vence: {
      type: 'datetime'
    },
    movilizacion: {
      type: 'string',
      size: 45
    },
    fecha_ingreso: {
      type: 'datetime'
    },
    fecha_retiro: {
      type: 'datetime'
    },
    estado: {
      type: 'integer',
      defaultsTo: 1
    },
    fecha_creacion: {
      type: 'datetime'
    },
    fecha_modificacion: {
      type: 'datetime'
    }
  }

};

