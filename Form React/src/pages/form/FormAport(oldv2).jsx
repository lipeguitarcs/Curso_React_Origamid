import React, { useEffect, useState } from "react";
import { AportStyle } from "./formsStyle";
import { Button, Alert, Progress, Input } from "reactstrap";
import ArrowLeft from "../../components/assets/left-arrow.png";
import Footer from "../../components/footer/Footer";
import { Active } from "../../components/status/statusActive";
import { Link } from "react-router-dom";

const FormAport = ({ display }) => {
  const [path, setPath] = useState();
  //
  const [readjustmentDate, setReadjustmentDate] = useState("");
  //
  const [selectedAport, setSelectedAport] = useState("");
  const [selectedCopay, setSelectedCopay] = useState("");
  const [selectedPlanForAllHolders, setSelectedPlanForAllHolders] = useState("");

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    // const storage = JSON.parse(localStorage.getItem("@formsDate"));
    // if (storage !== null) {
    //   setSelectedAport(storage.aport || "");
    //   setSelectedCopay(storage.copay || "");
    //   setSelectedPlanForAllHolders(storage.planForAllHolders || "");
    // }
  }, []);

  //
  const handleReadjustmentDate = (date) => {
    setReadjustmentDate(date);
  }
  //

  const handleAport = (aport) => {
    setSelectedAport(aport);
    // updateLocalStorage({ aport });
  };

  const handleCopay = (value) => {
    setSelectedCopay(value);
    // updateLocalStorage({ copay: value });
  };

  const handlePlanForAllHolders = (value) => {
    setSelectedPlanForAllHolders(value);
    // updateLocalStorage({ planForAllHolders: value });
  };

  // const updateLocalStorage = (data) => {
  //   localStorage.setItem("@formsDate", JSON.stringify({ ...JSON.parse(localStorage.getItem("@formsDate")), ...data }));
  // };

  return (
    <AportStyle className={display}>
      <Progress value="40" color="success" className="custom-progress-bar" />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Concluir</small>
      </Alert>
      <div>
        <h3 className="label-input">Preencha essas informações adicionais</h3>
      </div>
      <div className="wrapper-form m-auto col-8">
        <div>
          <p>Data de Reajuste</p>
          <Input
            type="date"
            value={readjustmentDate}
            onChange={() => handleReadjustmentDate(readjustmentDate)}
          />
        </div>
        <div className="d-flex mt-5 col-12 flexOptions">
          <p>Empresa paga:</p>
          {selectedAport !== undefined && (
            <>
              <Button 
                className={`btn-man col-12 ${selectedAport === "100% p/Titular e Dependente" ? "active" : ""}`}
                onClick={() => handleAport("100% p/Titular e Dependente")}>

                100% p/Titular e Dependente

              </Button>
              <Button 
                className={`btn-woman col-12 ${selectedAport === "100% somente titular" ? "active" : ""}`} 
                onClick={() => handleAport("100% somente titular")}>
                  
                100% somente titular
                
              </Button>
              <Button 
                className={`btn-woman col-12 ${selectedAport === "Parcial %" ? "active" : ""}`} 
                onClick={() => handleAport("Parcial %")}>
                  
                Parcial %

              </Button>
            </>
          )}
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui coparticipação atualmente?</p>
          {selectedCopay !== undefined && (
            <>
              <Button 
                className={`btnBig-yes col-12 ${selectedCopay === "Sim" ? "active" : ""}`} 
                onClick={() => handleCopay("Sim")}>
                  
                Sim
                  
              </Button>
              <Button 
                className={`btn-no col-12 ${selectedCopay === "Não" ? "active" : ""}`} 
                onClick={() => handleCopay("Não")}>
                
                Não
                
              </Button>
            </>
          )}
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>O plano atual é para todos titulares?</p>
          {selectedPlanForAllHolders !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${selectedPlanForAllHolders === "Sim" ? "active" : ""}`} 
                onClick={() => handlePlanForAllHolders("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${selectedPlanForAllHolders === "Não" ? "active" : ""}`} 
                onClick={() => handlePlanForAllHolders("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </AportStyle>
  );
};

export default FormAport;
