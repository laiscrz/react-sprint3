import {Link} from 'react-router-dom'
import profile_icon from '../image/profile_icon.png';

export default function Cabecalho(){
    return(
        <div className="cabecalho-conteiner">
            <header>
                <img src="src/image/logoInovax.png" alt="img" className='logo'/>
            </header>
            <nav>
                <div className='navegacao-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/comofunciona'>Como Funciona</Link>
                    <Link to='/servicos'>Serviços</Link>
                    <Link to='/sobrenos'>Sobre Nós</Link>
                    <Link to='/contato'>Contato</Link>
                </div>
            </nav>
                <div>
                    <Link to='/login'>
                        <button id="btnLogin">
                            <span><img src={profile_icon} alt="Profile Icon"/> Login</span>
                        </button>
                    </Link> 
                </div>    
        </div>
    )
}