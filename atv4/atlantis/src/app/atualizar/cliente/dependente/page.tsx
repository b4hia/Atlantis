"use client";
import { useState } from "react";
export default function AtualizarDependente() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <section className='container my-6'>
                <p className="title is-3 is-spaced">Atualização de Dependente</p>
                <div className="field">
                    <div className="control my-4">
                        <label className="label">Insira o CPF do Dependente que deseja atualizar</label>
                        <input className="input" type="text" placeholder="Número da Acomodação" aria-label="Nome Acomodação" />
                    </div>
                    <div className="control">
                        <label className="label">Nome</label>
                        <input className="input" type="text" placeholder="Nome" disabled aria-label="Nome"  />
                    </div>
                </div>

                <div className="field is-grouped is-full">
                    <div className="control is-expanded">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome social" disabled aria-label="Nome social"  />
                    </div>
                    <div className="control">
                        <label className="label">Data Nascimento</label>
                        <input className="input" type="date" placeholder="Data Nascimento" disabled aria-label="Data Nascimento"  />
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
                                            <input className="input" type="text" placeholder="RG" disabled aria-label="RG"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" disabled aria-label="Data de Emissão"  />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <label className="label">CPF <span className="has-text-danger">*</span></label>
                                            <input className="input" type="text" placeholder="CPF" disabled aria-label="CPF"  />
                                        </p>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" disabled aria-label="Data de Emissão"  />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <label className="label">Passaporte</label>
                                            <input className="input" type="text" placeholder="Passaporte" disabled aria-label="Passaporte"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" disabled aria-label="Data de Emissão"  />
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control is-expanded">
                                            <label className="label">CNH</label>
                                            <input className="input" type="text" placeholder="CNH" disabled aria-label="CNH"  />
                                        </div>
                                        <div className="control">
                                            <label className="label">Data de Emissão</label>
                                            <input className="input" type="date" placeholder="Data de Emissão" disabled aria-label="Data de Emissão"  />
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
                                <button className="button is-primary" type="submit" >Atualizar Dependente</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}