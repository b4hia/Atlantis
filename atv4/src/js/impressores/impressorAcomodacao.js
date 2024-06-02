"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImpressorAcomodacao = /** @class */ (function () {
    function ImpressorAcomodacao(acomodacao, cliente) {
        this.acomodacao = acomodacao;
        this.cliente = cliente;
    }
    ImpressorAcomodacao.prototype.imprimir = function () {
        var descricao = "Nomenclatura: ".concat(this.acomodacao.NomeAcomadacao.toString(), "\n")
            + "-- Quantidade de leitos para solteiros: ".concat(this.acomodacao.CamaSolteiro, "\n")
            + "-- Quantidade de leitos para casais: ".concat(this.acomodacao.CamaCasal, "\n")
            + "-- Climatiza\u00E7\u00E3o: ".concat(this.converterBooleano(this.acomodacao.Climatizacao), "\n")
            + "-- Quantidade de garagens dispon\u00EDveis: ".concat(this.acomodacao.Garagem, "\n")
            + "-- Quantidade de suites: ".concat(this.acomodacao.Suite, "\n")
            + "-- Sua Acomoda\u00E7\u00E3o est\u00E1 localizada no Setor: ".concat(this.acomodacao.Identificador, "\n")
            + "-- O numero da Acomoda\u00E7\u00E3o \u00E9: ".concat(this.acomodacao.NumeroQuarto, "\n");
        if (this.cliente) {
            descricao += "Cliente: ".concat(this.cliente.Nome, "\n");
            descricao += "ID do Cliente: ".concat(this.cliente.Id, "\n");
            // ... rest of the cliente details ...
        }
        return descricao;
    };
    ImpressorAcomodacao.prototype.converterBooleano = function (valor) {
        if (valor) {
            return "sim";
        }
        else {
            return "n\u00E3o";
        }
    };
    return ImpressorAcomodacao;
}());
exports.default = ImpressorAcomodacao;
