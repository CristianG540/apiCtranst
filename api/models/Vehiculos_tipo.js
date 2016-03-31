/**
 * Vehiculos_tipo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'vehiculos_tipo',
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      size: 45
    },
    estado: {
      type: 'binary'
    }
  }
};

