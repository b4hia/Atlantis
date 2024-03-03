import Prototipo from "../interfaces/prototipo"


export default class Telefone implements Prototipo {
    public ddd: number
    public numero: number

    public clonar(): Prototipo {
        let telefones = new Telefone()
        telefones.ddd = this.ddd
        telefones.numero = this.numero
        return telefones
    }
}