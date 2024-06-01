import Processo from "../abstracoes/processo";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacaoFamiliaSimples extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorFamiliaSimples()
        this.acomodacoes.push(diretor.construir())
        console.log(`Finalizando o cadastro da acomodação familia simples!`)
    }
}