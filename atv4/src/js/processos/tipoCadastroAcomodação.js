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
var menuTipoCadastroAcomoda__es_1 = __importDefault(require("../menus/menuTipoCadastroAcomoda\u00E7\u00F5es"));
var cadastroAcomodacaoSolteiroSimples_1 = __importDefault(require("./cadastroAcomodacaoSolteiroSimples"));
var cadastroAcomoda__oCasalSimples_1 = __importDefault(require("./cadastroAcomoda\u00E7\u00E3oCasalSimples"));
var cadastroAcomoda__oFamiliaSimples_1 = __importDefault(require("./cadastroAcomoda\u00E7\u00E3oFamiliaSimples"));
var cadastroAcomoda__oFamiliaMais_1 = __importDefault(require("./cadastroAcomoda\u00E7\u00E3oFamiliaMais"));
var cadastroAcomoda__oFamiliaSuper_1 = __importDefault(require("./cadastroAcomoda\u00E7\u00E3oFamiliaSuper"));
var cadastroAcomoda__oSolteiroMais_1 = __importDefault(require("./cadastroAcomoda\u00E7\u00E3oSolteiroMais"));
var TipoCadastroAcomodação = /** @class */ (function (_super) {
    __extends(TipoCadastroAcomodação, _super);
    function TipoCadastroAcomodação() {
        var _this = _super.call(this) || this;
        _this.menu = new menuTipoCadastroAcomoda__es_1.default();
        return _this;
    }
    TipoCadastroAcomodação.prototype.processar = function () {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new cadastroAcomoda__oCasalSimples_1.default();
                this.processo.processar();
                break;
            case 2:
                this.processo = new cadastroAcomoda__oFamiliaSimples_1.default();
                this.processo.processar();
                break;
            case 3:
                this.processo = new cadastroAcomoda__oFamiliaMais_1.default();
                this.processo.processar();
                break;
            case 4:
                this.processo = new cadastroAcomoda__oFamiliaSuper_1.default();
                this.processo.processar();
                break;
            case 5:
                this.processo = new cadastroAcomodacaoSolteiroSimples_1.default();
                this.processo.processar();
                break;
            case 6:
                this.processo = new cadastroAcomoda__oSolteiroMais_1.default();
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    };
    return TipoCadastroAcomodação;
}(processo_1.default));
exports.default = TipoCadastroAcomodação;
