import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class ListagemAcomodacaoOcupada extends Processo {
    private acomodacoes: Acomodacao[]
    private cliente: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.cliente = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações ocupadas...')
        console.log(`-------------------------------------------------`)
        const acomodacoesOcupadas = this.acomodacoes.filter(acomodacao => !acomodacao.Disponivel)
        acomodacoesOcupadas.forEach(acomodacao => {
            const cliente = this.cliente.find(cliente => cliente.Acomodacao === acomodacao)
            if (cliente) {
                this.impressor = new ImpressorAcomodacao(acomodacao, cliente)
                console.log(this.impressor.imprimir())
            }
            console.log(`-------------------------------------------------`)
        })
    }
}