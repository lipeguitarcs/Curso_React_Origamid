import React, { useState, useRef, useEffect } from 'react';
import { UploadStyle } from './formsStyle';
import Footer from '../../components/footer/Footer';

// Defina as opções iniciais fora do componente para que elas não sejam reinicializadas
const initialOptions = [
  'Selecionar todas',
  'Filiais',
  'Total de funcionarios registrados',
  'Total de funcionarios interessados',
  'Plano de saúde atual',
  'Categoria',
  'Faixa etaria dos titulares e dependentes',
  'Cidades dos residentes de outras localidades',
  'Idades dos residentes de outras localidades',
  'Inativos (demitidos ou aposentados)',
  'Afastados',
  'Internados de longa permanência',
  'Filhos especiais',
  'Casos de gestantes',
  'Doentes crônicos, tratamento de alto custo, oncológico ou home care ',
  'Casos de indicação de cirurgias em andamento',
  'CID',
];

const FormUpload = () => {
  const allOption = 'Selecionar todas';
  const selectPlaceholder = 'Selecione...';
  const [options, setOptions] = useState(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const selectRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Recuperar selectedOptions do localStorage se existir
    const savedSelectedOptions = JSON.parse(localStorage.getItem('@selectedOptions')) || [];
    setSelectedOptions(savedSelectedOptions);
  }, []);

  useEffect(() => {
    // Atualiza o localStorage sempre que selectedOptions mudar
    localStorage.setItem('@selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);
  

  useEffect(() => {
    // Atualize as opções disponíveis excluindo as opções selecionadas
    const remainingOptions = initialOptions.filter(option => !selectedOptions.includes(option));
    setOptions([selectPlaceholder, ...remainingOptions]);
  }, [selectedOptions]);

  const handleSelectOption = (option) => {
    if (option === allOption) {
      setSelectedOptions(options.slice(1));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    selectRef.current.value = selectPlaceholder;
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
    fileInputRef.current.value = '';
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Limpa o estado após o envio
    setFile(null);
    setFiles([]);

    // Aqui você pode enviar o formData para o backend ou fazer o que for necessário com os dados
  };

  return (
    <UploadStyle>
      <div className="upload-wrapper">
        <h1 className="upload-title">Confira se estes dados estão em sua planilha</h1>
        <div className="select-wrapper">
          <select
            ref={selectRef}
            value={selectPlaceholder}
            onChange={(e) => handleSelectOption(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="items-wrapper">
          <div className="uploaded-items">
            {selectedOptions.map((option, index) => (
              <div key={index}>
                <button onClick={() => handleRemoveOption(option)}>
                  {option}
                  <span className="option-close" onClick={() => handleRemoveOption(option)}>
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="uploader-wrapper">
          <p>Caso tenha alguma dessas planilhas, basta anexá-las abaixo:</p>
          <input type="file" onChange={handleFileChange} ref={fileInputRef} multiple />
          <button onClick={handleSubmit}>Enviar</button>
        </div>
        {files.length > 0 && (
          <div className="selected-files">
            <p className="uploading-files">Arquivos selecionados:</p>
            {files.map((file, index) => (
              <div className="uploading-items" key={index}>
                {file.name}
                <button onClick={() => handleRemoveFile(file)}>x</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </UploadStyle>
  );
};

export default FormUpload;
