"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, nomeSocial, dataNascimento) {
        this.telefones = [];
        this.documentos = [];
        this.dependentes = [];
        this.id = id;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = new Date();
    }
    Object.defineProperty(Cliente.prototype, "Nome", {
        get: function () { return this.nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Id", {
        get: function () { return this.id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Acomodacao", {
        get: function () { return this.acomodacao; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "NomeSocial", {
        get: function () { return this.nomeSocial; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "DataNascimento", {
        get: function () { return this.dataNascimento; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "DataCadastro", {
        get: function () { return this.dataCadastro; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Telefones", {
        get: function () { return this.telefones; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Endereco", {
        get: function () { return this.endereco; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Documentos", {
        get: function () { return this.documentos; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Dependentes", {
        get: function () { return this.dependentes; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "Titular", {
        get: function () { return this.titular; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNome", {
        set: function (nome) { this.nome = nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setAcomodacao", {
        set: function (acomodacao) { this.acomodacao = acomodacao; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setNomeSocial", {
        set: function (nomeSocial) { this.nomeSocial = nomeSocial; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setDataNascimento", {
        set: function (dataNascimento) { this.dataNascimento = dataNascimento; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setEndereco", {
        set: function (endereco) { this.endereco = endereco; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTitular", {
        set: function (propietario) { this.titular = propietario; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setDependentes", {
        set: function (dependente) { this.dependentes.push(dependente); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setDocumentos", {
        set: function (documento) { this.documentos.push(documento); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTelefones", {
        set: function (telefone) { this.telefones = telefone; },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
