import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularDoDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(id: number): void {
        console.clear()
        console.log('Iniciando a listagem do titular do dependente de ID ' + id + '...')
        let dependente: Cliente | undefined = this.clientes.find(cliente => cliente.Id === id)
        if (dependente && dependente.Titular?.Id) { //verifica se o dependente existe e se ele tem um titular
            let titular: Cliente | undefined = this.clientes.find(cliente => cliente.Id === dependente?.Titular?.Id) //procura o titular do dependente
            if (titular) { //se o titular existir (retorno True)
                this.impressor = new ImpressaorCliente(titular)
                console.log(this.impressor.imprimir())   
                }
            }else {
                console.log('Não foi encontrado um dependente com o ID ' + id + ' ou o dependente não tem um titular');
            }
    }
}