import React, { useState, useEffect } from "react";
import { SmokeStyle } from "./formsStyle";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Progress,
  Alert,
} from "reactstrap";
import ArrowLeft from "../../components/assets/left-arrow.png";
import FooterFirst from "../../components/footer/FooterFirst";
import { Link } from "react-router-dom";

const FormSmoke = ({ display }) => {
  const [path, setPath] = React.useState();
  const [modal, setModal] = React.useState(false);
  const [formSmoke, setFormSmoke] = useState("");

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));

    let storage = JSON.parse(localStorage.getItem("@formsDate"));
    if(storage != null){
      if(storage.smoke === undefined){
        document.querySelectorAll("button")[0].classList.remove("active");
        document.querySelectorAll("button")[1].classList.remove("active");
      }else{
        if (storage.smoke === "Sim") {
          document.querySelectorAll("button")[0].classList.add("active");
          document.querySelectorAll("button")[1].classList.remove("active");
        } else {
          document.querySelectorAll("button")[1].classList.add("active");
          document.querySelectorAll("button")[0].classList.remove("active");
        }
      }
    }
    
  });
  const toggleModal = () => {
    modal === false ? setModal(true) : setModal(false);
  };

  const formsDate = (smoke) => {
    localStorage.setItem(
      "@formsDate",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("@formsDate")),
        smoke: smoke,
      })
    );
  };
  var paths;
  const addPath = () => {
    paths = parseInt(window.location.pathname.replace(/\D/g, ""));
    paths++;

    return paths > 6 ? 6 : paths;
  };
  const [next, setNext] = useState(addPath());

  const handleSmokeYes = (Smoke) => {
    Smoke = document.querySelectorAll("button")[0].getAttribute("data-smoke");
    formsDate(Smoke);
    setFormSmoke(Smoke);
  };

  const handleSmokeNo = (Smoke) => {
    Smoke = document.querySelectorAll("button")[1].getAttribute("data-smoke");
    formsDate(Smoke);
    setFormSmoke(Smoke);
  };

  return (
    <SmokeStyle className={display}>
      <Progress value="49.8" color="success" className="custom-progress-bar" />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Dados pessoais</small>
      </Alert>
      <div className="wrapper-form m-auto col-8">
        <h3 className="label-input">
          Também precisamos saber se você fumou produtos com nicotina nos
          últimos 24 meses.
        </h3>
        <p className="gener-label mt-4" onClick={toggleModal}>
          Por que essa pergunta?
        </p>
        <div className="d-flex mt-5 col-12">
          <Link
            className={" col-6 btn-mobile-two"}
            to={"/simulacao/" + next}
            replace
          >
            <Button
              className="btn-man col-12"
              data-smoke="Sim"
              onClick={handleSmokeYes}
            >
              Sim
            </Button>
          </Link>
          <Link
            className={" col-6 btn-mobile-two"}
            to={"/simulacao/" + next}
            replace
          >
            <Button
              className="btn-woman col-12"
              data-smoke="Nao"
              onClick={handleSmokeNo}
            >
              Não
            </Button>
          </Link>
        </div>
      </div>
      <FooterFirst />
      <Modal isOpen={modal} onClick={toggleModal} id="modal-gener">
        <ModalHeader onClick={toggleModal}>O que significa isso?</ModalHeader>
        <ModalBody onClick={toggleModal}>
          Consumir regularmente produtos que contenham tabaco, tais como,
          cigarrros, cachimbo, fumo de palha e etc...
        </ModalBody>
      </Modal>
    </SmokeStyle>
  );
};

export default FormSmoke;
