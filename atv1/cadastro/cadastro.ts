import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import CadastroDependentes from "./cadastroDependente";
import Telefone from "../modelos/telefone";
import Documento from "../modelos/documento";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Prototipo from "../interfaces/prototipo";
import Entrada from "../teste/entrada";

export default class Cadastro {
    cadastrarCliente(): Cliente {

    
        let entrada = new Entrada
        let cli = new Cliente
        let end = new Endereco
        let tel = new Telefone
        let doc : Documento = new Documento
        let listTel: Telefone[] = []
        let listDoc: Documento[] = []
        let dep = new CadastroDependentes


        cli.nome = entrada.receberTexto("Insira o nome do cliente: ")
        cli.nomeSocial = entrada.receberTexto("Insira o nome social: ")
        cli.dataCadastro = entrada.receberData("Insira a data de cadastro: ")
        cli.dataNascimento = entrada.receberData("Insira a data de nascimento: ")
        end.logradouro = entrada.receberTexto("Insira o endereço da residência: ")
        end.bairro = entrada.receberTexto("Insira o bairro: ")
        end.cidade = entrada.receberTexto("Insira a cidade: ")
        end.estado = entrada.receberTexto("Insira o estado: ")
        end.pais = entrada.receberTexto("Insira o país: ")
        end.codigoPostal = entrada.receberTexto("Insira o código postal: ")
        cli.endereco = end

        while (true) {
            console.log(`cadastro de documentos`);
            let cadastroDoc = entrada.receberNumero(`Qual documento deseja cadastrar? \n[1] -- RG, \n[2] -- CPF, \n[3] -- Passaporte, \n[4] -- CNH:\n `)
            switch (cadastroDoc) {
                case 1:
                    doc.tipo = TipoDocumento.RG
                    doc.numero = entrada.receberTexto("Insira o número do RG: ")
                    listDoc.push(doc)
                    break;
                case 2:
                    doc.tipo = TipoDocumento.CPF
                    doc.numero = entrada.receberTexto("Insira o número do CPF: ")
                    listDoc.push(doc)
                    break;
                case 3:
                    doc.tipo = TipoDocumento.Passaporte
                    doc.numero = entrada.receberTexto("Insira o número do passaporte: ")
                    listDoc.push(doc)
                    break;
                case 4:
                    doc.tipo = TipoDocumento.CNH
                    doc.numero = entrada.receberTexto("Insira o número da CNH: ")
                    listDoc.push(doc)
                    break;
                default:
                    console.log("Opção inválida, digite novamente\n")
                }
                    
                    let maisDocs = entrada.receberNumero("\nDeseja cadastrar mais documentos?\n1 - Sim\n0 - Não\n")
                    if (maisDocs == 0) { break }
            }

        while (true) {
            console.log(`cadastro de telefone`);
            tel.ddd = entrada.receberNumero("Insira o DDD: ")
            tel.numero = entrada.receberNumero("Insira o número de telefone: ")
            listTel.push(tel)

            let cadastroTel = entrada.receberNumero("\nDeseja cadastrar mais telefones?\n1 - Sim\n0 - Não\n")
            if (cadastroTel == 0) { break }
        }
        cli.dependentes = dep.cadastrar(cli)
        cli.telefones = listTel
        cli.documentos = listDoc
        return cli
    }    
}

