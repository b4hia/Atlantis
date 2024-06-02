"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(rua, bairro, cidade, estado, pais, codigoPostal) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.codigoPostal = codigoPostal;
    }
    Object.defineProperty(Endereco.prototype, "Rua", {
        get: function () { return this.rua; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "Bairro", {
        get: function () { return this.bairro; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "Cidade", {
        get: function () { return this.cidade; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "Estado", {
        get: function () { return this.estado; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "Pais", {
        get: function () { return this.pais; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "CodigoPostal", {
        get: function () { return this.codigoPostal; },
        enumerable: false,
        configurable: true
    });
    Endereco.prototype.clonar = function () {
        var endereco = new Endereco(this.rua, this.bairro, this.cidade, this.estado, this.pais, this.codigoPostal);
        return endereco;
    };
    Object.defineProperty(Endereco.prototype, "setRua", {
        set: function (rua) { this.rua = rua; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "setBairro", {
        set: function (bairro) { this.bairro = bairro; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "setCidade", {
        set: function (cidade) { this.cidade = cidade; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "setEstado", {
        set: function (estado) { this.estado = estado; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "setPais", {
        set: function (pais) { this.pais = pais; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "setCodigoPostal", {
        set: function (codigoPostal) { this.codigoPostal = codigoPostal; },
        enumerable: false,
        configurable: true
    });
    return Endereco;
}());
exports.default = Endereco;
