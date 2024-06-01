import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private cliente_id: number = 0;// Contador para saber os ids dos clientes
    private numero_quartos: number = 100;
    private constructor() { }

    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get CliId() {
        return this.cliente_id
    }
    public set ClienteId(id: number) {
        this.cliente_id = id
    }
    public get ClienteId():number {
        return this.CliId
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public get NumeroQuartos(){
        return this.numero_quartos
    }
    public set NumeroQuartos(numero: number){
        this.numero_quartos = numero
    }

    public gerarID(): number { // Gera um id para o cliente
        this.cliente_id += 1;
        return this.cliente_id;
    }

    public gerarNumeroAcomodacao(): number { 
        this.numero_quartos += 10;
        return this.numero_quartos;
    }

    public atualizarClientes(clientes: Cliente[]): void { //recebe lista de clientes e atualiza a lista atual
        this.clientes = clientes
    }
}