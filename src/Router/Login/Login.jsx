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
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="login-form-title">
                Faça o seu login
              </span><br />

              <div className="wrap-input margin-bottom-35">
                <input
                  className="input-form"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="focus-input-form" data-placeholder="E-mail"></span>
              </div>

              <div className="wrap-input margin-bottom-35">
                <input
                  className="input-form"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <span className="focus-input-form" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn" type="submit">
                  Entrar
                </button>
              </div>

              <ul className="login-utils">
                <li className="margin-bottom-8 margin-top-8">
                  <span className="text1">
                    Não tem uma conta? 
                  </span>

                  <Link to="/cadastro" className="text2">
                    Cadastre-se
                  </Link>
                </li>
              </ul>
            </form>
          </div>
          <img src="src/image/login.png" width="300" height="300" class="margin-left-50" />
        </div>
      </div>
    </main>
  )
}