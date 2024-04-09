import React, { useEffect, useState } from "react";
import { MassStyle } from "./formsStyle";
import { Button, Alert, Progress } from "reactstrap";
import Footer from "../../components/footer/Footer";

const FormMass = ({ display }) => {
  const [path, setPath] = useState();
  const [hasInactives, setHasInactives] = useState("");
  const [hasAbsentees, setHasAbsentees] = useState("");
  const [hasLongTermInterned, setHasLongTermInterned] = useState("");
  const [hasSpecialChildren, setHasSpecialChildren] = useState("");
  const [hasPregnantWomen, setHasPregnantWomen] = useState("");
  const [hasHighCostTreatment, setHasHighCostTreatment] = useState("");
  const [hasSurgeryInProgress, setHasSurgeryInProgress] = useState("");

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    let storage = JSON.parse(localStorage.getItem("@formsDate"));
    if (storage !== null) {
      setHasInactives(storage.hasInactives || "");
      setHasAbsentees(storage.hasAbsentees || "");
      setHasLongTermInterned(storage.hasLongTermInterned || "");
      setHasSpecialChildren(storage.hasSpecialChildren || "");
      setHasPregnantWomen(storage.hasPregnantWomen || "");
      setHasHighCostTreatment(storage.hasHighCostTreatment || "");
      setHasSurgeryInProgress(storage.hasSurgeryInProgress || "");
    }
  }, []);

  const handleOption = (option, setter) => {
    setter(option);
    // updateLocalStorage({ [setter.name]: option });
  };

  // const updateLocalStorage = (data) => {
  //   localStorage.setItem("@formsDate", JSON.stringify({ ...JSON.parse(localStorage.getItem("@formsDate")), ...data }));
  // };

  return (
    <MassStyle className={display}>
      <Progress value="60" color="success" className="custom-progress-bar" />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Dados pessoais</small>
      </Alert>
      <div className="wrapper-form m-auto col-8">
        <h3 className="label-input">Etapa 4 - E qual é a sua renda mensal?</h3>
        <div className="d-flex mt-5 col-12 flexOptions">
          <p>Possui inativos?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasInactives === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasInactives)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasInactives === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasInactives)}>Não</Button>
          </div>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui afastados?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasAbsentees === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasAbsentees)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasAbsentees === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasAbsentees)}>Não</Button>
          </div>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Há internados de longa permanência?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasLongTermInterned === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasLongTermInterned)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasLongTermInterned === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasLongTermInterned)}>Não</Button>
          </div>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Existem filhos especiais?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasSpecialChildren === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasSpecialChildren)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasSpecialChildren === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasSpecialChildren)}>Não</Button>
          </div>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Existem gestantes?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasPregnantWomen === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasPregnantWomen)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasPregnantWomen === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasPregnantWomen)}>Não</Button>
          </div>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Existem casos crônicos, tratamento de alto custo, tratamento oncológico ou home care?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasHighCostTreatment === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasHighCostTreatment)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasHighCostTreatment === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasHighCostTreatment)}>Não</Button>
          </div>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Existe casos de indicação de cirurgias em andamento?</p>
          <div>
            <Button className={`btn-yes col-12 ${hasSurgeryInProgress === "Sim" ? "active" : ""}`} onClick={() => handleOption("Sim", setHasSurgeryInProgress)}>Sim</Button>
            <Button className={`btn-no col-12 ${hasSurgeryInProgress === "Não" ? "active" : ""}`} onClick={() => handleOption("Não", setHasSurgeryInProgress)}>Não</Button>
          </div>
        </div>
      </div>
      <Footer />
    </MassStyle>
  );
};

export default FormMass;
