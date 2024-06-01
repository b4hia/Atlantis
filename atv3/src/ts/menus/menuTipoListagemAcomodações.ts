import Menu from "../interfaces/menu";

export default class MenuTipoListagemAcomodações implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Listar acomodações que estão disponíveis`)
        console.log(`| 2 - Listar acomodação especifica`)
        console.log(`| 3 - Todos as acomodações`)
        console.log(`----------------------`)
    }
}