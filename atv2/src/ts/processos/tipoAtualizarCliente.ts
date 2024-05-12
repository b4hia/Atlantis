import Processo from "../abstracoes/processo";
import MenuTipoAtualizadorCliente from "../menus/menuTipoAtualizadorCliente";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
// import AtualizadorTitulares from "./atualizadorTitulares";
// import AtualizadorDependentes from "./atualizadorDependentes";

export default class TipoAtualizadorClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoAtualizadorCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                // this.processo = new AtualizadorTitular()
                this.processo.processar()
                break;

            // case 2:
            //     this.processo = new ListagemDependentes()
            //     this.processo.processar()
            //     break;

            default:
                console.log('Opção não entendida... :(')
        }
    }
}