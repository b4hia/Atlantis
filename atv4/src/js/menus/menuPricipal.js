"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuPrincipal = /** @class */ (function () {
    function MenuPrincipal() {
    }
    MenuPrincipal.prototype.mostrar = function () {
        console.log("****************************");
        console.log("| Por favor, selecione uma op\u00E7\u00E3o...");
        console.log("----------------------");
        console.log("| Op\u00E7\u00F5es para cliente:");
        console.log("----------------------");
        console.log("| 1 - Cadastrar cliente");
        console.log("| 2 - Editar cliente");
        console.log("| 3 - Listar cliente(s)");
        console.log("| 4 - Excluir cliente");
        console.log("| 5 - Alugar acomoda\u00E7\u00E3o");
        console.log("----------------------");
        console.log("| Op\u00E7\u00F5es para gest\u00E3o:");
        console.log("----------------------");
        console.log("| 6 - Cadastrar acomoda\u00E7\u00E3o");
        console.log("| 7 - Listar acomoda\u00E7\u00E3o(\u00F5es)");
        console.log("| 8 - Excluir acomoda\u00E7\u00E3o");
        console.log("----------------------");
        console.log("****************************");
        console.log("| 0 - Sair");
        console.log("----------------------");
    };
    return MenuPrincipal;
}());
exports.default = MenuPrincipal;
