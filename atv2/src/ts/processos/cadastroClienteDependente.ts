import Cliente from "../modelos/cliente";
import Armazem from "../dominio/armazem";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import Processo from "../abstracoes/processo";
import Clonador from "./clone";

export default class CadastroClienteDependente extends Processo {
    private titular!: Cliente
    public constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        let dep_id = armazem.ClienteId + 1
        let clone = new Clonador

        console.log('Iniciando o cadastro de um novo dependente...')
        let idTitular = this.entrada.receberNumero('Digite o id do cliente titular: ')
        while (this.execucao) {
            armazem.Clientes.forEach(cliente => { 
                if (cliente.Id == idTitular && cliente.Titular == null) {
                    this.titular = cliente //procuro um titular com id
                }
            })
            if (this.titular == null) { //se não houver titular
                console.log('Nenhum cliente titular encontrado!')
                idTitular = this.entrada.receberNumero('Digite o id do cliente titular: ')
            }

            else { this.execucao = false }
        }
        let nome = this.entrada.receberTexto('Qual o nome do novo dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')

        let clienteDependente = new Cliente(dep_id, nome, nomeSocial, dataNascimento)

        this.processo = new CadastrarDocumentosCliente(clienteDependente)
        this.processo.processar()

        clienteDependente.setEndereco = this.titular.Endereco.clonar()
        clienteDependente.setTelefones = clone.clonar(this.titular)

        clienteDependente.setTitular = this.titular
        this.titular.setDependentes = clienteDependente

        armazem.Clientes.push(clienteDependente)
        armazem.ClienteId = dep_id

        console.log(`Finalizando o cadastro do dependente... ID: ${dep_id}!`)
    }
}