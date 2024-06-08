import Menu from "../interfaces/menu";

export default class MenuTipoCadastroAcomodacoes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de acomodação para cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Acomodação Casal Simples`)
        console.log(`| 2 - Acomodação Família Simples`)
        console.log(`| 3 - Acomodação Família Mais`)
        console.log(`| 4 - Acomodação Família Super`)
        console.log(`| 5 - Acomodação Solteiro Simples`);
        console.log(`| 6 - Acomodação Solteiro Mais`);
        console.log(`----------------------`)
    }
}