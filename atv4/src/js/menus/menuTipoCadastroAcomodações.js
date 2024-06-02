"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuTipoCadastroAcomodacoes = /** @class */ (function () {
    function MenuTipoCadastroAcomodacoes() {
    }
    MenuTipoCadastroAcomodacoes.prototype.mostrar = function () {
        console.clear();
        console.log("****************************");
        console.log("| Qual o tipo de acomoda\u00E7\u00E3o para cadastro? ");
        console.log("----------------------");
        console.log("| 1 - Acomoda\u00E7\u00E3o Casal Simples");
        console.log("| 2 - Acomoda\u00E7\u00E3o Fam\u00EDlia Simples");
        console.log("| 3 - Acomoda\u00E7\u00E3o Fam\u00EDlia Mais");
        console.log("| 4 - Acomoda\u00E7\u00E3o Fam\u00EDlia Super");
        console.log("| 5 - Acomoda\u00E7\u00E3o Solteiro Simples");
        console.log("| 6 - Acomoda\u00E7\u00E3o Solteiro Mais");
        console.log("----------------------");
    };
    return MenuTipoCadastroAcomodacoes;
}());
exports.default = MenuTipoCadastroAcomodacoes;
