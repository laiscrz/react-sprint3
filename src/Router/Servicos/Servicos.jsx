import React from 'react';

// Componente para representar um serviço individual
function ServicoItem({ imagemSrc, titulo, descricao }) {
  return (
    <div className="servico-item">
      <img src={imagemSrc} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

// Componente da página de serviços
export default function Servicos() {
    const servicosData = [
      {
        imagemSrc: 'src/image/serv_vistoriainteli.png',
        titulo: 'Vistorias Inteligentes',
        descricao:
          'A vistoria é inteligente e usa tecnologias de reconhecimento de imagem e vídeo para detectar automaticamente defeitos e avarias em bicicletas, sem a necessidade de intervenção humana.',
      },
      {
        imagemSrc: 'src/image/serv_detecfraud.png',
        titulo: 'Detecção de Fraudes',
        descricao:
          'Serviço de detecção de fraudes que usa a tecnologia de reconhecimento de imagem e vídeo para detectar possíveis fraudes em vistorias de veículos.',
      },
      {
        imagemSrc: 'src/image/serv_detecavaria.png',
        titulo: 'Detecção de Avarias',
        descricao:
          'Uma solução que usa inteligência artificial para detectar automaticamente defeitos e avarias na bicicleta, analisando rapidamente o possível dano.',
      },
      {
        imagemSrc: 'src/image/serv_relatestado.png',
        titulo: 'Relatório de Estado',
        descricao:
          'Um relatório detalhado sobre o estado da bicicleta é fornecido ao proprietário, incluindo informações sobre os reparos necessários.',
      },
    ];
  
    return (
      <main>
        <div className="servicos-container">
          <h1>Serviços</h1>
          {servicosData.map((servico, index) => (
            <ServicoItem
              key={index}
              imagemSrc={servico.imagemSrc}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>
      </main>
    );
  }