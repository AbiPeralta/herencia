"use strict";
exports.__esModule = true;
exports.Suscripcion = void 0;
var Suscripcion = /** @class */ (function () {
    function Suscripcion() {
    }
    Suscripcion.prototype.setMostrarAnuncios = function (show) {
        this.mostrarAnuncios = show;
    };
    Suscripcion.prototype.getMostrarAnuncios = function () {
        return this.mostrarAnuncios;
    };
    Suscripcion.prototype.setCosto = function (costo) {
        this.costo = costo;
    };
    Suscripcion.prototype.getCosto = function () {
        return this.costo;
    };
    Suscripcion.prototype.setVigencia = function (vigencia) {
        this.vigencia = vigencia;
    };
    Suscripcion.prototype.getVigencia = function () {
        return this.vigencia;
    };
    return Suscripcion;
}());
exports.Suscripcion = Suscripcion;
