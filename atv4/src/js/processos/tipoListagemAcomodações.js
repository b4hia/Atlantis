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
var menuTipoListagemAcomoda__es_1 = __importDefault(require("../menus/menuTipoListagemAcomoda\u00E7\u00F5es"));
var listagemAcomodacoes_1 = __importDefault(require("./listagemAcomodacoes"));
var listagemAcomoda__o_1 = __importDefault(require("./listagemAcomoda\u00E7\u00E3o"));
var listagemAcomoda__oLivre_1 = __importDefault(require("./listagemAcomoda\u00E7\u00E3oLivre"));
var listagemAcomoda__oOcupada_1 = __importDefault(require("./listagemAcomoda\u00E7\u00E3oOcupada"));
var TipoListagemAcomodações = /** @class */ (function (_super) {
    __extends(TipoListagemAcomodações, _super);
    function TipoListagemAcomodações() {
        var _this = _super.call(this) || this;
        _this.menu = new menuTipoListagemAcomoda__es_1.default();
        return _this;
    }
    TipoListagemAcomodações.prototype.processar = function () {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new listagemAcomoda__oLivre_1.default();
                this.processo.processar();
                break;
            case 2:
                var numero = this.entrada.receberNumero('Qual o número da Acomadação?');
                this.processo = new listagemAcomoda__o_1.default();
                this.processo.processar(numero);
                break;
            case 3:
                this.processo = new listagemAcomodacoes_1.default();
                this.processo.processar();
                break;
            case 4:
                this.processo = new listagemAcomoda__oOcupada_1.default();
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida... :(');
        }
    };
    return TipoListagemAcomodações;
}(processo_1.default));
exports.default = TipoListagemAcomodações;
