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
var endereco_1 = __importDefault(require("../modelos/endereco"));
var CadastroEnderecoTitular = /** @class */ (function (_super) {
    __extends(CadastroEnderecoTitular, _super);
    function CadastroEnderecoTitular(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    CadastroEnderecoTitular.prototype.processar = function () {
        console.log('Coletando os dados de endereço...');
        var rua = this.entrada.receberTexto('Qual a rua?');
        var bairro = this.entrada.receberTexto('Qual o bairro?');
        var cidade = this.entrada.receberTexto('Qual a cidade?');
        var estado = this.entrada.receberTexto('Qual o estado?');
        var pais = this.entrada.receberTexto('Qual o país?');
        var codigoPostal = this.entrada.receberTexto('Qual o código postal?');
        var endereco = new endereco_1.default(rua, bairro, cidade, estado, pais, codigoPostal);
        this.cliente.setEndereco = endereco;
    };
    return CadastroEnderecoTitular;
}(processo_1.default));
exports.default = CadastroEnderecoTitular;
