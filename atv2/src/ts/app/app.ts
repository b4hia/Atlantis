import Processo from "../abstracoes/processo";
import Principal from "../processos/principal";

console.clear()
console.log("\n░█████╗░████████╗██╗░░░░░░█████╗░███╗░░██╗████████╗██╗░██████╗\n██╔══██╗╚══██╔══╝██║░░░░░██╔══██╗████╗░██║╚══██╔══╝██║██╔════╝\n███████║░░░██║░░░██║░░░░░███████║██╔██╗██║░░░██║░░░██║╚█████╗\n██╔══██║░░░██║░░░██║░░░░░██╔══██║██║╚████║░░░██║░░░██║░╚═══██╗\n██║░░██║░░░██║░░░███████╗██║░░██║██║░╚███║░░░██║░░░██║██████╔╝");

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}