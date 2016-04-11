/**
 * Rutas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'rutas',
  attributes: {
    maestro: {
      type: 'binary',
      required: true
    },
    maestro_id: {
      type: 'integer',
      required: true
    },
    origen: {
      model: 'Lugares',
      columnName: 'origen_id'
    },
    destino: {
      model: 'Lugares',
      columnName: 'destino_id'
    },
    sortOrder: {
      type: 'integer',
      required: true
    },
    parada: {
      type: 'integer',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true,
      size: 45
    },
    tiempo_aprox: {
      type: 'time'
    },
    horarios: {
      type: 'text',
      size: 100
    },
    impuesto: {
      type: 'float'
    },
    estado: {
      type: 'binary',
      defaultsTo: 1
    },
    fecha_creacion: {
      type: 'datetime'
    },
    fecha_modificacion: {
      type: 'string'
    }

  }
};

