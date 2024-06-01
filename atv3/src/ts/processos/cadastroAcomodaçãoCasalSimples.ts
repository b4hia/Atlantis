import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacaoCasalSimples extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorCasalSimples()
        this.acomodacoes.push(diretor.construir())
        console.log(`Finalizando o cadastro da acomodação casal simples!`)
    }
}