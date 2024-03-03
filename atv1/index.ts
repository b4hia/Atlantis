
import Cadastro from "./cadastro/cadastro";
import Entrada from "./teste/entrada";


let entrada = new Entrada
let cadastrarCliente = new Cadastro

while (true) {
    console.log("Bem vindo à Atlantis!")
    console.log("---- MENU ----")
    console.log("1 - Cadastrar Cliente")
    console.log("0 - Sair")

    let cadastrar = entrada.receberNumero("Digite uma opção: ")
    switch (cadastrar) {
        case 1: {
            let cli = cadastrarCliente.cadastrarCliente()
            console.dir(cli, { depth: null })
            break;
        }

        case 0: {
            console.log("Até a próxima.")
            break;

        }

        default: {
            console.log("Opção invalida, digite novamente")
        }
    }
    break;

}