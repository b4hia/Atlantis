import './navbar.css';
import Imagem from '../../public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/" legacyBehavior>
                    <a className="navbar-item">
                        <Image src={Imagem} alt="Logo" width={64} height={64} />
                    </a>
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="/" legacyBehavior>
                            <a className="navbar-link">Cadastrar Clientes</a>
                        </Link>
                        <div className="navbar-dropdown">
                            <Link href="/cadastrar/cliente/titular" legacyBehavior>
                                <a className="navbar-item">Titular</a>
                            </Link>
                            <Link href="/cadastrar/cliente/dependente" legacyBehavior>
                                <a className="navbar-item">Dependente</a>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="/" legacyBehavior>
                            <a className="navbar-link">Atualizar Dados</a>
                        </Link>
                        <div className="navbar-dropdown">
                            <Link href="/atualizar/cliente/titular" legacyBehavior>
                                <a className="navbar-item">Titular</a>
                            </Link>
                            <Link href="/atualizar/cliente/dependente" legacyBehavior>
                                <a className="navbar-item">Dependente</a>
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="/" legacyBehavior>
                            <a className="navbar-link">Buscar Clientes</a>
                        </Link>
                        <div className="navbar-dropdown">
                            <Link href="/buscar/todos-clientes" legacyBehavior>
                                <a className="navbar-item">Todos os Clientes</a>
                            </Link>
                            <Link href="/buscar/titular-cpf" legacyBehavior>
                                <a className="navbar-item">Buscar um Titular pelo CPF</a>
                            </Link>
                            <Link href="/buscar/todos-titulares" legacyBehavior>
                                <a className="navbar-item">Buscar Todos os Titulares</a>
                            </Link>
                            <Link href="/buscar/titular-dependente" legacyBehavior>
                                <a className="navbar-item">Buscar o Titular de um Dependente</a>
                            </Link>
                            <Link href="/buscar/dependente-cpf" legacyBehavior>
                                <a className="navbar-item">Buscar um Dependente pelo CPF</a>
                            </Link>
                            <Link href="/buscar/todos-dependentes" legacyBehavior>
                                <a className="navbar-item">Buscar Todos os Dependentes</a>
                            </Link>
                            <Link href="/buscar/dependente-titular" legacyBehavior>
                                <a className="navbar-item">Buscar o Dependente de um Titular</a>
                            </Link>
                        </div>
                    </div>

                    <Link href="/deletar/cliente" legacyBehavior>
                        <a className="navbar-item">Excluir Cliente</a>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="/" legacyBehavior>
                            <a className="navbar-link">Acomodações</a>
                        </Link>
                        <div className="navbar-dropdown">
                            <Link href="/cadastrar/acomodacao" legacyBehavior>
                                <a className="navbar-item">Cadastrar</a>
                            </Link>
                            <Link href="/deletar/acomodacao" legacyBehavior>
                                <a className="navbar-item">Deletar</a>
                            </Link>
                            <Link href="/listar/acomodacao" legacyBehavior>
                                <a className="navbar-item">Buscar</a>
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link href="/alugar-acomodacao" legacyBehavior>
                                <a className="button is-primary">
                                    <strong>Alugar Acomodação</strong>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
