"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cadastroAcomodacaoSolteiroSimples_1 = __importDefault(require("../processos/cadastroAcomodacaoSolteiroSimples"));
var principal_1 = __importDefault(require("../processos/principal"));
console.clear();
console.log("\n░█████╗░████████╗██╗░░░░░░█████╗░███╗░░██╗████████╗██╗░██████╗\n██╔══██╗╚══██╔══╝██║░░░░░██╔══██╗████╗░██║╚══██╔══╝██║██╔════╝\n███████║░░░██║░░░██║░░░░░███████║██╔██╗██║░░░██║░░░██║╚█████╗\n██╔══██║░░░██║░░░██║░░░░░██╔══██║██║╚████║░░░██║░░░██║░╚═══██╗\n██║░░██║░░░██║░░░███████╗██║░░██║██║░╚███║░░░██║░░░██║██████╔╝");
var processo;
var execucao = true;
processo = new cadastroAcomodacaoSolteiroSimples_1.default();
processo.processar();
while (execucao) {
    processo = new principal_1.default();
    processo.processar();
    execucao = processo.Execucao;
}
