import Processo from "../abstracoes/processo";
import MenuTipoListagemAcomodações from "../menus/menuTipoListagemAcomodações";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemAcomodacoes from "./listagemAcomodacoes";
import ListagemDependente from "./listagemDependente";
import ListagemDependentes from "./listagemDependentes";
import ListagemDependentesDoTitular from "./listagemdependentesdotitular";
import ListagemTitular from "./listagemTitular";
import ListagemTitularDoDependente from "./listagemtitulardodependente";
import ListagemTitulares from "./listagemTitulares";

export default class TipoListagemAcomodações extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemAcomodações()
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
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break;
            case 4:
                let aid = this.entrada.receberNumero('Qual o ID do dependente?')
                this.processo = new ListagemTitularDoDependente()
                this.processo.processar(aid)
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