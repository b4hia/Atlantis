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
var TipoDocumento_1 = require("../enumeracoes/TipoDocumento");
var documento_1 = __importDefault(require("../modelos/documento"));
var CadastroRg = /** @class */ (function (_super) {
    __extends(CadastroRg, _super);
    function CadastroRg(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        return _this;
    }
    CadastroRg.prototype.processar = function () {
        var numero = this.entrada.receberTexto('Qual o número do documento?');
        var dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?');
        var rg = new documento_1.default(numero, TipoDocumento_1.TipoDocumento.RG, dataExpedicao);
        this.cliente.Documentos.push(rg);
    };
    return CadastroRg;
}(processo_1.default));
exports.default = CadastroRg;
