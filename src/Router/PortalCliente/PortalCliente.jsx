import React, { useState } from 'react';
import '/src/Styles/PortalCliente.css';

export default function PortalCliente() {
    const [pagina, setPagina] = useState('inicio');
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        numeroSerie: '',
        modelo: '',
        marca: '',
        cor: '',
        anoFabricacao: ''
    });

    const alterarPagina = (novaPagina) => {
        setPagina(novaPagina);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [nota, setNota] = useState('');
    const [comentario, setComentario] = useState('');

    const handleSubmitFeedback = (e) => {
        e.preventDefault();

        if (nota >= 0 && nota <= 10) {
            console.log("Nota válida, enviando feedback:", nota, comentario);
        } else {
            alert("A nota deve estar entre 0 e 10.");
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          console.log(`Arquivo selecionado: ${selectedFile.name}`);
        }
      };

    const MenuOption = ({ texto, imagem, onClick }) => (
        <div className="menu-option" onClick={onClick}>
            <img src={imagem} alt={texto} className="menu-image" />
            <div className="menu-text">{texto}</div>
        </div>
    );

    let conteudoPagina;

    if (pagina === 'solicitar') {
        conteudoPagina = (
            <div className='solic-vist'>
                <br />
                <h2>Solicitar Nova Vistoria</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label><br />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço:</label><br />
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numeroSerie">Número de Série da Bicicleta:</label><br />
                        <input
                            type="text"
                            id="numeroSerie"
                            name="numeroSerie"
                            value={formData.numeroSerie}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modelo">Modelo da Bicicleta:</label><br />
                        <input
                            type="text"
                            id="modelo"
                            name="modelo"
                            value={formData.modelo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="marca">Marca da Bicicleta:</label><br />
                        <input
                            type="text"
                            id="marca"
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cor">Cor da Bicicleta:</label><br />
                        <input
                            type="text"
                            id="cor"
                            name="cor"
                            value={formData.cor}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="anoFabricacao">Ano de Fabricação da Bicicleta:</label><br />
                        <input
                            type="text"
                            id="anoFabricacao"
                            name="anoFabricacao"
                            value={formData.anoFabricacao}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagensBicicleta">Imagens ou Vídeos da Bicicleta:</label><br />
                        <input
                            type="file"
                            id="imagensBicicleta"
                            name="imagensBicicleta"
                            accept="image/*, video/*"
                            multiple
                            onChange={handleFileChange}
                        /> <br />
                        <p>Por favor, envie imagens ou vídeos da bicicleta a partir de diferentes ângulos <br /> para uma melhor visualização.</p>
                    </div><br />
                    <div className="button-container">
                        <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                            Voltar para o Menu
                        </button>
                        <button type="submit">Enviar Solicitação</button>
                    </div>
                </form>
            </div>
        );
    } else if (pagina === 'acompanhar') {
        const aompanhamentoVistoria = [
            {
                id: 1,
                data: '2023-09-10',
                status: 'Em Andamento',
                resultado: 'Sem problemas detectados',
                detalhes: 'Informações Adicionais.',
            },
            {
                id: 2,
                data: '2023-09-05',
                status: 'Em Andamento',
                resultado: 'Leve desgaste no pneu traseiro',
                detalhes: 'Informações Adicionais.',
            },
            {
                id: 3,
                data: '2023-08-28',
                status: 'Em Andamento',
                resultado: 'Nenhum problema encontrado',
                detalhes: 'Informações Adicionais.',
            },
        ];

        conteudoPagina = (
            <div className='acompanhar-vist'>
                <br />
                <h2>Acompanhar Vistorias Automatizadas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Resultado</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aompanhamentoVistoria.map((vistoria) => (
                            <tr key={vistoria.id}>
                                <td>{vistoria.id}</td>
                                <td>{vistoria.data}</td>
                                <td>{vistoria.status}</td>
                                <td>{vistoria.resultado}</td>
                                <td>
                                    <button className="ver-detalhes" onClick={() => exibirDetalhes(vistoria.detalhes)}>
                                        Ver Detalhes
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button-container">
                    <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                        Voltar para o Menu
                    </button>
                </div>
            </div>
        );
    } else if (pagina === 'historico') {
        const historicoVistoria = [
            {
                id: 1,
                data: '2023-09-10',
                status: 'Concluída',
                resultado: 'Sem problemas detectados',
                detalhes: 'pdf_diagnostico1',
            },
            {
                id: 2,
                data: '2023-09-05',
                status: 'Concluída',
                resultado: 'Leve desgaste no pneu traseiro',
                detalhes: 'pdf_diagnostico2',
            },
            {
                id: 3,
                data: '2023-08-28',
                status: 'Concluída',
                resultado: 'Nenhum problema encontrado',
                detalhes: 'pdf_diagnostico3',
            },
        ];

        conteudoPagina = (
            <div className='histo-vist'>
                <br />
                <h2>Ver Histórico de Vistorias de Bicicletas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Resultado</th>
                            <th>Mais Informações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historicoVistoria.map((vistoria) => (
                            <tr key={vistoria.id}>
                                <td>{vistoria.id}</td>
                                <td>{vistoria.data}</td>
                                <td>{vistoria.status}</td>
                                <td>{vistoria.resultado}</td>
                                <td>
                                    <button
                                        className="ver-diagnostico"
                                        onClick={() => exibirDiagnostico(vistoria.detalhes)}>
                                        Ver Diagnóstico
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button-container">
                    <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                        Voltar para o Menu
                    </button>
                </div>
            </div>
        );

    } else if (pagina === 'configuracoes') {
        conteudoPagina = (
            <div className="configuracoes-conteiner">
                <h2>Configurações da Conta</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label><br />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome} 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço:</label><br />
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Nova Senha:</label><br />
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={formData.senha} 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="button-container">
                        <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                            Voltar para o Menu
                        </button>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        );
    } else if (pagina === 'suporte') {
        conteudoPagina = (
            <div className="suporte-conteiner">
                <h2>Suporte ao Cliente</h2>
                <p>
                    A plataforma oferece recursos como tutoriais e fóruns de discussão para ajudar os usuários.
                    A qualidade do suporte fornecido pela plataforma é excelente.
                </p><br />
                <div className="suporte-contato">
                    <h3>Detalhes</h3>
                    <p>
                        Se você precisar de suporte adicional, entre em contato conosco através dos seguintes meios:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:inovaxfiap@gmail.com">inovaxfiap@gmail.com</a></li>
                        <li>Telefone: (11) 5555-5555</li>
                        <li>Endereço: Avenida Paulista, 1060 - Bela Vista - São Paulo - SP</li>
                    </ul>
                </div><br />

                <div className="suporte-recursos">
                    <h3>Recursos de Suporte</h3><br />
                    <ul>
                        <li>
                            <a href="/tutoriais/tutorial-1">Como Enviar uma Solicitação de Vistoria</a>
                        </li>
                        <li>
                            <a href="/tutoriais/tutorial-2">Acompanhando o Progresso da Vistoria</a>
                        </li>
                    </ul>
                </div>
                <div className="suporte-recursos">
                    <h3>Fórum de Discussão</h3>
                    <p>
                        Participe de discussões com outros usuários para compartilhar experiências e obter ajuda.
                        Visite nosso fórum de discussão <a href="/forum">aqui</a>.
                    </p>
                </div><br />
                <div className="suporte-recursos">
                    <h3>Fale com o Chatbot</h3>
                    <p>
                        Você também pode iniciar uma conversa com o nosso chatbot para obter ajuda instantânea.
                        Clique no botão abaixo para iniciar a conversa.
                    </p>
                    <div className="suporte-chatbot">
                        <button className='btn-chatbot'>
                            <span><img src="src/image/icon_chatbot.png" alt="icon do chat bot" />Iniciar Chatbot</span>
                            </button>
                    </div>
                    <p>A Inova-X, agradece o seu contato!</p>
                </div>


                <div className="button-container">
                    <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                        Voltar para o Menu
                    </button>
                </div>
            </div>
        );
    } else if (pagina === 'faq') {
        const faqItems = [
            {
                question: '1. Como funciona o processo de vistoria de bicicletas online?',
                answer: 'O nosso processo de vistoria de bicicletas online utiliza tecnologias avançadas para capturar e analisar imagens e vídeos da bicicleta. A análise é feita automaticamente para identificar avarias e validar a autenticidade das mídias enviadas, tudo sem intervenção humana.'
            },
            {
                question: '2. Como faço para agendar uma vistoria?',
                answer: 'Para agendar uma vistoria, você precisa criar uma conta em nosso site e seguir as instruções para enviar as imagens e vídeos da bicicleta. Nossa plataforma irá processar as informações e fornecer um relatório de vistoria.'
            },
            {
                question: '3. Como garantir a segurança e autenticidade do processo de vistoria?',
                answer: 'Nosso sistema utiliza técnicas avançadas de reconhecimento de padrões e validação de mídia para garantir a autenticidade das informações. Além disso, implementamos medidas de segurança rigorosas para proteger seus dados.'
            },
        ];

        conteudoPagina = (
            <div className='faq-conteiner'>
                <h2>FAQ (Perguntas Frequentes)</h2>
                <ul>
                    {faqItems.map((item, index) => (
                        <li key={index}>
                            <strong>{item.question}</strong>
                            <p>{item.answer}</p>
                        </li>
                    ))}
                </ul>
                <div className="button-container">
                    <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                        Voltar para o Menu
                    </button>
                </div>
            </div>
        );
    } else if (pagina === 'feedback') {
        conteudoPagina = (
            <div className="feedback-conteiner">
                <h2>Feedback</h2>
                <form onSubmit={handleSubmitFeedback}>
                    <div className="form-group">
                        <label htmlFor="nota">Nota (de 0 a 10):</label><br />
                        <input
                            type="text"
                            id="nota"
                            name="nota"
                            value={nota}
                            onChange={(e) => setNota(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comentario">Comentário:</label><br />
                        <textarea
                            id="comentario"
                            name="comentario"
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="button-container">
                        <button className="button-voltar-menu" onClick={() => alterarPagina('inicio')}>
                            Voltar para o Menu
                        </button>
                        <button type="submit">Enviar Feedback</button>
                    </div>
                </form>
            </div>
        );
    } else if (pagina === 'sair') {
        window.location.href = '/';

    } else {
        conteudoPagina = (
            <div>
                <h1>Portal do Cliente</h1>
                <p>Selecione uma opção:</p>
            </div>
        );
    }

    return (
        <main>
            <div className="portalclie-conteiner">
                {conteudoPagina}
                <div className="menu-options">
                    {pagina === 'inicio' && (
                        <>
                            <MenuOption
                                texto="Solicitar Nova Vistoria"
                                imagem="src/image/icon_solic.png"
                                onClick={() => alterarPagina('solicitar')}
                            />
                            <MenuOption
                                texto="Acompanhar Vistorias em Andamento"
                                imagem="src/image/icon_acompa.png"
                                onClick={() => alterarPagina('acompanhar')}
                            />
                            <MenuOption
                                texto="Ver Histórico de Vistorias de Bicicletas"
                                imagem="src/image/icon_hist.png"
                                onClick={() => alterarPagina('historico')}
                            />
                            <MenuOption
                                texto="Configurações da Conta"
                                imagem="src/image/icon_config.png"
                                onClick={() => alterarPagina('configuracoes')}
                            />
                            <MenuOption
                                texto="Suporte ao Cliente"
                                imagem="src/image/icon_suporte.jpg"
                                onClick={() => alterarPagina('suporte')}
                            />
                            <MenuOption
                                texto="FAQ (Perguntas Frequentes)"
                                imagem="src/image/icon_faq.jpg"
                                onClick={() => alterarPagina('faq')}
                            />
                            <MenuOption
                                texto="Feedback"
                                imagem="src/image/icon_feedback.jpg"
                                onClick={() => alterarPagina('feedback')}
                            />
                            <MenuOption
                                texto="Sair da Conta"
                                imagem="src/image/icon_sair.jpg"
                                onClick={() => alterarPagina('sair')}
                            />
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
