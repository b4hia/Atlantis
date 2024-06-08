"use client";
import React, { useState } from 'react'
export default function BuscarTitulardeUmDependente() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <section className='container my-6'>
                <p className="title is-3 is-spaced">Locação de Acomodação</p>
                <div className="field is-grouped is-full">
                    <div className="control">
                        <label className="label">Insira o CPF do Titular que deseja alugar a acomodação</label>
                        <input className="input" type="search" placeholder="CPF" aria-label="CPF do Cliente" />
                    </div>
                    <div className="control">
                        <label className="label">Selecione uma Acomodação disponível</label>
                        <div className="select">
                            <select>
                                <option>71 - Solteiro Simples</option>
                                <option>08 - Solteiro Simples</option>
                                <option>407 - Familia Super</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button className='button is-primary'>Alugar</button>
                <p className="title is-3 is-spaced mt-6">Checkout Acomodação</p>
                <div className="field is-grouped is-full">
                    <div className="control">
                        <label className="label">Insira o CPF do Titular que alugou a acomodação</label>
                        <input className="input" type="search" placeholder="CPF" aria-label="CPF do Cliente" />
                    </div>
                    <div className="control">
                        <label className="label">Selecione uma Acomodação disponível</label>
                        <input className="input" type="search" placeholder="Numero - Nome da Acomodação" aria-label="Acomodação" disabled />
                    </div>
                </div>
                <button className='button is-danger'>Fazer Checkout</button>
            </section>

        </>

    )
}