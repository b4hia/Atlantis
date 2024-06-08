import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class AlugarAcomodação extends Processo {
    private acomodacoes: Acomodacao[]
    private clientes: Cliente[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(id: number, numero: number): void {
        let hospede = this.clientes.find(cliente => cliente.Id === id)
        let quarto =  this.acomodacoes.find(acomodacao => acomodacao.NumeroQuarto === numero)
        if (hospede && quarto) {
            if(this.titular(hospede)) {
                hospede.setAcomodacao = quarto
                quarto.setDisponivel = false
                console.log('Acomodação de numero: ' + numero + ' alugada com sucesso, para o cliente de ID: ' + id,'!')
            } else {
                console.log('Apenas clientes Titulares podem fazer o aluguel de acomodações!')
            }
        } else {
            console.log('Cliente ou quarto não encontrado!')
        }
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}