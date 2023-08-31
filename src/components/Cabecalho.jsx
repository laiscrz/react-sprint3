import {Link} from 'react-router-dom'

export default function Cabecalho(){
    return(
        <div className="cabecalho-conteiner">
            <header>

            </header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/comofunciona'>Como Funciona</Link>
                <Link to='/servicos'>Serviços</Link>
                <Link to='/sobrenos'>Sobre Nós</Link>
                <Link to='/contato'>Contato</Link>
                <button>login<button/>
            </nav>
        </div>
    )
}
