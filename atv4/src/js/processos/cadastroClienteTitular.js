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
var cliente_1 = __importDefault(require("../modelos/cliente"));
var cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
var cadastrarTelefone_1 = __importDefault(require("./cadastrarTelefone"));
var cadastroEnderecoTitular_1 = __importDefault(require("./cadastroEnderecoTitular"));
var CadastroClienteTitular = /** @class */ (function (_super) {
    __extends(CadastroClienteTitular, _super);
    function CadastroClienteTitular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CadastroClienteTitular.prototype.processar = function () {
        var armazem = armazem_1.default.InstanciaUnica;
        console.log('Iniciando o cadastro de um novo cliente...');
        var nome = this.entrada.receberTexto('Qual o nome do novo cliente?');
        var nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?');
        var dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        var id = armazem.gerarID();
        var cliente = new cliente_1.default(id, nome, nomeSocial, dataNascimento);
        this, this.processo = new cadastrarTelefone_1.default(cliente);
        this.processo.processar();
        this.processo = new cadastroEnderecoTitular_1.default(cliente);
        this.processo.processar();
        this.processo = new cadastrarDocumentosCliente_1.default(cliente);
        this.processo.processar();
        armazem.Clientes.push(cliente);
        armazem.ClienteId = id;
        console.log("Finalizando o cadastro do cliente... ID: ".concat(id, "!"));
    };
    return CadastroClienteTitular;
}(processo_1.default));
exports.default = CadastroClienteTitular;
