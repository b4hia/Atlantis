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
var AlugarAcomodação = /** @class */ (function (_super) {
    __extends(AlugarAcomodação, _super);
    function AlugarAcomodação() {
        var _this = _super.call(this) || this;
        _this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
        _this.clientes = armazem_1.default.InstanciaUnica.Clientes;
        return _this;
    }
    AlugarAcomodação.prototype.processar = function (id, numero) {
        var hospede = this.clientes.find(function (cliente) { return cliente.Id === id; });
        var quarto = this.acomodacoes.find(function (acomodacao) { return acomodacao.NumeroQuarto === numero; });
        if (hospede && quarto) {
            if (this.titular(hospede)) {
                hospede.setAcomodacao = quarto;
                quarto.setDisponivel = false;
                console.log('Acomodação de numero: ' + numero + ' alugada com sucesso, para o cliente de ID: ' + id, '!');
            }
            else {
                console.log('Apenas clientes Titulares podem fazer o aluguel de acomodações!');
            }
        }
        else {
            console.log('Cliente ou quarto não encontrado!');
        }
    };
    AlugarAcomodação.prototype.titular = function (cliente) {
        var verificacao = false;
        if (cliente.Titular == undefined) {
            verificacao = true;
        }
        return verificacao;
    };
    return AlugarAcomodação;
}(processo_1.default));
exports.default = AlugarAcomodação;
