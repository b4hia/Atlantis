"use client";
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

                <div className="field is-grouped">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="RG" aria-label="RG" onChange={(e) => setRG(e.target.value)} />
                    </div>
                    <div className="control">
                        <span className="input">Data de Emissão</span>
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setRGemissao(e.target.value)} />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="CPF" aria-label="CPF" onChange={(e) => setCPF(e.target.value)} />
                    </div>
                    <div className="control">
                        <span className="input">Data de Emissão</span>
                    </div>
                    <div className="control is-expanded">
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
                    <div className="control is-expanded">
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
                    <div className="control is-expanded">
                        <input className="input" type="date" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => setCPFemissao(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="E-mail" aria-label="E-mail" onChange={(e) => setMail(e.target.value)} />
                        <span className="icon is-small is-left">@</span>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <input className="input" type="text" placeholder="DDD" aria-label="DDD" onChange={(e) => setDDD(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Telefone" aria-label="Telefone" onChange={(e) => setTel(e.target.value)} />
                    </div>
                </div>

                <div id={`collapseOne$`} className="accordion-content">
                    <div className="accordion-body">
                        <form className="columns is-multiline">
                            <div className="field column is-half">
                                <div className="control">
                                    <input className="input" type="text" placeholder={"cliente.ddd"} aria-label="DDD" name='ddd' />
                                </div>
                            </div>
                            <div className="field column is-half">
                                <div className="control">
                                    <input className="input" type="text" placeholder={"cliente.telefone"} aria-label="Telefone" name='tel' />
                                </div>
                            </div>
                        </form>
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