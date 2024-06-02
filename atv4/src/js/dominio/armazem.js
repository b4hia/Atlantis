"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Armazem = /** @class */ (function () {
    function Armazem() {
        this.clientes = [];
        this.acomodacoes = [];
        this.cliente_id = 0; // Contador para saber os ids dos clientes
        this.numero_quartos = 100;
    }
    Object.defineProperty(Armazem, "InstanciaUnica", {
        get: function () {
            return this.instanciaUnica;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Armazem.prototype, "Clientes", {
        get: function () {
            return this.clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Armazem.prototype, "CliId", {
        get: function () {
            return this.cliente_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Armazem.prototype, "ClienteId", {
        get: function () {
            return this.CliId;
        },
        set: function (id) {
            this.cliente_id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Armazem.prototype, "Acomodacoes", {
        get: function () {
            return this.acomodacoes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Armazem.prototype, "NumeroQuartos", {
        get: function () {
            return this.numero_quartos;
        },
        set: function (numero) {
            this.numero_quartos = numero;
        },
        enumerable: false,
        configurable: true
    });
    Armazem.prototype.gerarID = function () {
        this.cliente_id += 1;
        return this.cliente_id;
    };
    Armazem.prototype.gerarNumeroAcomodacao = function () {
        this.numero_quartos += 10;
        return this.numero_quartos;
    };
    Armazem.prototype.atualizarClientes = function (clientes) {
        this.clientes = clientes;
    };
    Armazem.prototype.atualizarAcomodacoes = function (acomodacoes) {
        this.acomodacoes = acomodacoes;
    };
    Armazem.instanciaUnica = new Armazem();
    return Armazem;
}());
exports.default = Armazem;
