import Processo from "../abstracoes/processo";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacaoSolteiroSimples extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretor.construir())
        console.log(`Finalizando o cadastro da acomodação solteiro simples!`)
    }
}