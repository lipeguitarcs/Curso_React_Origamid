import React, { useState } from 'react';
import ExcelFileType from '../../components/assets/excel-file-type.webp';
import SpreadsheetFile from '../../components/assets/exemplo-de-planilha-de-dados.xlsx';
import Footer from '../../components/footer/Footer';
import { SpreadsheetStyle } from './formsStyle';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const FormSpreadsheet = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
    if (!showExplanation) {
      showElements();
    } else {
      hideElements();
    }
  };
  
  const showElements = () => {
    const borderElement = document.querySelector('.question-wrapper');
    const questionElement = document.querySelector('.question-hidden');
  
    console.log("Border element:", borderElement);
    console.log("Question element:", questionElement);
  
    // Verifica se os elementos existem antes de tentar acessá-los
    if (borderElement && questionElement) {
      // Adiciona a classe para fazer a transição ocorrer
      borderElement.classList.add('show');
      questionElement.classList.add('show');
    }
  };
  
  const hideElements = () => {
    const borderElement = document.querySelector('.question-wrapper');
    const questionElement = document.querySelector('.question-hidden');
  
    console.log("Border element:", borderElement);
    console.log("Question element:", questionElement);
  
    // Verifica se os elementos existem antes de tentar acessá-los
    if (borderElement && questionElement) {
      // Remove a classe para fazer a transição ocorrer
      borderElement.classList.remove('show');
      questionElement.classList.remove('show');
    }
  }; 

  return (
    <SpreadsheetStyle>
      <div className="spreadsheet-wrapper">
        <img className="excel-icon" src={ExcelFileType} alt="Arquivo Excel" />
        <h1 className="spreadsheet-title">Possui uma planilha de dados?</h1>
        <div className= {`question-wrapper ${showExplanation ? 'show-border' : ''}`}>
          <p className="question" onClick={toggleExplanation}><i className="fa fa-question-circle" aria-hidden="true"></i> Por que essa pergunta?</p>
            <p className="question-hidden">Caso tenha a planilha, você poderá economizar tempo completando o formulário.</p>
        </div>
        <div className="btn-wrapper">
          <Link to="/simulacao/3">
            Sim
          </Link>
          <Link to="/simulacao/4">
            Não
          </Link>
        </div>
        <div className="download-wrapper">
          <a href={SpreadsheetFile} download><span className="bold">
            <i className="fa fa-download" aria-hidden="true"></i> Fazer download de planilha padrão
          </span></a>
        </div>
        <div className="skip-wrapper">
          <a href="#">
            Não quero preencher o formulário, quero falar com um especialista
          </a>
        </div>
      </div>
    </SpreadsheetStyle>
  );
};

export default FormSpreadsheet;