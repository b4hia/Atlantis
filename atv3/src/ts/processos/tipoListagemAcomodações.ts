import Processo from "../abstracoes/processo";
import MenuTipoListagemAcomodações from "../menus/menuTipoListagemAcomodações";
import ListagemAcomodacoes from "./listagemAcomodacoes";
import ListagemAcomodacao from "./listagemAcomodação";
import ListagemAcomodacaoLivre from "./listagemAcomodaçãoLivre";


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
                this.processo = new ListagemAcomodacaoLivre()
                this.processo.processar()
                break;
            case 2:
                let numero = this.entrada.receberNumero('Qual o número da Acomadação?')
                this.processo = new ListagemAcomodacao()
                this.processo.processar(numero)
                break;
            case 3:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}