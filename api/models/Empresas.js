/**
 * Empresas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'empresas',
  attributes: {
    nit: {
      type: 'string',
      size: 14,
      required: true
    },
    nombre: {
      type: 'string',
      size: 45,
      required: true
    },
    cod_num: {
      type: 'string',
      size: 3,
      required: true
    },
    estado: {
      type: 'binary',
      //size: 14,
      required: true
    },
    fecha_creacion: {
      type: 'datetime',
      required: true
    },
    fecha_modificacion: {
      type: 'datetime',
      required: true
    }
  }
};

