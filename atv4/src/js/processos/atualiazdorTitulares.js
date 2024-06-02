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
var clone_1 = __importDefault(require("./clone"));
var cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
var cadastroEnderecoTitular_1 = __importDefault(require("./cadastroEnderecoTitular"));
var cadastrarTelefone_1 = __importDefault(require("./cadastrarTelefone"));
var AtualizadorTitulares = /** @class */ (function (_super) {
    __extends(AtualizadorTitulares, _super);
    function AtualizadorTitulares() {
        var _this = _super.call(this) || this;
        _this.execucao = true;
        return _this;
    }
    AtualizadorTitulares.prototype.processar = function () {
        var _this = this;
        var armazem = armazem_1.default.InstanciaUnica;
        var TelefoneClonado = new clone_1.default;
        console.log('Inicializando a atualização do cliente titular...');
        var id = this.entrada.receberNumero('Digite o id do cliente titular: ');
        while (this.execucao) { //verifico se existe um titular com o id
            armazem.Clientes.forEach(function (cliente) {
                if (cliente.Id == id && cliente.Titular == null) {
                    _this.Titular = cliente;
                }
            });
            if (this.Titular == null) { //caso não exista
                console.log('Titular não encontrado!');
                this.execucao = false;
            }
            else {
                this.Titular.setNome = this.entrada.receberTexto('Digite o novo nome: ');
                this.Titular.setNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ');
                this.processo = new cadastrarDocumentosCliente_1.default(this.Titular);
                this.processo.processar();
                this.processo = new cadastroEnderecoTitular_1.default(this.Titular);
                this.processo.processar();
                this.processo = new cadastrarTelefone_1.default(this.Titular);
                this.processo.processar();
                this.Titular.Dependentes.forEach(function (dependente) {
                    dependente.setEndereco = _this.Titular.Endereco.clonar();
                    dependente.setTelefones = TelefoneClonado.clonar(_this.Titular);
                });
                console.log("Atualiza\u00E7\u00E3o do titular: ".concat(this.Titular.Nome, " finalizada!"));
                this.execucao = false;
            }
        }
    };
    return AtualizadorTitulares;
}(processo_1.default));
exports.default = AtualizadorTitulares;
