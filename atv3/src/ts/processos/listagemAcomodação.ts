import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";

export default class ListagemAcomodacao extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(numero: number): void {
        console.clear()
        console.log('Iniciando a listagem da acomodação de numero: ' + numero + '...')
        console.log(`-------------------------------------------------`)
        this.acomodacoes
        .filter(acomodacao => acomodacao.NumeroQuarto === numero)
        .forEach(acomodacao => {
            this.impressor = new ImpressorAcomodacao(acomodacao)
            console.log(this.impressor.imprimir())
            console.log(`-------------------------------------------------`)
        })
    }
}