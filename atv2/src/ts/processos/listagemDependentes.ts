import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorCliente from "../impressores/impressorCliente"
import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"

// Listar todos os dependentes
export default class ListagemDependentes extends Processo {
    private cli: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.cli = Armazem.InstanciaUnica.Clientes
    }

    private proprietario(cliente: Cliente): boolean { // Verifica se é ou não é um Titular
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }

    processar(): void {
        console.clear()
        this.cli.forEach(cliente => { // Para cada cliente 
            if (!this.proprietario(cliente)) { // Se for um dependente 
                console.log('Iniciando a listagem dos clientes dependentes...')
                this.impressor = new ImpressorCliente(cliente)
                console.log(this.impressor.imprimir()) // Lista todos os seus dados 
            }
        })
    }

}