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
var menuTipoCadastroCliente_1 = __importDefault(require("../menus/menuTipoCadastroCliente"));
var cadastroClienteTitular_1 = __importDefault(require("./cadastroClienteTitular"));
var cadastroClienteDependente_1 = __importDefault(require("./cadastroClienteDependente"));
var TipoCadastroCliente = /** @class */ (function (_super) {
    __extends(TipoCadastroCliente, _super);
    function TipoCadastroCliente() {
        var _this = _super.call(this) || this;
        _this.menu = new menuTipoCadastroCliente_1.default();
        return _this;
    }
    TipoCadastroCliente.prototype.processar = function () {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new cadastroClienteTitular_1.default();
                this.processo.processar();
                break;
            case 2:
                this.processo = new cadastroClienteDependente_1.default();
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    };
    return TipoCadastroCliente;
}(processo_1.default));
exports.default = TipoCadastroCliente;
