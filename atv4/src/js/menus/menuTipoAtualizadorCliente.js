"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuTipoAtualizadorCliente = /** @class */ (function () {
    function MenuTipoAtualizadorCliente() {
    }
    MenuTipoAtualizadorCliente.prototype.mostrar = function () {
        console.clear();
        console.log("****************************");
        console.log("| Qual o tipo do cliente que deseja atualizar? ");
        console.log("----------------------");
        console.log("| 1 - Titular");
        console.log("| 2 - Dependente");
        console.log("----------------------");
    };
    return MenuTipoAtualizadorCliente;
}());
exports.default = MenuTipoAtualizadorCliente;
