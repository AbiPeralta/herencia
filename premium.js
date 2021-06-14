"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Premium = void 0;
var suscripcion_1 = require("./suscripcion");
var Premium = /** @class */ (function (_super) {
    __extends(Premium, _super);
    function Premium() {
        var _this = _super.call(this) || this;
        _this.setMostrarAnuncios(false);
        return _this;
    }
    Premium.prototype.imprimir = function () { };
    return Premium;
}(suscripcion_1.Suscripcion));
exports.Premium = Premium;
