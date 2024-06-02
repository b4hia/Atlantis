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
var DeletarCliente = /** @class */ (function (_super) {
    __extends(DeletarCliente, _super);
    function DeletarCliente() {
        var _this = _super.call(this) || this;
        _this.clientes = armazem_1.default.InstanciaUnica.Clientes;
        return _this;
    }
    DeletarCliente.prototype.processar = function (id) {
        console.clear();
        console.log('Iniciando a exclusão do cliente de ID ' + id + '...');
        var DeletadorBusca = this.clientes.find(function (cliente) { return cliente.Id === id; }); //bsco o cliente pelo id independente se e titular ou dependente
        if (DeletadorBusca) {
            if (this.titular(DeletadorBusca)) { //verifica se o cliente é titular
                this.clientes = this.clientes.filter(function (cliente) { var _a; return ((_a = cliente.Titular) === null || _a === void 0 ? void 0 : _a.Id) !== id; });
            } //dependentesdo titular tbm
            this.clientes = this.clientes.filter(function (cliente) { return cliente.Id !== id; });
            armazem_1.default.InstanciaUnica.atualizarClientes(this.clientes); // Atualiza a lista de clientes lá no Armazem sem o cliente excluído
            console.log('Cliente de ID ' + id + ' foi excluído com sucesso.');
        }
        else {
            console.log('Não foi encontrado um cliente com o ID ' + id);
        }
    };
    DeletarCliente.prototype.titular = function (cliente) {
        var verificacao = false;
        if (cliente.Titular == undefined) {
            verificacao = true;
        }
        return cliente.Titular == undefined, verificacao;
    };
    return DeletarCliente;
}(processo_1.default));
exports.default = DeletarCliente;
