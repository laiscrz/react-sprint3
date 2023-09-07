import React, { useState } from 'react';
import '/src/Styles/Contato.css'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique se os campos obrigatórios estão preenchidos
    if (
      formData.nome === '' ||
      formData.telefone === '' ||
      formData.email === '' ||
      formData.assunto === ''
    ) {
      window.alert('Por favor, preencha todos os campos obrigatórios.'); // Mostra um alerta
      return; // Sai da função sem enviar o formulário
    }

    console.log('Dados enviados:', formData);

    // Você pode adicionar aqui o código para enviar os dados para o servidor, se necessário.
  };

  return (
    <main>
      <div className="elipse-superior">
        
      </div>
      <div className="contato-conteiner">
        <h1>Contato</h1>
        <p>
          Para entrar em contato conosco, por favor, preencha o formulário
          abaixo com suas informações e a sua mensagem. Nós responderemos o mais
          rápido possível. Também é possível enviar um e-mail para nosso
          endereço de contato ou entrar em contato através de nossas redes
          sociais. Estamos sempre abertos a sugestões, comentários e críticas
          construtivas para melhorar nossos produtos e serviços. Obrigado por
          escolher a InovaX.
        </p>
        <h3>Formulário para Contato</h3><br />
        <div className="form-contato">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="number"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
            >
              <option value="" disabled>
                Assunto
              </option>
              <option value="elogio">Elogio</option>
              <option value="duvida">Dúvidas</option>
              <option value="reclamacoes">Reclamações</option>
              <option value="outros">Outros</option>
            </select>
            <textarea
              name="comentarios"
              placeholder="Comentários"
              value={formData.comentarios}
              onChange={handleChange}
            ></textarea>
            <br />
            <button type="submit" id="btnEnviar">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
