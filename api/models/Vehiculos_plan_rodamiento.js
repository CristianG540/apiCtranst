/**
 * Vehiculos_plan_rodamiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'vehiculos_plan_rodamiento',
  attributes: {
    tipo_plan_id : {
      type: 'integer',
      required: true
    },
    fecha: {
      type: 'date',
      required: true
    },
    hora_salida: {
      type: 'time',
      required: true
    },
    hora_llegada: {
      type: 'time',
      required: true
    },
    hora_salida_real: {
      type: 'time',
      required: true
    },
    hora_llegada_real: {
      type: 'time',
      required: true
    },
    ruta_id : {
      type: 'integer',
      required: true
    },
    vehiculo_id : {
      type: 'integer',
      required: true
    },
    observacion_id : {
      type: 'integer',
      required: true
    },
    estado : {
      type: 'string',
      enum: ['Activo', 'Cancelado', 'Postergado', 'Cumplido', 'Despachado']
    },
    fecha_despacho: {
      type: 'datetime',
      required: true
    },
    fecha_creacion: {
      type: 'date'
    },
    created: {
      type: 'datetime'
    },
    fecha_modificacion: {
      type: 'datetime'
    }
  }
};

