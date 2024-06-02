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
var ListagemAcomodacaoOcupada = /** @class */ (function (_super) {
    __extends(ListagemAcomodacaoOcupada, _super);
    function ListagemAcomodacaoOcupada() {
        var _this = _super.call(this) || this;
        _this.cliente = armazem_1.default.InstanciaUnica.Clientes;
        _this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
        return _this;
    }
    ListagemAcomodacaoOcupada.prototype.processar = function () {
        var _this = this;
        console.clear();
        console.log('Iniciando a listagem das acomodações ocupadas...');
        console.log("-------------------------------------------------");
        var acomodacoesOcupadas = this.acomodacoes.filter(function (acomodacao) { return !acomodacao.Disponivel; });
        acomodacoesOcupadas.forEach(function (acomodacao) {
            var cliente = _this.cliente.find(function (cliente) { return cliente.Acomodacao === acomodacao; });
            if (cliente) {
                _this.impressor = new impressorAcomodacao_1.default(acomodacao, cliente);
                console.log(_this.impressor.imprimir());
            }
            console.log("-------------------------------------------------");
        });
    };
    return ListagemAcomodacaoOcupada;
}(processo_1.default));
exports.default = ListagemAcomodacaoOcupada;
