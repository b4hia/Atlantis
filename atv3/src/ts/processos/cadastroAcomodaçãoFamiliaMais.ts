import Processo from "../abstracoes/processo";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacaoFamiliaMais extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorFamiliaMais()
        this.acomodacoes.push(diretor.construir())
        console.log(`Finalizando o cadastro da acomodação familia mais!`)
    }
}