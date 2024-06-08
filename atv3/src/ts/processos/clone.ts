import Prototipo from "../interfaces/prototipo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";


export default class Clonador implements Prototipo {

    public clonar(main: Cliente): Telefone[] {
        let listTels: Telefone[] = []
        main.Telefones.forEach(telefone => {
            listTels.push(telefone)
        });

        return listTels
    }
}