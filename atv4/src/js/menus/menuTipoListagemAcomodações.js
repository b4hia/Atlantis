"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuTipoListagemAcomodações = /** @class */ (function () {
    function MenuTipoListagemAcomodações() {
    }
    MenuTipoListagemAcomodações.prototype.mostrar = function () {
        console.clear();
        console.log("****************************");
        console.log("| Qual o tipo de listagem desejada? ");
        console.log("----------------------");
        console.log("| 1 - Listar acomoda\u00E7\u00F5es que est\u00E3o dispon\u00EDveis");
        console.log("| 2 - Listar acomoda\u00E7\u00E3o especifica");
        console.log("| 3 - Todos as acomoda\u00E7\u00F5es");
        console.log("| 4 - Acomoda\u00E7\u00F5es ocupadas");
        console.log("----------------------");
    };
    return MenuTipoListagemAcomodações;
}());
exports.default = MenuTipoListagemAcomodações;
