"use client";
import { useEffect } from "react";

export default function DeletarAcomodacao() {

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
                <p className="title is-3 is-spaced">Deletar Acomodação</p>
                <div className="field is-grouped is-full">
                    <div className="control">
                        <div className="select  is-expanded">
                            <select>
                                <option>Selecione uma Acomodação</option>
                                <option>71 - Solteiro Simples</option>
                                <option>08 - Solteiro Simples</option>
                                <option>407 - Familia Super</option>
                            </select>
                        </div>
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Nome da Acomodação" aria-label="Nome Acomodação" disabled />
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Setor da Acomodação" aria-label="Setor da Acomodação" disabled />
                    </div>
                    <div className="control">
                        <input className="input" type="text" placeholder="Número da Acomodação" aria-label="Número da Acomodação" disabled />
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <div className="control">
                                <br></br>
                                <button className="button is-danger js-modal-trigger" data-target="modal-deletar" type="submit" >Deletar Acomodação</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div id="modal-deletar" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Deletar Acomodação</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className='modal-card-body'> Tem certeza que deseja deletar a Acomodação?</section>
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