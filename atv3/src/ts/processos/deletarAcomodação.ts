import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
export default class DeletarAcomodação extends Processo {
    private acomodacoes: Acomodacao[]
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(numero: number): void {
        console.clear()
        console.log('Iniciando a exclusão da acomodação de numero ' + numero + '...')
        const DeletadorBusca = this.acomodacoes.find(acomodacao => acomodacao.NumeroQuarto === numero) //bsco o cliente pelo id independente se e titular ou dependente
        const RemoverCliente = this.clientes.find(cliente => cliente.Acomodacao === DeletadorBusca) //busco o cliente pelo id
        if (DeletadorBusca) {
            if (RemoverCliente) {
                RemoverCliente.setAcomodacao = undefined;
            }
            this.acomodacoes = this.acomodacoes.filter(acomodacao => acomodacao.NumeroQuarto !== numero)
            Armazem.InstanciaUnica.atualizarAcomodacoes(this.acomodacoes) // Atualiza a lista de clientes lá no Armazem sem o cliente excluído
            console.log('Acomodação de Número: ' + numero + ' foi excluída com sucesso.')
        } else {
            console.log('Não foi encontrado um cliente com o ID ' + numero)
        }
    }
}