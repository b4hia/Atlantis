"use client";
import { useEffect } from "react";

export default function DeletarCliente() {

    useEffect(() => {
        function closeModal($el: HTMLElement) {
            $el.classList.remove('is-active');
        }

        function closeAllModals() {
            (document.querySelectorAll('.modal') || []).forEach(($modal) => {
                closeModal($modal as HTMLElement);
            });
        }

        function openModal($el: HTMLElement) {
            $el.classList.add('is-active');
        }

        (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
            const $triggerElement = $trigger as HTMLElement;
            const modalId = $triggerElement.dataset.target;
            if (modalId) {
                const $target = document.getElementById(modalId) as HTMLElement;
                if ($target) {
                    $triggerElement.addEventListener('click', () => {
                        openModal($target);
                    });
                }
            }
        });

        (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
            const $closeElement = $close as HTMLElement;
            const $target = $closeElement.closest('.modal') as HTMLElement;

            $closeElement.addEventListener('click', () => {
                if ($target) {
                    closeModal($target);
                }
            });
        });

        // Add a keyboard event to close all modals
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
                closeAllModals();
            }
        });
    }, []);
    return (
        <>
            <form className='container my-6'>
                <p className="title is-3 is-spaced">Deletar Cliente</p>
                <div className="field is-full my-6">
                    <div className="control">
                        <label className="label">Selecione um dos Cliente que deseja deletar</label>
                        <div className="select  is-expanded">
                            <select>
                                <option>Selecione um Cliente</option>
                                <option>Reinaldo Arakaki</option>
                                <option>Gerson Penha</option>
                                <option>Fernando Massanori</option>
                                <option>Guiliano Bertoti</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped is-full">
                    <div className="control is-expanded">
                        <label className="label">Nome Cliente</label>
                        <input className="input" type="text" placeholder="Nome" aria-label="Nome" disabled />
                    </div>
                    <div className="control is-expanded">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome Social" aria-label="Nome Social" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data Nascimento</label>
                        <input className="input" type="date" placeholder="Data Nascimento" aria-label="Data Nascimento" disabled />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <div className="control">
                                <br></br>
                                <button className="button is-danger js-modal-trigger" data-target="modal-deletar" type="submit" >Deletar Cliente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div id="modal-deletar" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Deletar Cliente</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className='modal-card-body'> Tem certeza que deseja deletar o cliente?</section>
                    <footer className="modal-card-foot">
                        <div className="buttons">
                            <button className="button is-success">Sim</button>
                            <button className="button is-danger">Cancelar</button>
                        </div>
                    </footer>
                </div>
            </div>

        </>

    )
}