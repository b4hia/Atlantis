import Cadastro from "./cadastro/cadastro";
import Entrada from "./teste/entrada";
import CadastrarDependente from "./cadastro/cadastroDependente";
import Cliente from "./modelos/cliente";

let entrada = new Entrada();
let cadastro = new Cadastro();
let cadastrarDependente = new CadastrarDependente();



while (true) {
    console.log("\n░█████╗░████████╗██╗░░░░░░█████╗░███╗░░██╗████████╗██╗░██████╗\n██╔══██╗╚══██╔══╝██║░░░░░██╔══██╗████╗░██║╚══██╔══╝██║██╔════╝\n███████║░░░██║░░░██║░░░░░███████║██╔██╗██║░░░██║░░░██║╚█████╗\n██╔══██║░░░██║░░░██║░░░░░██╔══██║██║╚████║░░░██║░░░██║░╚═══██╗\n██║░░██║░░░██║░░░███████╗██║░░██║██║░╚███║░░░██║░░░██║██████╔╝")
    console.log("--------------------------------------------------------------\n")
    console.log("---------------------------- MENU ----------------------------")
    console.log("1 - Cadastrar Cliente")
    console.log("0 - Sair")

    let opcao = entrada.receberNumero("Digite uma opção: ");
    
    switch (opcao) {
        case 1: {
            let titular = cadastro.cadastrarCliente();
            console.dir(titular, { depth: null });
            break;
        }

        case 0: {
            console.log("Até a próxima.");
            break;
        }

        default: {
            console.log("Opção inválida, digite novamente.");
            break;
        }
    }
}

