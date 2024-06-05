import Link from "next/link"
export default function CadastroAcomodacao() {
    return (
        <>
            <section className="container">
                <p className="title is-3 is-spaced mt-6">Selecione a Acomodação que deseja Visualizar</p>
                <div className="columns">
                    <div className="column m-6">
                        <Link href="/cadastrar/acomodacao/familiasuper" legacyBehavior>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img
                                                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                                                    alt="Placeholder image"
                                                />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Familia Super</p><a className="tag is-info">R$ 1000</a>
                                        </div>
                                    </div>

                                    <div className="content">
                                        Entre na sua própria atmosfera de calma e conforto nesta acomodação simples,
                                        perfeita para solteiros. Com um ambiente acolhedor e todas as comodidades necessárias à mão,
                                        este espaço é ideal para quem busca um refúgio tranquilo depois de um dia agitado.
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="column m-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="https://bulma.io/assets/images/placeholders/96x96.png"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Familia Mais</p><a className="tag is-info">R$ 700</a>
                                    </div>
                                </div>

                                <div className="content">
                                    Espaço não é problema nesta acomodação ampla e versátil, perfeita para famílias maiores.
                                    Com áreas separadas para adultos e crianças, todos podem desfrutar de conforto e privacidade enquanto passam tempo juntos.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column m-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="https://bulma.io/assets/images/placeholders/96x96.png"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Solteiro Mais</p><a className="tag is-info">R$ 250</a>
                                    </div>
                                </div>

                                <div className="content">
                                    Para aqueles que procuram conveniência e segurança, esta acomodação com garagem é a escolha ideal.
                                    Com espaço suficiente para o seu carro e todas as suas necessidades, você pode desfrutar de tranquilidade durante toda a sua estadia.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column m-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="https://bulma.io/assets/images/placeholders/96x96.png"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Familia Simples</p><a className="tag is-info">R$ 550</a>
                                    </div>
                                </div>

                                <div className="content">
                                    Uma acomodação calorosa e acolhedora projetada para famílias pequenas. Com espaço suficiente para todos e comodidades adaptadas
                                    às necessidades das crianças, esta é a escolha perfeita para criar memórias inesquecíveis em família.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column m-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="https://bulma.io/assets/images/placeholders/96x96.png"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Casal Simples</p><a className="tag is-info">R$ 350</a>
                                    </div>
                                </div>

                                <div className="content">
                                    Desfrute de momentos especiais com seu parceiro nesta acomodação simples e aconchegante. Com uma atmosfera romântica
                                    e detalhes cuidadosamente pensados, vocês podem relaxar e aproveitar ao máximo sua estadia juntos.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column m-6">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img
                                        src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                        alt="Placeholder image"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="https://bulma.io/assets/images/placeholders/96x96.png"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Solteiro Simples</p><a className="tag is-info">R$ 180</a>
                                    </div>
                                </div>

                                <div className="content">
                                    Entre na sua própria atmosfera de calma e conforto nesta acomodação simples, perfeita para solteiros.
                                    Com um ambiente acolhedor e todas as comodidades necessárias à mão, este espaço é ideal para quem busca um refúgio tranquilo depois de um dia agitado.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}