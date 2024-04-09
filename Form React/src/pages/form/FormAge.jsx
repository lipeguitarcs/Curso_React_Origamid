import React, { useState, useEffect} from 'react'
import { Input } from 'reactstrap'
import Footer from '../../components/footer/Footer';
import { FormAgeStyle } from './formsStyle';

const FormAge = () => {

 // Constantes useState
  const [ageData, setAgeData] = useState({
    ageRange00to18: '',
    ageRange19to23: '',
    ageRange24to28: '',
    ageRange29to33: '',
    ageRange34to38: '',
    ageRange39to43: '',
    ageRange44to48: '',
    ageRange49to53: '',
    ageRange54to58: '',
    ageRange59orMore: '',
    maleEmployees: '',
    femaleEmployees: '',
  });

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Efeito para salvar os dados no localStorage
  useEffect(() => {
    localStorage.setItem('@ageData', JSON.stringify(ageData));
  }, [ageData]);

  // --Retorno-- //

  return (
    <FormAgeStyle>

      <section className="formAge">

        {/* Título */}
        <div className="formAge_title__container">
          <h1 className="formAge_title">
            Preencha a quantidade de colaboradores em cada faixa etária
          </h1>
        </div>

        {/* Campos */}
        <div className="formAge_fields__container">

          {/* Colunas */}
          <div className="formAge_fields__column">

            {/* 00 à 18 anos */}
            <div className="d-flex field00to18">

              <p className="field_label">00 à 18:</p>

              <>
                <Input
                  type="number"
                  name="ageRange00to18"
                  value={ageData.ageRange00to18}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 19 à 23 anos */}
            <div className="d-flex field19to23">

              <p className="field_label">19 à 23:</p>

              <>
                <Input
                  type="number"
                  name="ageRange19to23"
                  value={ageData.ageRange19to23}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 24 à 28 anos */}
            <div className="d-flex field24to28">

              <p className="field_label">24 à 28:</p>

              <>
                <Input
                  type="number"
                  name="ageRange24to28"
                  value={ageData.ageRange24to28}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 29 à 33 anos */}
            <div className="d-flex field29to33">

              <p className="field_label">29 à 33:</p>

              <>
                <Input
                  type="number"
                  name="ageRange29to33"
                  value={ageData.ageRange29to33}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 34 à 38 anos */}
            <div className="d-flex field34to38">

              <p className="field_label">34 à 38:</p>

              <>
                <Input
                  type="number"
                  name="ageRange34to38"
                  value={ageData.ageRange34to38}
                  onChange={handleChange}
                />
              </>

            </div>

          </div>
          <div className="formAge_fields__column">

            {/* 39 à 43 anos */}
            <div className="d-flex field39to43">

              <p className="field_label">39 à 43:</p>

              <>
                <Input
                  type="number"
                  name="ageRange39to43"
                  value={ageData.ageRange39to43}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 44 à 48 anos */}
            <div className="d-flex field44to48">

              <p className="field_label">44 à 48:</p>

              <>
                <Input
                  type="number"
                  name="ageRange44to48"
                  value={ageData.ageRange44to48}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 49 à 53 anos */}
            <div className="d-flex field49to53">

              <p className="field_label">49 à 53:</p>

              <>
                <Input
                  type="number"
                  name="ageRange49to53"
                  value={ageData.ageRange49to53}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 54 à 58 anos */}
            <div className="d-flex field54to58">

              <p className="field_label">54 à 58:</p>

              <>
                <Input
                  type="number"
                  name="ageRange54to58"
                  value={ageData.ageRange54to58}
                  onChange={handleChange}
                />
              </>

            </div>

            {/* 59 anos ou mais */}
            <div className="d-flex field59orMore">

              <p className="field_label">59 ou +:</p>

              <>
                <Input
                  type="number"
                  name="ageRange59orMore"
                  value={ageData.ageRange59orMore}
                  onChange={handleChange}
                />
              </>

            </div>

          </div>
        </div>

        {/* Campos Adicionais */}
        <div className="formAge_additionalFields__container">

          {/* Colab. do sexo masculino */}
          <div className="employees_field">

            <p className="employees_label">Quantidade de colaboradores do sexo masculino:</p>

            <div className="employees_input">
              <>
                <Input
                  type="number"
                  name="maleEmployees"
                  value={ageData.maleEmployees}
                  onChange={handleChange}
                  />
              </>
            </div>

          </div>

          {/* Colab. do sexo feminino */}
          <div className="employees_field">

            <p className="employees_label">Quantidade de colaboradores do sexo feminino:</p>

            <div className="employees_input">
              <>
                <Input
                  type="number"
                  name="femaleEmployees"
                  value={ageData.femaleEmployees}
                  onChange={handleChange}
                  />
              </>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </FormAgeStyle>
  )
}

export default FormAge