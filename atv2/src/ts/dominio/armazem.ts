import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private cliente_id: number = 0;// Contador para saber os ids dos clientes
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

    public gerarID(): number { // Gera um id para o cliente
        this.cliente_id += 1;
        return this.cliente_id;
    }
    public atualizarClientes(clientes: Cliente[]): void { //recebe lista de clientes e atualiza a lista atual
        this.clientes = clientes
    }
}