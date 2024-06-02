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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var processo_1 = __importDefault(require("../abstracoes/processo"));
var armazem_1 = __importDefault(require("../dominio/armazem"));
var impressorAcomodacao_1 = __importDefault(require("../impressores/impressorAcomodacao"));
var ListagemAcomodacao = /** @class */ (function (_super) {
    __extends(ListagemAcomodacao, _super);
    function ListagemAcomodacao() {
        var _this = _super.call(this) || this;
        _this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
        return _this;
    }
    ListagemAcomodacao.prototype.processar = function (numero) {
        var _this = this;
        console.clear();
        console.log('Iniciando a listagem da acomodação de numero: ' + numero + '...');
        console.log("-------------------------------------------------");
        this.acomodacoes
            .filter(function (acomodacao) { return acomodacao.NumeroQuarto === numero; })
            .forEach(function (acomodacao) {
            _this.impressor = new impressorAcomodacao_1.default(acomodacao);
            console.log(_this.impressor.imprimir());
            console.log("-------------------------------------------------");
        });
    };
    return ListagemAcomodacao;
}(processo_1.default));
exports.default = ListagemAcomodacao;
