import Armazem from "../dominio/armazem";
import { IdentificadorAcomodação } from "../enumeracoes/IdentificadorAcomodação";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Construtor from "../interfaces/construtor";
import Acomodacao from "../modelos/acomodacao";

export default class ConstrutorAcomodacao implements Construtor<Acomodacao>{
    private armazem = Armazem.InstanciaUnica;
    private nomeAcomodacao: NomeAcomadacao = NomeAcomadacao.SolteiroSimples
    private camaSolteiro: Number = 0
    private camaCasal: Number = 0
    private suite: Number = 0
    private climatizacao: Boolean = false
    private garagem: Number = 0
    private identificador: IdentificadorAcomodação = IdentificadorAcomodação.PacíficoNorte
    private numeroQuarto: Number = 0

    public set Armazem(armazem: Armazem) { this.armazem = armazem }
    public set NomeAcomodacao(nomeAcomodacao: NomeAcomadacao) { this.nomeAcomodacao = nomeAcomodacao }
    public set Identificador(identificador: IdentificadorAcomodação) { this.identificador = identificador }
    public set NumeroQuarto(numeroQuarto: Number) { this.numeroQuarto = numeroQuarto }
    public set CamaSolteiro(camaSolteiro: Number) { this.camaSolteiro = camaSolteiro }
    public set CamaCasal(camaCasal: Number) { this.camaCasal = camaCasal }
    public set Suite(suite: Number) { this.suite = suite }
    public set Climatizacao(climatizacao: Boolean) { this.climatizacao = climatizacao }
    public set Garagem(garagem: Number) { this.garagem = garagem }

    construir(): Acomodacao {
        let acomodacao = new Acomodacao(this.nomeAcomodacao, this.camaSolteiro, 
            this.camaCasal, this.suite, this.climatizacao, this.garagem, this.identificador, this.numeroQuarto)
        return acomodacao
    }
}