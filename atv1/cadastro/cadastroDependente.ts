import Entrada from "../teste/entrada";
import Cliente from "../modelos/cliente";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Cadastro from "./cadastro";

export default class CadastroDependentes {
    cadastrar(titular: Cliente): Cliente[] {

        let entrada = new Entrada
        let doc = new Documento
        let listDoc: Documento[] = []
        let depnd: Cliente[] = []
        let tel = new Telefone
        let listTel: Telefone[] = []
        let endereco = new Endereco
        


        let cadDep = entrada.receberNumero("\ncadastrar dependentes?\n1 - Sim\n0 - Não\n")
        if (cadDep == 1) {

            while (true) {
                let dependente: Cliente = new Cliente()
                if (titular.endereco) {
                    dependente.endereco = titular.endereco.clonar()
                }
                if (titular.telefones) {
                    dependente.telefones = titular.telefones.map(listTel => tel.clonar())
                    listTel.push(tel)
                }
                dependente.nome = entrada.receberTexto("Insira o nome do dependente: ")
                dependente.nomeSocial = entrada.receberTexto("Insira o  nome social do dependente: ")
                dependente.dataCadastro = entrada.receberData("Insira a data de cadastro do dependente: ")
                dependente.dataNascimento = entrada.receberData("Insira a data de nascimento do dependente: ")

                while (true) {
                    console.log("\nEscolha o tipo do documento que será cadastrado: \n1 - RG\n2 - CPF\n3 - Passaporte\n4 - CNH")
                    let opcao = entrada.receberNumero("Digite sua opção: ")
                    switch (opcao) {
                        case 1:
                            let doc1 = new Documento
                            doc1.tipo = TipoDocumento.RG
                            doc1.numero = entrada.receberTexto("Insira o número do RG: ")
                            listDoc.push(doc1)
                            break;
                        case 2:
                            let doc2 = new Documento
                            doc2.tipo = TipoDocumento.CPF
                            doc2.numero = entrada.receberTexto("Insira o número do CPF: ")
                            listDoc.push(doc2)
                            break;
                        case 3:
                            let doc3 = new Documento
                            doc3.tipo = TipoDocumento.Passaporte
                            doc3.numero = entrada.receberTexto("Insira o número do passaporte: ")
                            listDoc.push(doc3)
                            break;
                        case 4:
                            let doc4 = new Documento
                            doc4.tipo = TipoDocumento.CNH
                            doc4.numero = entrada.receberTexto("Insira o número da CNH: ")
                            listDoc.push(doc4)
                            break;
                        default:
                            console.log("Opção inválida, digite novamente\n")
                    }
                    let maisDocs = entrada.receberNumero("\nDeseja cadastrar mais documentos?\n1 - Sim\n0 - Não\n")
                    if (maisDocs == 0) { break }
                }


                dependente.documentos = listDoc
                dependente.endereco = titular.endereco.clonar();
                dependente.telefones = titular.telefones.map(telefone => telefone.clonar());
                dependente.titular = titular

                depnd.push(dependente)

                let loop = entrada.receberNumero("\nCadastrar mais dependentes?\n1 - Sim\n0 - Não\n")
                if (loop == 0) { break }
            }
        }
        return depnd
    }
}