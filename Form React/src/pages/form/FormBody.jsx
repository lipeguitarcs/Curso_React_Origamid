import React, { useEffect } from "react";
import { BodyStyle } from "./formsStyle";
import { Input, Progress, Alert } from "reactstrap";
import FooterFirst from "../../components/footer/FooterFirst";

const FormBody = ({ display }) => {
  const [path, setPath] = React.useState();
  const [validatorBody, setValidatorBody] = React.useState('d-none');
  const [validatorWeight, setValidatorWeight] = React.useState('d-none');

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));

    let storage = JSON.parse(localStorage.getItem("@formsDate"));
    if (storage !== null) {
      if (storage.weight !== null && storage.weight !== undefined ) {
        document.querySelectorAll("input")[1].value = storage.weight;
      }
      if (storage.height !== null && storage.height !== undefined) {
        document.querySelectorAll("input")[0].value = storage.height;
      }
    }
  },[]);
  useEffect(() => {
    if(validatorBody === 'd-none' && validatorWeight === 'd-none'){
      localStorage.setItem(
        "@formsDate",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("@formsDate")),
          validatorBody: true,
        })
      );
    }else{
      localStorage.setItem(
        "@formsDate",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("@formsDate")),
          validatorBody:false,
        })
      );
    }
  },[validatorBody, validatorWeight]);

  const changeInput = () => {
    document.getElementById("height").value = document
      .getElementById("height")
      .value.replace(/[^0-9]{1}/g, "");
    document.getElementById("height").value = document
      .getElementById("height")
      .value.replace(/(\d+)(\d{2})/, "$1.$2");
      if(document.getElementById("height").value.length === 4){
        setValidatorBody('d-none')
      }else{
        setValidatorBody('d-block')
      }
  };
  const changeInputWeight = (e) => {
    if(e.target.value.length > 1){
      setValidatorWeight('d-none')
    }else{
      setValidatorWeight('d-block')
    }
  }

  return (
    <BodyStyle className={display}>
      <Progress value="33.2" color="success" className="custom-progress-bar" />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Dados pessoais</small>
      </Alert>
      <div className="wrapper-form m-auto col-8">
        <h2 className="label-input">
          Legal! Agora, quanto você tem de altura e qual é o seu peso.
        </h2>
        <div>
          <small className="small-label">Altura</small>
          <div className="input-group mb-1">
            <Input
              id="height"
              maxLength="3"
              placeholder="Em metros"
              required
              onChange={changeInput}
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                m
              </span>
            </div>
          </div>
          <small className={validatorBody} style={{ color: "red" }}>
          Sua altura é utilizada para calcular seu seguro.
        </small>
        </div>
        <div>
          <small className="small-label">Peso</small>
          <div className="input-group mb-1">
            <Input maxlength="3"  onChange={(e) => changeInputWeight(e)} placeholder="Em Kg" id="weight" />
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Kg
              </span>
            </div>
          </div>
          <small className={validatorWeight} style={{ color: "red" }}>
          Seu peso é utilizado para calcular seu seguro.
        </small>
        </div>
      </div>
      <FooterFirst />
    </BodyStyle>
  );
};

export default FormBody;
