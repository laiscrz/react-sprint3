import React, { useState } from 'react';
import '/src/Styles/Cadastro.css';
import { Link } from 'react-router-dom';

export default function Cadastro() {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cpf: '',
        dataNascimento: '',
        senha: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataNascimento = new Date(cliente.dataNascimento);
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();

        if (idade < 18) {
            alert('Você não pode se cadastrar, pois não tem idade suficiente.');
            return;
        }

        setClientes([...clientes, cliente]);

        setCliente({
            nome: '',
            email: '',
            telefone: '',
            endereco: '',
            cpf: '',
            dataNascimento: '',
            senha: '',
        });

        // Redirecionar apenas se os dados estiverem corretos
        window.location.href = "/PortalCliente";
    };

    return (
        <main className="cadastro">
            <div className="cadastro-conteiner">
                <h1>Cadastro de Cliente</h1>
                <p>Preencha os Dados Abaixo Corretamente.</p><br />
                <div className="form-cadastro">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo:</label><br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={cliente.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={cliente.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label><br />
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={cliente.telefone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço:</label><br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={cliente.endereco}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label><br />
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={cliente.cpf}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dataNascimento">Data de Nascimento:</label><br />
                            <input
                                type="date"
                                id="dataNascimento"
                                name="dataNascimento"
                                value={cliente.dataNascimento}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label><br />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={cliente.senha}
                                onChange={handleInputChange}
                                required
                            />
                        </div><br />
                        <span>
                            <button type="submit">Cadastrar</button>
                        </span>
                    </form>
                </div>
            </div>
        </main>
    );
}
