import Prototipo from "../interfaces/prototipo"

export default class Endereco implements Prototipo<Endereco> {
    public logradouro: string
    public bairro: string
    public cidade: string
    public estado: string
    public pais: string
    public codigoPostal: string

    public clonar(): Endereco {
        let enderecoClone = new Endereco()
        enderecoClone.logradouro = this.logradouro
        enderecoClone.bairro = this.bairro
        enderecoClone.cidade = this.cidade
        enderecoClone.estado = this.estado
        enderecoClone.pais = this.pais
        enderecoClone.codigoPostal = this.codigoPostal
        return enderecoClone
    }
}