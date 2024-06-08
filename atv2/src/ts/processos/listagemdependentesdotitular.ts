import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentesDoTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(id: number): void {
        console.clear()
        console.log('Iniciando a listagem dos dependentes do titular de ID ' + id + '...')
        let titular: Cliente | undefined = this.clientes.find(cliente => cliente.Id === id)
        if (titular) {
            this.clientes.forEach(cliente => {
                if (!this.titular(cliente)) {
                    if (cliente.Titular?.Id === titular?.Id) {
                        this.impressor = new ImpressaorCliente(cliente)
                        console.log(this.impressor.imprimir())
                    }
                }
                else {
                    if (cliente.Id !== titular?.Id) {
                        console.log('O cliente de ID ' + cliente.Id + ' não é um dependente do titular de ID ' + id);
                    }
                }
            })
        }
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}