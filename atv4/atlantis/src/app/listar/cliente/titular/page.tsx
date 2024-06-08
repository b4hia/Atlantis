"use client";
import React, { useState } from 'react'
export default function BuscarTitular() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <section className='container my-6'>
                <p className="title is-3 is-spaced">Listagem de Titular</p>
                <div className="field is-grouped is-full">
                    <div className="control">
                        <label className="label">Insira o CPF do Titular que deseja listar</label>
                        <input className="input" type="search" placeholder="CPF" aria-label="CPF do Cliente" />
                    </div>
                </div>
                <div className="field is-grouped is-full my-5">
                    <div className="control is-expanded">
                        <label className="label">Nome do Cliente</label>
                        <input className="input" type="text" placeholder="Nome" value="Neymar Junior" aria-label="Nome" disabled />
                    </div>
                    <div className="control is-expanded">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome Social" value="Menino Ney" aria-label="Nome Social" disabled />
                    </div>
                </div>
                <div className="field is-grouped is-full my-5">
                    <div className="control">
                        <label className="label">Data de Cadastro</label>
                        <input className="input" type="date" placeholder="Data de Cadastro" aria-label="Data de Cadastro" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Nascimento</label>
                        <input className="input" type="date" placeholder="Data de Nascimento" aria-label="Data de Nascimento" disabled />
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
                                            <input className="input" type="text" placeholder="Rua" aria-label="Rua"  />
                                        </p>
                                        <p className="control">
                                            <label className="label">Numero</label>
                                            <input className="input" type="text" placeholder="Numero" aria-label="Numero"  />
                                        </p>
                                        <div className="control is-expanded">
                                            <label className="label">Bairro</label>
                                            <input className="input" type="text" placeholder="Bairro" aria-label="Bairro"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">CEP</label>
                                            <input className="input" type="text" placeholder="CEP" aria-label="CEP"  />
                                        </div>
                                        <div className="control is-expanded">
                                            <label className="label">Cidade</label>
                                            <input className="input" type="text" placeholder="Cidade" aria-label="Cidade"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Estado</label>
                                            <input className="input" type="text" placeholder="Estado" aria-label="Estado"  />
                                        </div>
                                    </div>
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
                                            <input className="input" type="text" placeholder="DDD" aria-label="DDD"  />
                                        </div>
                                        <div className="control is-expanded">
                                            <label className="label">Telefone</label>
                                            <input className="input" type="text" placeholder="Telefone" aria-label="Telefone"  />
                                        </div>
                                    </div>
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
                                            <input className="input" type="text" placeholder="RG" aria-label="RG"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão"  />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <label className="label">CPF <span className="has-text-danger">*</span></label>
                                            <input className="input" type="text" placeholder="CPF" aria-label="CPF"  />
                                        </p>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão"  />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <label className="label">Passaporte</label>
                                            <input className="input" type="text" placeholder="Passaporte" aria-label="Passaporte"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão"  />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <label className="label">CNH</label>
                                            <input className="input" type="text" placeholder="CNH" aria-label="CNH"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão"  />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}