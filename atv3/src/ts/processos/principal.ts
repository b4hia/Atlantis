import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import AlugarAcomodação from "./AlugarAcomodação"
import CadastroAcomodacoes from "./cadastroAcomodacaoSolteiroSimples"
import DeletarAcomodação from "./deletarAcomodação"
import DeletarCliente from "./deletarCliente"
import TipoAtualizadorClientes from "./tipoAtualizarCliente"
import TipoCadastroAcomodação from "./tipoCadastroAcomodação"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemAcomodações from "./tipoListagemAcomodações"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoAtualizadorClientes()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                let id = this.entrada.receberNumero('Qual o ID do cliente que deseja excluir?')
                this.processo = new DeletarCliente()
                this.processo.processar(id)
                break
            case 5:
                let cli = this.entrada.receberNumero('Qual o ID do cliente que deseja alugar uma acomodação?')
                let quarto = this.entrada.receberNumero('Qual o número do quarto que deseja alugar?')
                this.processo = new AlugarAcomodação()
                this.processo.processar(cli, quarto)
                break
            case 6:
                this.processo = new TipoCadastroAcomodação()
                this.processo.processar()
                break
            case 7:
                this.processo = new TipoListagemAcomodações()
                this.processo.processar()
                break
            case 8:
                let numero = this.entrada.receberNumero('Qual o numero do quarto que deseja excluir?')
                this.processo = new DeletarAcomodação()
                this.processo.processar(numero)
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}