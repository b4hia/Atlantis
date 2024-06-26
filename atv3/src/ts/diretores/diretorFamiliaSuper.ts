import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import { IdentificadorAcomodação } from "../enumeracoes/IdentificadorAcomodação";
import Armazem from "../dominio/armazem";

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaSuper
        objetoConstrutor.Identificador = this.gerarIdentificadorAcomodacaoAleatorio()
        objetoConstrutor.CamaCasal = 2
        objetoConstrutor.CamaSolteiro = 6
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 3
        objetoConstrutor.NumeroQuarto = this.armazem.gerarNumeroAcomodacao();
        return objetoConstrutor.construir()
    }
    private gerarIdentificadorAcomodacaoAleatorio(): IdentificadorAcomodação {
        const identificadores = Object.values(IdentificadorAcomodação);
        const indiceAleatorio = Math.floor(Math.random() * identificadores.length);
        return identificadores[indiceAleatorio];
    }
    private armazem = Armazem.InstanciaUnica;
}

