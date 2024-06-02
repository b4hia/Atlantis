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
var menuTipoDocumento_1 = __importDefault(require("../menus/menuTipoDocumento"));
var cadastroCnh_1 = __importDefault(require("./cadastroCnh"));
var cadastroCpf_1 = __importDefault(require("./cadastroCpf"));
var cadastroPassaporte_1 = __importDefault(require("./cadastroPassaporte"));
var cadastroRg_1 = __importDefault(require("./cadastroRg"));
var CadastrarDocumentosCliente = /** @class */ (function (_super) {
    __extends(CadastrarDocumentosCliente, _super);
    function CadastrarDocumentosCliente(cliente) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        _this.menu = new menuTipoDocumento_1.default();
        _this.execucao = true;
        return _this;
    }
    CadastrarDocumentosCliente.prototype.processar = function () {
        console.log('Inciando o cadastro de documentos...');
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção desejada?');
            switch (this.opcao) {
                case 1:
                    this.processo = new cadastroCpf_1.default(this.cliente);
                    this.processo.processar();
                    break;
                case 2:
                    this.processo = new cadastroRg_1.default(this.cliente);
                    this.processo.processar();
                    break;
                case 3:
                    this.processo = new cadastroCnh_1.default(this.cliente);
                    this.processo.processar();
                    break;
                case 4:
                    this.processo = new cadastroPassaporte_1.default(this.cliente);
                    this.processo.processar();
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    };
    return CadastrarDocumentosCliente;
}(processo_1.default));
exports.default = CadastrarDocumentosCliente;
