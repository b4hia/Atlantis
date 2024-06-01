import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

import Cliente from "../modelos/cliente";

export default class DeletarAcomodação extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(id: number): void {
        console.clear()
        console.log('Iniciando a exclusão do cliente de ID ' + id + '...')
        const DeletadorBusca = this.clientes.find(cliente => cliente.Id === id) //bsco o cliente pelo id independente se e titular ou dependente
        if (DeletadorBusca) {
            if (this.titular(DeletadorBusca)) { //verifica se o cliente é titular
                this.clientes = this.clientes.filter(cliente => cliente.Titular?.Id !== id) }//dependentesdo titular tbm
            this.clientes = this.clientes.filter(cliente => cliente.Id !== id)
            Armazem.InstanciaUnica.atualizarClientes(this.clientes) // Atualiza a lista de clientes lá no Armazem sem o cliente excluído
            console.log('Cliente de ID ' + id + ' foi excluído com sucesso.')
        } else {
            console.log('Não foi encontrado um cliente com o ID ' + id)
        }
        
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return cliente.Titular == undefined, verificacao
    }
}