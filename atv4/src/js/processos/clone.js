"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clonador = /** @class */ (function () {
    function Clonador() {
    }
    Clonador.prototype.clonar = function (main) {
        var listTels = [];
        main.Telefones.forEach(function (telefone) {
            listTels.push(telefone);
        });
        return listTels;
    };
    return Clonador;
}());
exports.default = Clonador;
