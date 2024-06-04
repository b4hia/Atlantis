"use client";
import { Accordion } from "bulma-accordion";
let accordion: Accordion[] = []

document.addEventListener('DOMContentLoaded', function () {
    accordion = Accordion.attach();
});

import React, { useState } from 'react'
export default function CadastroTitular() {
    const [nome, setNome] = useState("")
    const [nomesocial, setNomeSocial] = useState("")
    const [rg, setRG] = useState("")
    const [rgdata, setRGemissao] = useState("")
    const [cpf, setCPF] = useState("")
    const [cpfdata, setCPFemissao] = useState("")
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState("")
    const [ddd, setDDD] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <form className='container my-6'>
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Nome" aria-label="Nome" onChange={(e) => setNome(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Nome social" aria-label="Nome social" onChange={(e) => setNomeSocial(e.target.value)} />
                    </div>
                </div>

                <div className="accordion" id="accordionExample2">
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
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="Rua" aria-label="Rua" onChange={(e) => setRG(e.target.value)} />
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Rua" aria-label="Rua" onChange={(e) => setRG(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="CPF" aria-label="CPF" onChange={(e) => setCPF(e.target.value)} />
                                        </p>
                                        <div className="control">
                                            <span className="">*</span>
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="Passaporte" aria-label="Passaporte" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="CNH" aria-label="CNH" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
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
                                        <button className="button is-primary">Adicionar Telefone</button>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="DDD" aria-label="DDD" onChange={(e) => setDDD(e.target.value)} />
                                        </div>
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="Telefone" aria-label="Telefone" onChange={(e) => setTel(e.target.value)} />
                                        </div>
                                        <button className="button is-danger">Deletar Telefone</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample1">
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
                                            <input className="input" type="text" placeholder="RG" aria-label="RG" onChange={(e) => setRG(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <span className="">*</span>
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setRGemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="CPF" aria-label="CPF" onChange={(e) => setCPF(e.target.value)} />
                                        </p>
                                        <div className="control">
                                            <span className="">*</span>
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="Passaporte" aria-label="Passaporte" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <input className="input" type="text" placeholder="CNH" aria-label="CNH" onChange={(e) => setCPF(e.target.value)} />
                                        </div>
                                        <div className="control">
                                            <span className="input">Data de Emissão</span>
                                        </div>
                                        <div className="control">
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
                                <button className="button is-outlined" type="submit" >Finalizar Cadastro de Cliente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>

    )
}