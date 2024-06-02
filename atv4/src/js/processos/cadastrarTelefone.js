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
var telefone_1 = __importDefault(require("../modelos/telefone"));
var CadastroTelefone = /** @class */ (function (_super) {
    __extends(CadastroTelefone, _super);
    function CadastroTelefone(cliente) {
        var _this = _super.call(this) || this;
        _this.cli = cliente;
        _this.execucao = true;
        return _this;
    }
    CadastroTelefone.prototype.processar = function () {
        console.clear();
        console.log('Iniciando o cadastro de telefones...');
        console.log("****************************");
        while (this.execucao) {
            console.log("----------------------");
            console.log("| 1 - Cadastrar um novo n\u00FAmero de telefone");
            console.log("| 0 - Finalizar o cadastro de telefones");
            console.log("----------------------");
            this.opcao = this.entrada.receberNumero('| Digite a opção desejada: ');
            switch (this.opcao) {
                case 1:
                    console.log('Coletando os dados do telefone...');
                    var ddd = this.entrada.receberTexto('Digite o ddd: ');
                    var numero = this.entrada.receberTexto('Digite o número: ');
                    var telefone = new telefone_1.default(ddd, numero);
                    this.cli.Telefones.push(telefone);
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    };
    return CadastroTelefone;
}(processo_1.default));
exports.default = CadastroTelefone;
