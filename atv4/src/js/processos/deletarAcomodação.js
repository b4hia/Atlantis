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
var DeletarAcomodação = /** @class */ (function (_super) {
    __extends(DeletarAcomodação, _super);
    function DeletarAcomodação() {
        var _this = _super.call(this) || this;
        _this.clientes = armazem_1.default.InstanciaUnica.Clientes;
        _this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
        return _this;
    }
    DeletarAcomodação.prototype.processar = function (numero) {
        console.clear();
        console.log('Iniciando a exclusão da acomodação de numero ' + numero + '...');
        var DeletadorBusca = this.acomodacoes.find(function (acomodacao) { return acomodacao.NumeroQuarto === numero; }); //bsco o cliente pelo id independente se e titular ou dependente
        var RemoverCliente = this.clientes.find(function (cliente) { return cliente.Acomodacao === DeletadorBusca; }); //busco o cliente pelo id
        if (DeletadorBusca) {
            if (RemoverCliente) {
                RemoverCliente.setAcomodacao = undefined;
            }
            this.acomodacoes = this.acomodacoes.filter(function (acomodacao) { return acomodacao.NumeroQuarto !== numero; });
            armazem_1.default.InstanciaUnica.atualizarAcomodacoes(this.acomodacoes); // Atualiza a lista de clientes lá no Armazem sem o cliente excluído
            console.log('Acomodação de Número: ' + numero + ' foi excluída com sucesso.');
        }
        else {
            console.log('Não foi encontrado um cliente com o ID ' + numero);
        }
    };
    return DeletarAcomodação;
}(processo_1.default));
exports.default = DeletarAcomodação;
