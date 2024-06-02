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
var armazem_1 = __importDefault(require("../dominio/armazem"));
var menuTipoAtualizadorCliente_1 = __importDefault(require("../menus/menuTipoAtualizadorCliente"));
var cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
var UpdDependente = /** @class */ (function (_super) {
    __extends(UpdDependente, _super);
    function UpdDependente() {
        var _this = _super.call(this) || this;
        _this.execucao = true;
        _this.menu = new menuTipoAtualizadorCliente_1.default;
        return _this;
    }
    UpdDependente.prototype.processar = function () {
        var _this = this;
        var armazem = armazem_1.default.InstanciaUnica;
        console.log('Inicializando a atualização do cliente dependente...');
        var id = this.entrada.receberNumero('Digite o id do cliente dependente: ');
        while (this.execucao) { // Cada dependente é um cliente
            armazem.Clientes.forEach(function (cliente) {
                if (cliente.Id == id && cliente.Dependentes == null) { // O cliente é um dependente
                    _this.Dependente = cliente;
                }
            });
            if (this.Dependente == null) { //Não tem dependente
                console.log('Dependente não encontrado!');
                this.execucao = false;
            }
            else {
                this.Dependente.setNome = this.entrada.receberTexto('Digite o novo nome: ');
                this.Dependente.setNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ');
                this.processo = new cadastrarDocumentosCliente_1.default(this.Dependente);
                this.processo.processar();
                console.log("Atualiza\u00E7\u00E3o do dependente: ".concat(this.Dependente.Nome, " finalizada!"));
                this.execucao = false;
            }
        }
    };
    return UpdDependente;
}(processo_1.default));
exports.default = UpdDependente;
