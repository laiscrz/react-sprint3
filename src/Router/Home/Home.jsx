import React from 'react';
import '/src/Styles/Home.css';

export default function Home() {
    return (
        <main>
            <div className="home-conteiner">
                <section className='inicio-home'>
                    <div className="destaq-inicio">
                        <div className="frase-destaq">
                        <h1>Sua Vistoria</h1>
                        <h2>Online Aqui!</h2>
                        </div>
                        <div className="btn-saibamais">
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                    <div className="destaq-bicle">
                        <div className="quadrad-home">

                        </div>
                        <img src="src/image/img_homedestaq.png" alt="Homem na Bicicleta" />
                    </div>
                </section>
            </div>
        </main>
    )
}