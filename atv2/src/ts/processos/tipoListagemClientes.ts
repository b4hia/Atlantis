import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemDependente from "./listagemDependente";
import ListagemDependentes from "./listagemDependentes";
import ListagemDependentesDoTitular from "./listagemdependentesdotitular";
import ListagemTitular from "./listagemTitular";
import ListagemTitulares from "./listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                let titid = this.entrada.receberNumero('Qual o ID do titular?')
                this.processo = new ListagemTitular()
                this.processo.processar(titid)
                break;
            case 2:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 3:
                let id = this.entrada.receberNumero('Qual o ID do titular?')
                this.processo = new ListagemDependentesDoTitular()
                this.processo.processar(id)
                break;
            case 5:
                let depid = this.entrada.receberNumero('Qual o ID do dependente?')
                this.processo = new ListagemDependente()
                this.processo.processar(depid)
                break;
            case 6:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break;

            default:
                console.log('Opção não entendida... :(')
        }
    }
}