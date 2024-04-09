import React, { useState, useEffect } from "react";
import { EndStyle } from "./formsStyle";
import { Input, Progress, Alert } from "reactstrap";
import Footer from "../../components/footer/Footer";

const FormEnd = ({ display }) => {
  const [path, setPath] = useState();
  const [formData, setFormData] = useState({
    responsibleName: "",
    position: "",
    date: "",
  });

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    const storedData = JSON.parse(localStorage.getItem("@formsDate"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formsDate = () => {
    localStorage.setItem("@formsDate", JSON.stringify(formData));
  };

  return (
    <EndStyle className={display}>
      <Progress
        value="80"
        color="success"
        className="custom-progress-bar"
      />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Dados pessoais</small>
      </Alert>
      <div className="wrapper-form m-auto col-8">
        <h3 className="label-input">
          Etapa 5 - Concluir
        </h3>
        <div className="mt-5 col-12 formGap">
          <div>
            <p>Nome do responsável pelo preenchimento</p>
            <Input
              type="text"
              placeholder="Nome"
              name="responsibleName"
              value={formData.responsibleName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Cargo</p>
            <Input
              type="text"
              placeholder="Digite o cargo"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Data</p>
            <Input
              type="date"
              placeholder="Data"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </EndStyle>
  );
};

export default FormEnd;
