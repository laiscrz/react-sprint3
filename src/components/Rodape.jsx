import {Link} from 'react-router-dom'

export default function Rodape() {
    return (
      <footer className='footer-conteiner'>
        <section className="redes-sociais">
          <a href="https://pt-br.facebook.com/"><img src="src/image/icone_face.jpg" alt="Facebook Icone" className="icone-redes" /></a>
          <a href="https://www.instagram.com/"><img src="src/image/icone_insta.jpg" alt="Instagram Icone" className="icone-redes" /></a>
          <a href="https://web.whatsapp.com/"><img src="src/image/icone_zap.jpg" alt="Whatsapp Icone" className="icone-redes" /></a>
        </section>
        <p className="text-center">&copy; 2023 Inova-X. Todos os direitos reservados.</p>
        <div className="selec-integrant">
          <Link to='/integrantes'>Integrantes</Link>
        </div>
      </footer>
    );
  }