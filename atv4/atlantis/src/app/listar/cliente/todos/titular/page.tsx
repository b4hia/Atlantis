"use client";
export default function BuscarTodosTitulares() {
    return (
        <>
            <section className='container my-6'>
                <p className="title is-3 is-spaced">Listagem de Todos os Titulares</p>
                <div className="field is-grouped is-full my-5">
                    <div className="control is-expanded">
                        <label className="label">Nome do Cliente</label>
                        <input className="input" type="text" placeholder="Nome" value="Neymar Junior" aria-label="Nome" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome Social" value="Menino Ney" aria-label="Nome Social" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Cadastro</label>
                        <input className="input" type="date" placeholder="Data de Cadastro"  aria-label="Data de Cadastro" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Nascimento</label>
                        <input className="input" type="date" placeholder="Data de Nascimento"  aria-label="Data de Nascimento" disabled />
                    </div>
                </div>
                <div className="field is-grouped is-full my-5">
                    <div className="control is-expanded">
                        <label className="label">Nome do Cliente</label>
                        <input className="input" type="text" placeholder="Nome" value="Rogerio Ceni" aria-label="Nome" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome Social" value="Ceni" aria-label="Nome Social" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Cadastro</label>
                        <input className="input" type="date" placeholder="Data de Cadastro"  aria-label="Data de Cadastro" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Nascimento</label>
                        <input className="input" type="date" placeholder="Data de Nascimento"  aria-label="Data de Nascimento" disabled />
                    </div>
                </div>
                <div className="field is-grouped is-full my-5">
                    <div className="control is-expanded">
                        <label className="label">Nome do Cliente</label>
                        <input className="input" type="text" placeholder="Nome" value="Ivete Sangalo" aria-label="Nome" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Nome Social</label>
                        <input className="input" type="text" placeholder="Nome Social" value="Ivete" aria-label="Nome Social" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Cadastro</label>
                        <input className="input" type="date" placeholder="Data de Cadastro"  aria-label="Data de Cadastro" disabled />
                    </div>
                    <div className="control">
                        <label className="label">Data de Nascimento</label>
                        <input className="input" type="date" placeholder="Data de Nascimento"  aria-label="Data de Nascimento" disabled />
                    </div>
                </div>
            </section>

        </>

    )
}