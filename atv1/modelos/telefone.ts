import Prototipo from "../interfaces/prototipo"


export default class Telefone implements Prototipo<Telefone> {
    public ddd: number
    public numero: number

    public clonar(): Telefone{
        let telefoneClone = new Telefone()
        telefoneClone.ddd = this.ddd
        telefoneClone.numero = this.numero
        return telefoneClone
    }
}