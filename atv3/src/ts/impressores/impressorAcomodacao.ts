import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class ImpressorAcomodacao implements Impressor {
    private acomodacao: Acomodacao
    private cliente: Cliente | undefined
    constructor(acomodacao: Acomodacao, cliente?: Cliente) {
        this.acomodacao = acomodacao
        this.cliente = cliente
    }
    imprimir(): string {
        let descricao = `Nomenclatura: ${this.acomodacao.NomeAcomadacao.toString()}\n`
            + `-- Quantidade de leitos para solteiros: ${this.acomodacao.CamaSolteiro}\n`
            + `-- Quantidade de leitos para casais: ${this.acomodacao.CamaCasal}\n`
            + `-- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}\n`
            + `-- Quantidade de garagens disponíveis: ${this.acomodacao.Garagem}\n`
            + `-- Quantidade de suites: ${this.acomodacao.Suite}\n`
            + `-- Sua Acomodação está localizada no Setor: ${this.acomodacao.Identificador}\n`
            + `-- O numero da Acomodação é: ${this.acomodacao.NumeroQuarto}\n`
            if (this.cliente) {
                descricao += `-- Cliente: ${this.cliente.Nome}\n`
                descricao += `-- ID do Cliente: ${this.cliente.Id}\n`
            }
        return descricao
    }

    private converterBooleano(valor: Boolean) {
        if (valor) {
            return `sim`
        } else {
            return `não`
        }
    }
}