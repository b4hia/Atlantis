"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var impressorDocumentos_1 = __importDefault(require("./impressorDocumentos"));
var impressorEndereco_1 = __importDefault(require("./impressorEndereco"));
var impressorTelefones_1 = __importDefault(require("./impressorTelefones"));
var ImpressaorCliente = /** @class */ (function () {
    function ImpressaorCliente(cliente) {
        this.cliente = cliente;
    }
    ImpressaorCliente.prototype.imprimir = function () {
        var impressao = "****************************\n"
            + "| ID: ".concat(this.cliente.Id, "\n") // coloquei para imprimir o ID do cliente 
            + "| Nome: ".concat(this.cliente.Nome, "\n")
            + "| Nome social: ".concat(this.cliente.NomeSocial, "\n")
            + "| Data de nascimento: ".concat(this.cliente.DataNascimento.toLocaleDateString(), "\n")
            + "| Data de cadastro: ".concat(this.cliente.DataCadastro.toLocaleDateString());
        this.impressor = new impressorEndereco_1.default(this.cliente.Endereco);
        impressao = impressao + "\n".concat(this.impressor.imprimir());
        this.impressor = new impressorDocumentos_1.default(this.cliente.Documentos);
        impressao = impressao + "\n".concat(this.impressor.imprimir());
        this.impressor = new impressorTelefones_1.default(this.cliente.Telefones);
        impressao = impressao + "\n".concat(this.impressor.imprimir());
        impressao = impressao + "\n****************************";
        return impressao;
    };
    return ImpressaorCliente;
}());
exports.default = ImpressaorCliente;
