import React from 'react';

const sections = [
  { title: 'Descrição', content: 'Inova-x desenvolveu uma solução digital de vistoria de bicicletas online que visa proporcionar aos usuários uma maneira rápida e eficiente de avaliar suas bicicletas sem a necessidade de intervenção humana. O sistema utiliza tecnologias de reconhecimento de imagem e vídeo para identificar possíveis danos e fraudes.' },
  { title: 'Criação da Conta', content: 'Os usuários podem criar uma conta na plataforma preenchendo um formulário ou fazendo o cadastro com suas contas de redes sociais. O sistema garante a segurança dos dados dos usuários.' },
  { title: 'Realização da Vistoria', content: 'O processo de vistoria da bicicleta é conduzido por meio do reconhecimento de imagens e vídeos pelo sistema. A tecnologia identifica com precisão possíveis danos e fraudes. O usuário é orientado a tirar fotos e vídeos específicos da bicicleta para conduzir a vistoria.' },
  { title: 'Resultados da Vistoria', content: 'Os usuários podem acessar um relatório detalhado dos resultados da vistoria, que inclui todos os danos identificados, juntamente com imagens e vídeos autênticos. O sistema garante que a avaliação seja confiável.' },
  { title: 'Suporte e Recursos', content: 'A plataforma oferece recursos como tutoriais, vídeos e fóruns de discussão para ajudar os usuários. A qualidade do suporte fornecido pela plataforma é excelente.' },
  { title: 'FAQs', content: 'A plataforma responde a todas as perguntas frequentes relacionadas à precisão da tecnologia, segurança das informações, preços e disponibilidade.' },
];

export default function Comofunciona() {
  return (
    <main>
      <div className="comofunciona-container">
        <h1>Como Funciona</h1>
        {sections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
