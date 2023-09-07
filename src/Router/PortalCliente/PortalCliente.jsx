
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortalCliente() {
    const [abaAtiva, setAbaAtiva] = useState('dados'); // Estado para rastrear a aba ativa

    // Função para alternar entre as abas
    const alternarAba = (aba) => {
        setAbaAtiva(aba);
    };

    return (
        <main>
            <div className="portalcliente-conteiner">
            <div className="portal-cliente">
                <h1>Portal do Cliente</h1>
                <div className="menu-abas">
                    <button onClick={() => alternarAba('dados')}>Mudar Dados</button>
                    <button onClick={() => alternarAba('realizar-vistoria')}>Realizar Vistoria</button>
                    <button onClick={() => alternarAba('acompanhar-vistoria')}>Acompanhar Vistoria</button>
                </div>
                {/* Conteúdo da aba ativa */}
                {abaAtiva === 'dados' && <DadosCliente />}
                {abaAtiva === 'realizar-vistoria' && <RealizarVistoria />}
                {abaAtiva === 'acompanhar-vistoria' && <AcompanharVistoria />}
            </div>
        </div>
        </main>
        
    );
}

function DadosCliente() {
    // Componente para exibir e permitir a edição dos dados do cliente
    return (
        <div>
            {/* Inclua aqui o formulário para mudar os dados do cliente */}
            <h2>Dados do Cliente</h2>
        </div>
    );
}

function RealizarVistoria() {
    // Componente para realizar uma vistoria
    return (
        <div>
            {/* Inclua aqui o formulário para realizar uma vistoria */}
            <h2>Realizar Vistoria</h2>
        </div>
    );
}

function AcompanharVistoria() {
    // Componente para acompanhar a vistoria
    return (
        <div>
            {/* Inclua aqui a lista de vistorias do cliente e seu status */}
            <h2>Acompanhar Vistoria</h2>
        </div>
    );
}
    
