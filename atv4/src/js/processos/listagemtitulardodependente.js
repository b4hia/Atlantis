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
var impressorCliente_1 = __importDefault(require("../impressores/impressorCliente"));
var ListagemTitularDoDependente = /** @class */ (function (_super) {
    __extends(ListagemTitularDoDependente, _super);
    function ListagemTitularDoDependente() {
        var _this = _super.call(this) || this;
        _this.clientes = armazem_1.default.InstanciaUnica.Clientes;
        return _this;
    }
    ListagemTitularDoDependente.prototype.processar = function (id) {
        var _a;
        console.clear();
        console.log('Iniciando a listagem do titular do dependente de ID ' + id + '...');
        var dependente = this.clientes.find(function (cliente) { return cliente.Id === id; });
        if (dependente && ((_a = dependente.Titular) === null || _a === void 0 ? void 0 : _a.Id)) { //verifica se o dependente existe e se ele tem um titular
            var titular = this.clientes.find(function (cliente) { var _a; return cliente.Id === ((_a = dependente === null || dependente === void 0 ? void 0 : dependente.Titular) === null || _a === void 0 ? void 0 : _a.Id); }); //procura o titular do dependente
            if (titular) { //se o titular existir (retorno True)
                this.impressor = new impressorCliente_1.default(titular);
                console.log(this.impressor.imprimir());
            }
        }
        else {
            console.log('Não foi encontrado um dependente com o ID ' + id + ' ou o dependente não tem um titular');
        }
    };
    return ListagemTitularDoDependente;
}(processo_1.default));
exports.default = ListagemTitularDoDependente;
