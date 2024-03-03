import Prototipo from "../interfaces/prototipo"

export default class Endereco implements Prototipo {
    public logradouro: string
    public bairro: string
    public cidade: string
    public estado: string
    public pais: string
    public codigoPostal: string

    public clonar(): Prototipo {
        let endereco = new Endereco()
        endereco.logradouro = this.logradouro
        endereco.bairro = this.bairro
        endereco.cidade = this.cidade
        endereco.estado = this.estado
        endereco.pais = this.pais
        endereco.codigoPostal = this.codigoPostal
        return endereco
    }
}