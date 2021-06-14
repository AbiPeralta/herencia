"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var free_1 = require("./free");
var basic_1 = require("./basic");
var premium_1 = require("./premium");
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.suscripcion = new free_1.Free();
    }
    Usuario.prototype.setId = function (id) {
        this.id = id;
    };
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Usuario.prototype.getApellido = function () {
        return this.apellido;
    };
    /**
     * Patron de diseño factory
     * @param suscripcion
     */
    Usuario.prototype.setSuscripcion = function (suscripcion) {
        switch (suscripcion) {
            case 'free':
                this.suscripcion = new free_1.Free();
                break;
            case 'basic':
                this.suscripcion = new basic_1.Basic();
                break;
            case 'premium':
                this.suscripcion = new premium_1.Premium();
                break;
        }
    };
    /**
     *
     * @returns
     */
    Usuario.prototype.getSuscripcion = function () {
        return this.suscripcion;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
