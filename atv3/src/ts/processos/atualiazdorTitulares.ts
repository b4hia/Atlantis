import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Cliente from "../modelos/cliente"
import Clonador from "./clone"
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente"
import CadastroEnderecoTitular from "./cadastroEnderecoTitular"
import CadastroTelefone from "./cadastrarTelefone"

export default class AtualizadorTitulares extends Processo {
    private Titular!: Cliente

    constructor() {
        super()
        this.execucao = true
    }

    public processar(): void {
        let armazem = Armazem.InstanciaUnica
        let TelefoneClonado = new Clonador

        console.log('Inicializando a atualização do cliente titular...')
        let id = this.entrada.receberNumero('Digite o id do cliente titular: ')

        while (this.execucao) { //verifico se existe um titular com o id
            armazem.Clientes.forEach(cliente => { 
                if (cliente.Id == id && cliente.Titular == null) { 
                    this.Titular = cliente
                }
            })
            if (this.Titular == null) { //caso não exista
                console.log('Titular não encontrado!')
                this.execucao = false
            } else {
                this.Titular.setNome = this.entrada.receberTexto('Digite o novo nome: ')
                this.Titular.setNomeSocial = this.entrada.receberTexto('Digite o novo nome social: ')

                this.processo = new CadastrarDocumentosCliente(this.Titular)
                this.processo.processar()

                this.processo = new CadastroEnderecoTitular(this.Titular)
                this.processo.processar()

                this.processo = new CadastroTelefone(this.Titular)
                this.processo.processar()

                this.Titular.Dependentes.forEach(dependente => { // para cada dependente eu clono os novos valores de endereço e telefone
                    dependente.setEndereco = this.Titular.Endereco.clonar()
                    dependente.setTelefones = TelefoneClonado.clonar(this.Titular)
                })

                console.log(`Atualização do titular: ${this.Titular.Nome} finalizada!`)
                this.execucao = false
            }
        }
    }
}