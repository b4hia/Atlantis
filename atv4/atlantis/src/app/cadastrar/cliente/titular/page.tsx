"use client";

import React, { useState } from 'react'
export default function CadastroTitular() {
    const [nome, setNome] = useState("")
    const [nomesocial, setNomeSocial] = useState("")
    const [rg, setRG] = useState("")
    const [rgdata, setRGemissao] = useState("")
    const [cpf, setCPF] = useState("")
    const [cpfdata, setCPFemissao] = useState("")
    const [tel, setTel] = useState("")
    const [ddd, setDDD] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <form className='container my-6'>
                <p className="title is-3 is-spaced">Cadastro de cliente Titular</p>
                <div className="field">
                    <div className="control">
                        <label className="label">Nome</label>
                        <input className="input" type="text" placeholder="Nome" aria-label="Nome" onChange={(e) => setNome(e.target.value)} />
                    </div>
                </div>

                <div className="field is-grouped is-full">
                    <div className="control is-expanded">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome social" aria-label="Nome social" onChange={(e) => setNomeSocial(e.target.value)} />
                    </div>
                    <div className="control">
                        <label className="label">Data Nascimento</label>
                        <input className="input" type="date" placeholder="Data Nascimento" aria-label="Data Nascimento" onChange={(e) => setNomeSocial(e.target.value)} />
                    </div>
                </div>

                <div className="accordion my-3" id="accordionExample2">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                Endereços
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="field is-grouped is-two-fifths">
                                        <p className="control is-expanded">
                                            <label className="label">Rua</label>
                                            <input className="input" type="text" placeholder="Rua" aria-label="Rua" onChange={(e) => setCPF(e.target.value)} />
                                        </p>
                                        <p className="control">
                                            <label className="label">Numero</label>
                                            <input className="input" type="text" placeholder="Numero" aria-label="Numero" onChange={(e) => setCPF(e.target.value)} />
                                        </p>
                                        <div className="control is-expanded">
                                            <label className="label">Bairro</label>
                                            <input className="input" type="text" placeholder="Bairro" aria-label="Bairro" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <label className="label">CEP</label>
                                            <input className="input" type="text" placeholder="CEP" aria-label="CEP" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control is-expanded">
                                            <label className="label">Cidade</label>
                                            <input className="input" type="text" placeholder="Cidade" aria-label="Cidade" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <label className="label">Estado</label>
                                            <input className="input" type="text" placeholder="Estado" aria-label="Estado" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                    </div>
                                    <button className="button is-primary">Adicionar Endereço</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion my-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                Telefones
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <label className="label">DDD</label>
                                            <input className="input" type="text" placeholder="DDD" aria-label="DDD" onChange={(e) => setDDD(e.target.value)} />
                                        </div>
                                        <div className="control is-expanded">
                                            <label className="label">Telefone</label>
                                            <input className="input" type="text" placeholder="Telefone" aria-label="Telefone" onChange={(e) => setTel(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <label className="label">‎ </label>
                                            {/* isso aqui é um caracter invisivel */}
                                            <label className="label"> </label>
                                            <button className="delete is-danger"></button>
                                        </div>
                                    </div>
                                    <button className="button is-primary">Adicionar Telefone</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion my-3" id="accordionExample1">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                Documentos
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="field is-grouped is-two-fifths">
                                        <div className="control is-expanded">
                                            <label className="label">RG <span className="has-text-danger">*</span></label>
                                            <input className="input" type="text" placeholder="RG" aria-label="RG" onChange={(e) => setRG(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setRGemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <label className="label">CPF <span className="has-text-danger">*</span></label>
                                            <input className="input" type="text" placeholder="CPF" aria-label="CPF" onChange={(e) => setCPF(e.target.value)} />
                                        </p>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <label className="label">Passaporte</label>
                                            <input className="input" type="text" placeholder="Passaporte" aria-label="Passaporte" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <label className="label">CNH</label>
                                            <input className="input" type="text" placeholder="CNH" aria-label="CNH" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <div className="control">
                                <br></br>
                                <button className="button is-primary" type="submit" >Finalizar Cadastro de Cliente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>

    )
}