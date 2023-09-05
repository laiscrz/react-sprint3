import React from 'react';
import '/src/Styles/SobreNos.css'

const sections = [
  {
    title: 'Sobre a nossa empresa',
    content: 'A InovaX é uma empresa brasileira de tecnologia, focada no desenvolvimento de soluções inovadoras para diversos segmentos de mercado. Fundada em 2023, a empresa nasceu da paixão de um grupo de empreendedores por inovação e tecnologia, com o objetivo de ajudar a transformar o mundo em um lugar melhor por meio da tecnologia.  Acreditamos que a tecnologia pode transformar vidas e nosso principal produto, a solução digital de vistoria de bicicletas, reflete essa visão. Contamos com uma equipe experiente e comprometida em fornecer soluções de alta qualidade e fazer a diferença na vida das pessoas.',
  },
  {
    title: 'Nossa Missão',
    content: 'Nossa missão na InovaX é utilizar a tecnologia para criar soluções inovadoras que não só facilitem a vida das pessoas, mas também promovam um impacto positivo na sociedade e no meio ambiente. Buscamos constantemente a excelência em nossos produtos e serviços, com o objetivo de melhorar a qualidade de vida das pessoas e transformar o mundo em um lugar melhor.',
  },
  {
    title: 'Nossos Valores',
    content: 'Acreditamos que nossos valores são fundamentais para o sucesso da nossa empresa e de nossos clientes:',
    list: [
      'Inovação: buscamos sempre soluções criativas e inovadoras para os problemas dos nossos clientes;',
      'Ética: agimos sempre com ética, transparência e respeito;',
      'Qualidade: entregamos sempre soluções de alta qualidade e confiabilidade;',
      'Satisfação do cliente: trabalhamos com foco na satisfação dos nossos clientes, buscando entender e atender suas necessidades de forma personalizada;',
      'Trabalho em equipe: valorizamos e incentivamos o trabalho em equipe, a colaboração e a diversidade de ideias.',
    ],
  },
  {
    title: 'Outros detalhes relevantes',
    list: [
      'Localização: São Paulo, Brasil;',
      'Ano de fundação: 2023',
      'Setores de atuação: tecnologia, inovação e desenvolvimento de software;',
      'Clientes: diversos segmentos de mercado, incluindo financeiro, varejo e seguros;',
      'Parceiros: mantemos parcerias estratégicas com empresas e instituições de renome, para garantir a qualidade e a inovação de nossas soluções.',
    ],
  },
];

export default function SobreNos() {
  return (
    <main>
      <div className="sobrenos-conteiner">
        <h1>Sobre Nós</h1>
        {sections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            {section.list && (
              <ul>
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
