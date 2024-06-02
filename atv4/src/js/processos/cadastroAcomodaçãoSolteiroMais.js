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
var diretorSolteiroMais_1 = __importDefault(require("../diretores/diretorSolteiroMais"));
var armazem_1 = __importDefault(require("../dominio/armazem"));
var CadastroAcomodacaoSolteiroMais = /** @class */ (function (_super) {
    __extends(CadastroAcomodacaoSolteiroMais, _super);
    function CadastroAcomodacaoSolteiroMais() {
        var _this = _super.call(this) || this;
        _this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
        return _this;
    }
    CadastroAcomodacaoSolteiroMais.prototype.processar = function () {
        var diretor = new diretorSolteiroMais_1.default();
        this.acomodacoes.push(diretor.construir());
        console.log("Finalizando o cadastro da acomoda\u00E7\u00E3o solteiro mais!");
    };
    return CadastroAcomodacaoSolteiroMais;
}(processo_1.default));
exports.default = CadastroAcomodacaoSolteiroMais;
