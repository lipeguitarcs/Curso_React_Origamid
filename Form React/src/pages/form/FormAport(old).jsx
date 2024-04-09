import React, { useEffect, useState } from "react";
import { AportStyle } from "./formsStyle";
import { Button, Alert, Progress } from "reactstrap";
import ArrowLeft from "../../components/assets/left-arrow.png";
import FooterFirst from "../../components/footer/FooterFirst";
import { Active } from "../../components/status/statusActive";
import { Link } from "react-router-dom";

const FormAport = ({ display }) => {
  const [modal, setModal] = useState(false);
  const [path, setPath] = useState();
  const [selectedAport, setSelectedAport] = useState("");
  const [selectedCopay, setSelectedCopay] = useState("");
  const [selectedPlanForAllHolders, setSelectedPlanForAllHolders] = useState("");

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    let storage = JSON.parse(localStorage.getItem("@formsDate"));
    if (storage !== null) {
      setSelectedAport(storage.aport || "");
      setSelectedCopay(storage.copay || "");
      setSelectedPlanForAllHolders(storage.planForAllHolders || "");
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAport = (aport) => {
    setSelectedAport(aport);
    localStorage.setItem("@formsDate", JSON.stringify({ ...JSON.parse(localStorage.getItem("@formsDate")), aport }));
    Active();
  };

  const handleCopay = (value) => {
    setSelectedCopay(value);
    localStorage.setItem("@formsDate", JSON.stringify({ ...JSON.parse(localStorage.getItem("@formsDate")), copay: value }));
    Active();
  };

  const handlePlanForAllHolders = (value) => {
    setSelectedPlanForAllHolders(value);
    localStorage.setItem("@formsDate", JSON.stringify({ ...JSON.parse(localStorage.getItem("@formsDate")), planForAllHolders: value }));
    Active();
  };

  return (
    <AportStyle className={display}>
      <Progress
        value="83"
        color="success"
        className="custom-progress-bar"
      />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Concluir</small>
      </Alert>
      <div className="wrapper-form m-auto col-8">
        <div>
          <h3 className="label-input">Etapa 3 - Política de Benefícios</h3>
        </div>
        <div className="d-flex mt-5 col-12 flexOptions">
          <p>Empresa paga:</p>
          <Button
            className={`btn-man col-12 ${selectedAport === "100% p/Titular e Dependente" ? "active" : ""}`}
            onClick={() => handleAport("100% p/Titular e Dependente")}
          >
            100% p/Titular e Dependente
          </Button>
          <Button
            className={`btn-woman col-12 ${selectedAport === "100% somente titular" ? "active" : ""}`}
            onClick={() => handleAport("100% somente titular")}
          >
            100% somente titular
          </Button>
          <Button
            className={`btn-woman col-12 ${selectedAport === "Parcial %" ? "active" : ""}`}
            onClick={() => handleAport("Parcial %")}
          >
            Parcial %
          </Button>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui coparticipação atualmente?</p>
          <Button
            className={`btnBig-yes col-12 ${selectedCopay === "Sim" ? "active" : ""}`}
            onClick={() => handleCopay("Sim")}
          >
            Sim
          </Button>
          <Button
            className={`btn-no col-12 ${selectedCopay === "Não" ? "active" : ""}`}
            onClick={() => handleCopay("Não")}
          >
            Não
          </Button>
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>O plano atual é para todos titulares?</p>
          <Button
            className={`btn-yes col-12 ${selectedPlanForAllHolders === "Sim" ? "active" : ""}`}
            onClick={() => handlePlanForAllHolders("Sim")}
          >
            Sim
          </Button>
          <Button
            className={`btn-no col-12 ${selectedPlanForAllHolders === "Não" ? "active" : ""}`}
            onClick={() => handlePlanForAllHolders("Não")}
          >
            Não
          </Button>
        </div>
      </div>
      <FooterFirst />
    </AportStyle>
  );
};

export default FormAport;