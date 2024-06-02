"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var armazem_1 = __importDefault(require("../dominio/armazem"));
var IdentificadorAcomoda__o_1 = require("../enumeracoes/IdentificadorAcomoda\u00E7\u00E3o");
var NomeAcomadacao_1 = require("../enumeracoes/NomeAcomadacao");
var acomodacao_1 = __importDefault(require("../modelos/acomodacao"));
var ConstrutorAcomodacao = /** @class */ (function () {
    function ConstrutorAcomodacao() {
        this.armazem = armazem_1.default.InstanciaUnica;
        this.nomeAcomodacao = NomeAcomadacao_1.NomeAcomadacao.SolteiroSimples;
        this.camaSolteiro = 0;
        this.camaCasal = 0;
        this.suite = 0;
        this.climatizacao = false;
        this.garagem = 0;
        this.identificador = IdentificadorAcomoda__o_1.IdentificadorAcomodação.PacíficoNorte;
        this.numeroQuarto = 0;
    }
    Object.defineProperty(ConstrutorAcomodacao.prototype, "Armazem", {
        set: function (armazem) { this.armazem = armazem; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "NomeAcomodacao", {
        set: function (nomeAcomodacao) { this.nomeAcomodacao = nomeAcomodacao; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "Identificador", {
        set: function (identificador) { this.identificador = identificador; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "NumeroQuarto", {
        set: function (numeroQuarto) { this.numeroQuarto = numeroQuarto; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "CamaSolteiro", {
        set: function (camaSolteiro) { this.camaSolteiro = camaSolteiro; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "CamaCasal", {
        set: function (camaCasal) { this.camaCasal = camaCasal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "Suite", {
        set: function (suite) { this.suite = suite; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "Climatizacao", {
        set: function (climatizacao) { this.climatizacao = climatizacao; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstrutorAcomodacao.prototype, "Garagem", {
        set: function (garagem) { this.garagem = garagem; },
        enumerable: false,
        configurable: true
    });
    ConstrutorAcomodacao.prototype.construir = function () {
        var acomodacao = new acomodacao_1.default(this.nomeAcomodacao, this.camaSolteiro, this.camaCasal, this.suite, this.climatizacao, this.garagem, this.identificador, this.numeroQuarto);
        return acomodacao;
    };
    return ConstrutorAcomodacao;
}());
exports.default = ConstrutorAcomodacao;
