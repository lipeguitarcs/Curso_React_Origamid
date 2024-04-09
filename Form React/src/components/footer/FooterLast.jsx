import React, { useEffect, useState } from "react";
import ArrowLeft from "../../components/assets/left-arrow.png";
import { FooterLastStyle } from "./footerStyle.jsx";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Active } from "../../components/status/statusActive";
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const FooterLast = () => {
  const [validatorBorn, setValidatorBorn] = useState("none");

  const addPath = () => {
    const path = parseInt(window.location.pathname.replace(/\D/g, ""));
    return Math.min(path + 1, 6);
  };

  const removePath = () => {
    const path = parseInt(window.location.pathname.replace(/\D/g, ""));
    return Math.max(path - 1, 1);
  };

  const [next, setNext] = useState(addPath());
  const [previous, setPrevious] = useState(removePath());
  const [pathNumber, setPathNumber] = useState(
    parseInt(window.location.pathname.replace(/\D/g, ""))
  );

  useEffect(() => {
    if (pathNumber === 1 || pathNumber === 5) {
      const storage = JSON.parse(localStorage.getItem("@formsDate"));
      if (storage && storage.birthDay.replace(/\D/g, "").length === 8) {
        setValidatorBorn("auto");
      } else {
        setValidatorBorn("none");
      }
    } else if (pathNumber === 3) {
      const storage = JSON.parse(localStorage.getItem("@formsDate"));
      if (storage && storage.validatorBody === true) {
        setValidatorBorn("auto");
      } else {
        setValidatorBorn("none");
      }
    }
  }, [pathNumber, localStorage.getItem("@formsDate")]);

  // function requiredInputs() {
  //   let dateInput;

  //   if (pathNumber === 2) {
  //     dateInput = document.getElementsByClassName("mask-input")[0].value;
  //     localStorage.setItem("@formsDate", JSON.stringify({
  //       ...JSON.parse(localStorage.getItem("@formsDate")),
  //       birthDay: dateInput
  //     }));

  //     const number = dateInput.replace(/[^0-9]/g, "");
  //     if (number.length < 8) {
  //       localStorage.setItem("@error", "Sua data de nascimento é utilizada para calcular seu seguro");
  //     }
  //   }

  //   if (pathNumber === 3) {
  //     localStorage.setItem("@formsDate", JSON.stringify({
  //       ...JSON.parse(localStorage.getItem("@formsDate")),
  //       height: document.getElementById("height").value,
  //       weight: document.getElementById("weight").value,
  //     }));
  //   }

  //   if (pathNumber === 4) {
  //     localStorage.setItem("@formsDate", JSON.stringify({
  //       ...JSON.parse(localStorage.getItem("@formsDate")),
  //       height: document.getElementById("height").value,
  //       weight: document.getElementById("weight").value,
  //     }));
  //   }

  function sendEmail(infoEmpresa) {

    const userID = process.env.REACT_APP_USER_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
      
        emailjs.send(
          serviceID,
          templateID,
          infoEmpresa,
          userID,
        )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
    }

  useEffect (() => {

    if (pathNumber === 6) {
      const formData = JSON.parse(localStorage.getItem('@formsData'));
      const aportData = JSON.parse(localStorage.getItem('@aportData'));
      const ageData = JSON.parse(localStorage.getItem('@ageData'));

      const infoEmpresa = {
        dados: formData,
        aport: aportData,
        age: ageData,
      }

      sendEmail(infoEmpresa);
      };

      localStorage.clear();
    }


  )

  return (
    <FooterLastStyle className="d-flex col-9 m-auto btn-group">
      <Link className="col-1 btn-mobile-one" to={"/simulacao/termos"}>
        <Button className="col-12 btn-custom-back">Voltar ao início</Button>
      </Link>
      {/* style={{ pointerEvents: validatorBorn }} */}
    </FooterLastStyle>
  );
};

export default FooterLast;