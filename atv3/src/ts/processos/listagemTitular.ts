import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitular extends Processo {
    private cliente: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.cliente = Armazem.InstanciaUnica.Clientes
    }
    processar(id: number): void {
        console.clear()
        console.log('Iniciando a listagem do titular de id: ' + id + '...')
        this.cliente
            .filter(cliente => cliente.Id === id && this.titular(cliente)) //busca o cliente com id especifico
            .forEach(cliente => {
                this.impressor = new ImpressaorCliente(cliente)
                console.log(this.impressor.imprimir())
            })
        }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}