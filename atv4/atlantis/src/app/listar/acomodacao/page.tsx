"use client";
import { useState } from "react";
export default function BuscarAcomodacao() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <section className='container my-6'>
                <p className="title is-3 is-spaced">Listagem de Acomodações</p>
                <div className="field is-grouped is-full">
                    <div className="control">
                        <label className="label">Insira o número da Acomodação que deseja listar</label>
                        <input className="input" type="search" placeholder="Número da Acomodação" aria-label="Nome Acomodação" />
                    </div>
                </div>
                <div className="field is-grouped is-full">
                    <div className="control is-expanded">
                        <label className="label">Tipo da Acomodação</label>
                        <input className="input" type="text" placeholder="Nome" aria-label="Nome" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Número da Acomodação</label>
                        <input className="input" type="text" placeholder="Número da Acomodação" aria-label="Número da Acomodação" disabled />
                    </div>
                    <div className="control is-expanded">
                        <label className="label">Setor da Acomodação</label>
                        <input className="input" type="text" placeholder="Setor da Acomodação" aria-label="Setor da Acomodação" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Disponibilidade</label>
                        <input className="input" type="text" placeholder="Disponibilidade" aria-label="Disponibilidade" disabled />
                    </div>
                </div>
                <div className="field is-full my-6">
                    <p className="title is-5 is-spaced">Setores de Acomodações</p>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Pacífico Norte
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                    <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Pacífico Sul
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Atlântico Norte
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Atlântico Sul
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Índico
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Antártico
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion my-3" id="accordionExample2">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" onClick={toggleAccordion}>
                                    Ártico
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne1" data-bs-parent="#accordionExample1">
                                <div className="accordion-body">
                                <section className="row g-3">
                                        <div className="field is-grouped is-full">
                                            <div className="control">
                                                <label className="label">Número da Acomodação</label>
                                                <input className="input" type="text" placeholder="Número da Acomodação" value="71" aria-label="Número da Acomodação" disabled />
                                            </div>
                                            <div className="control is-expanded">
                                                <label className="label">Tipo da Acomodação</label>
                                                <input className="input" type="text" placeholder="Nome" value="Solteiro Simples" aria-label="Nome" disabled />
                                            </div>
                                            <div className="control">
                                                <label className="label">Disponibilidade</label>
                                                <input className="input" type="text" placeholder="Disponibilidade" value="Indisponível para aluguel" aria-label="Disponibilidade" disabled />
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}