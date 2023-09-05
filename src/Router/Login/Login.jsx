import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/Styles/Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Senha: ${senha}`);
    setEmail('');
    setSenha('');
  }

  return (
    <main>
      <div className="form-login">
      <form onSubmit={handleSubmit}>
        <div className='title-login'>
          <h2>Faça o seu login</h2>
        </div>
        <div className='caixa-login'>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div className='caixa-login'>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Senha"
          />
        </div>
        <button type="submit">Entrar</button>
        <div className='cadastro-link'>
          <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>
      </form>
      </div>

    </main>
  )
}

