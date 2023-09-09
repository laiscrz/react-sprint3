import React from 'react';
import '/src/Styles/Home.css';
import {Link} from 'react-router-dom';
import Carousel from '../../components/Carousel';


export default function Home() {
    const images = [
        'src/image/feedback_clienteana.png',
        'src/image/feedback_clientenoah.png',
        'src/image/feedback_clienteestela.png',
      ];
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
                            <Link to="/ComoFunciona">
                                <span><button>Saiba Mais</button></span>
                            </Link>
                        </div>
                    </div>
                    <div className="destaq-bicle">
                        <div className="quadrad-home">

                        </div>
                        <img src="src/image/img_homedestaq.png" alt="Homem na Bicicleta" />
                    </div>
                </section>

                <section className="feedbackclie-destaq">
                    <h1>FeedBack de Destaques</h1><br />
                    <p>Aqui estão alguns dos comentários e feedbacks de nossos clientes satisfeitos:</p><br />
                    <Carousel images={images} />
                </section>
            </div>
        </main>
    )
}