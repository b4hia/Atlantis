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
var menuTipoListagemClientes_1 = __importDefault(require("../menus/menuTipoListagemClientes"));
var listagemDependente_1 = __importDefault(require("./listagemDependente"));
var listagemDependentes_1 = __importDefault(require("./listagemDependentes"));
var listagemdependentesdotitular_1 = __importDefault(require("./listagemdependentesdotitular"));
var listagemTitular_1 = __importDefault(require("./listagemTitular"));
var listagemtitulardodependente_1 = __importDefault(require("./listagemtitulardodependente"));
var listagemTitulares_1 = __importDefault(require("./listagemTitulares"));
var TipoListagemClientes = /** @class */ (function (_super) {
    __extends(TipoListagemClientes, _super);
    function TipoListagemClientes() {
        var _this = _super.call(this) || this;
        _this.menu = new menuTipoListagemClientes_1.default();
        return _this;
    }
    TipoListagemClientes.prototype.processar = function () {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?');
        switch (this.opcao) {
            case 1:
                var titid = this.entrada.receberNumero('Qual o ID do titular?');
                this.processo = new listagemTitular_1.default();
                this.processo.processar(titid);
                break;
            case 2:
                this.processo = new listagemTitulares_1.default();
                this.processo.processar();
                break;
            case 3:
                var id = this.entrada.receberNumero('Qual o ID do titular?');
                this.processo = new listagemdependentesdotitular_1.default();
                this.processo.processar(id);
                break;
            case 4:
                var aid = this.entrada.receberNumero('Qual o ID do dependente?');
                this.processo = new listagemtitulardodependente_1.default();
                this.processo.processar(aid);
                break;
            case 5:
                var depid = this.entrada.receberNumero('Qual o ID do dependente?');
                this.processo = new listagemDependente_1.default();
                this.processo.processar(depid);
                break;
            case 6:
                this.processo = new listagemDependentes_1.default();
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida... :(');
        }
    };
    return TipoListagemClientes;
}(processo_1.default));
exports.default = TipoListagemClientes;
