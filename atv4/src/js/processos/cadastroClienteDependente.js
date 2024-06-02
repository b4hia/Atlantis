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
var cliente_1 = __importDefault(require("../modelos/cliente"));
var armazem_1 = __importDefault(require("../dominio/armazem"));
var cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
var processo_1 = __importDefault(require("../abstracoes/processo"));
var clone_1 = __importDefault(require("./clone"));
var CadastroClienteDependente = /** @class */ (function (_super) {
    __extends(CadastroClienteDependente, _super);
    function CadastroClienteDependente() {
        var _this = _super.call(this) || this;
        _this.execucao = true;
        return _this;
    }
    CadastroClienteDependente.prototype.processar = function () {
        var _this = this;
        var armazem = armazem_1.default.InstanciaUnica;
        var dep_id = armazem.gerarID();
        var clone = new clone_1.default;
        console.log('Iniciando o cadastro de um novo dependente...');
        var idTitular = this.entrada.receberNumero('Digite o id do cliente titular: ');
        while (this.execucao) {
            armazem.Clientes.forEach(function (cliente) {
                if (cliente.Id == idTitular && cliente.Titular == null) {
                    _this.titular = cliente; //procuro um titular com id
                }
            });
            if (this.titular == null) { //se não houver titular
                console.log('Nenhum cliente titular encontrado!');
                idTitular = this.entrada.receberNumero('Digite o id do cliente titular: ');
            }
            else {
                this.execucao = false;
            }
        }
        var nome = this.entrada.receberTexto('Qual o nome do novo dependente?');
        var nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?');
        var dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        var clienteDependente = new cliente_1.default(dep_id, nome, nomeSocial, dataNascimento);
        this.processo = new cadastrarDocumentosCliente_1.default(clienteDependente);
        this.processo.processar();
        clienteDependente.setEndereco = this.titular.Endereco.clonar();
        clienteDependente.setTelefones = clone.clonar(this.titular);
        clienteDependente.setTitular = this.titular;
        this.titular.setDependentes = clienteDependente;
        armazem.Clientes.push(clienteDependente);
        armazem.ClienteId = dep_id;
        console.log("Finalizando o cadastro do dependente... seu ID \u00E9: ".concat(dep_id, "!"));
    };
    return CadastroClienteDependente;
}(processo_1.default));
exports.default = CadastroClienteDependente;
