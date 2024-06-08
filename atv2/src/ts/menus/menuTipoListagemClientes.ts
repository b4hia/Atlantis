import Menu from "../interfaces/menu";

export default class MenuTipoListagemClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Titular especifico`)
        console.log(`| 2 - Todos os titulares`)
        console.log(`| 3 - Todos os dependentes de um titular`)
        console.log(`| 4 - Titular especifico de um dependente especifico`)
        console.log(`| 5 - Dependente especifico`)
        console.log(`| 6 - Todos os dependentes`)
        console.log(`----------------------`)
    }
}