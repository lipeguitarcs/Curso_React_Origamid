import React from "react";
import StatusStyle from "./statusStyle";
import Logo from "../assets/logo-branco.webp";

export const Status = () => {
  const [path, setPath] = React.useState('');

  React.useEffect(() => {
    const pathname = window.location.pathname;
    const pathNumber = parseInt(pathname.replace(/\D/g, "")); // Extrai apenas os números do caminho

    // Define o número da seção com base no caminho
    setPath(pathNumber);
  }, []); // Adiciona um array vazio como segundo argumento para garantir que o useEffect seja executado apenas uma vez, após a montagem do componente

  return (
    <StatusStyle>
      <div className="logo-box">
        <img className="logo" src={Logo} alt="Logo" height={75} />
      </div>
      <div className="status-text-conteiner">
        <p className="status-text text-white">Formulário para cotação de planos de saúde</p>
      </div>
      {/* First section */}
      <div className={`number-active ${path === 1 ? "active" : ""}`}>
        <div className="content-status d-flex">
          <div className="content-status-active">
            <p className="number-active"> 1 </p>
          </div>
          <p className="data-active">Dados básicos</p>
        </div>
      </div>
      {/* Second section */}
      <div className={`number-desactive ${path === 2 ? "active" : ""}`}>
        <div className="content-status d-flex">
          <div className="content-status-desactive">
            <p className="describe-desactive"> 2 </p>
          </div>
          <p className="data-desactive">Dados e planilha</p>
        </div>
      </div>
      {/* Third section */}
      <div className={`number-desactive ${path === 3 ? "active" : ""}`}>
        <div className="content-status d-flex">
          <div className="content-status-desactive">
            <p className="number-desactive"> 3 </p>
          </div>
          <p className="data-desactive">Complementos</p>
        </div>
      </div>
      {/* Fourth section */}
      <div className={`number-desactive ${path === 4 ? "active" : ""}`}>
        <div className="content-status d-flex">
          <div className="content-status-desactive">
            <p className="number-desactive"> 4 </p>
          </div>
          <p className="data-desactive">Concluir</p>
        </div>
      </div>
    </StatusStyle>
  );
};
