import { IdentificadorAcomodação } from "../enumeracoes/IdentificadorAcomodação"
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao
    private disponivel: Boolean
    private camaSolteiro: Number
    private camaCasal: Number
    private suite: Number
    private climatizacao: Boolean
    private garagem: Number
    private identificador: IdentificadorAcomodação
    private numeroQuarto: Number

    constructor(nomeAcomadacao: NomeAcomadacao, camaSolteiro: Number, camaCasal: Number,
        suite: Number, climatizacao: Boolean, garagem: Number, identificador: IdentificadorAcomodação, numeroQuarto: Number) {
        this.nomeAcomadacao = nomeAcomadacao
        this.camaSolteiro = camaSolteiro
        this.disponivel = true;
        this.camaCasal = camaCasal
        this.suite = suite
        this.climatizacao = climatizacao
        this.garagem = garagem
        this.identificador = identificador
        this.numeroQuarto = numeroQuarto

    }

    public get NomeAcomadacao() { return this.nomeAcomadacao }
    public get Disponivel() { return this.disponivel; }
    public get CamaSolteiro() { return this.camaSolteiro }
    public get CamaCasal() { return this.camaCasal }
    public get Suite() { return this.suite }
    public get Climatizacao() { return this.climatizacao }
    public get Garagem() { return this.garagem }
    public get Identificador() { return this.identificador }
    public get NumeroQuarto() { return this.numeroQuarto }

    public set setDisponivel(disponivel: boolean) { this.disponivel = disponivel; }

}