"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuTipoCadastroCliente = /** @class */ (function () {
    function MenuTipoCadastroCliente() {
    }
    MenuTipoCadastroCliente.prototype.mostrar = function () {
        console.clear();
        console.log("****************************");
        console.log("| Qual o tipo do cliente para cadastro? ");
        console.log("----------------------");
        console.log("| 1 - Titular");
        console.log("| 2 - Dependente");
        console.log("----------------------");
    };
    return MenuTipoCadastroCliente;
}());
exports.default = MenuTipoCadastroCliente;
