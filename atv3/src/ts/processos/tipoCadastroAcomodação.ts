import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastroClienteTitular from "./cadastroClienteTitular";
import CadastroClienteDependente from "./cadastroClienteDependente";
import MenuTipoCadastroAcomodacoes from "../menus/menuTipoCadastroAcomodações";
import CadastroAcomodacoes from "./cadastroAcomodacaoSolteiroSimples";
import CadastroAcomodacaoSolteiroSimples from "./cadastroAcomodacaoSolteiroSimples";
import CadastroAcomodacaoCasalSimples from "./cadastroAcomodaçãoCasalSimples";
import CadastroAcomodacaoFamiliaSimples from "./cadastroAcomodaçãoFamiliaSimples";
import CadastroAcomodacaoFamiliaMais from "./cadastroAcomodaçãoFamiliaMais";
import CadastroAcomodacaoFamiliaSuper from "./cadastroAcomodaçãoFamiliaSuper";
import CadastroAcomodacaoSolteiroMais from "./cadastroAcomodaçãoSolteiroMais";

export default class TipoCadastroAcomodação extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroAcomodacoes()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new CadastroAcomodacaoCasalSimples()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroAcomodacaoFamiliaSimples()
                this.processo.processar()
                break
            case 3:
                this.processo = new CadastroAcomodacaoFamiliaMais()
                this.processo.processar()
                break
            case 4:
                this.processo = new CadastroAcomodacaoFamiliaSuper()
                this.processo.processar()
                break
            case 5:
                this.processo = new CadastroAcomodacaoSolteiroSimples()
                this.processo.processar()
                break
            case 6:
                this.processo = new CadastroAcomodacaoSolteiroMais()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}