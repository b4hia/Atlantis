import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import MenuTipoAtualizadorCliente from "../menus/menuTipoAtualizadorCliente"
import Cliente from "../modelos/cliente"
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente"

export default class UpdDependente extends Processo {
    private Dependente!: Cliente

    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuTipoAtualizadorCliente
    }

    public processar(): void {
        let armazem = Armazem.InstanciaUnica

        console.log('Inicializando a atualização do cliente dependente...')
        let id = this.entrada.receberNumero('Digite o id do cliente dependente: ')

        while (this.execucao) { // Cada dependente é um cliente
            armazem.Clientes.forEach(cliente => {
                if (cliente.Id == id && cliente.Dependentes == null) { // O cliente é um dependente
                    this.Dependente = cliente
                }
            })

            if (this.Dependente == null) { //Não tem dependente
                console.log('Dependente não encontrado!')
                this.execucao = false
            }

            else {
                this.Dependente.setNome = this.entrada.receberTexto('Digite o novo nome: ')
                this.Dependente.setNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ')

                this.processo = new CadastrarDocumentosCliente(this.Dependente)
                this.processo.processar()

                console.log(`Atualização do dependente: ${this.Dependente.Nome} finalizada!`)
                this.execucao = false
            }
        }
    }
}