import Processo from "../abstracoes/processo";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacaoSolteiroMais extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroMais()
        this.acomodacoes.push(diretor.construir())
        console.log(`Finalizando o cadastro da acomodação solteiro mais!`)
    }
}