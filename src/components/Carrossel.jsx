import React, { useState, useEffect } from 'react';

const Carrossel = ({ imagens }) => {
  const [indiceImagemAtual, setIndiceImagemAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceImagemAtual((indiceAnterior) => (indiceAnterior + 1) % imagens.length);
    }, 3000); 

    return () => {
      clearInterval(intervalo);
    };
  }, [imagens]);

  return (
    <div className="carrossel">
      <img src={imagens[indiceImagemAtual]} alt={`Imagem ${indiceImagemAtual}`} />
    </div>
  );
};

export default Carrossel;
