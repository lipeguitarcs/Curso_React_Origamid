import React, { useEffect, useState } from "react";
import ArrowLeft from "../../components/assets/left-arrow.png";
import { FooterStyle } from "./footerStyle.jsx";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Active } from "../../components/status/statusActive";

const Footer = () => {
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

  // useEffect (() => {
  //   if (pathNumber === 1 || pathNumber === 5) {
  //     const storage = JSON.parse(localStorage.getItem("@formsDate"));
  //     if (storage && storage.birthDay.replace(/\D/g, "").length === 8) {
  //       setValidatorBorn("auto");
  //     } else {
  //       setValidatorBorn("none");
  //     }
  //   } else if (pathNumber === 3) {
  //     const storage = JSON.parse(localStorage.getItem("@formsDate"));
  //     if (storage && storage.validatorBody === true) {
  //       setValidatorBorn("auto");
  //     } else {
  //       setValidatorBorn("none");
  //     }
  //   }
  // }, [pathNumber, localStorage.getItem("@formsDate")]);

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
// 
  // )

  return (
    <FooterStyle className="d-flex col-9 m-auto btn-group">
      <Link className="col-1 btn-mobile-one" to={"/simulacao/" + previous} replace>
        <Button className="col-12 btn-custom-back">Voltar</Button>
      </Link>
      {/* style={{ pointerEvents: validatorBorn }} */}
      <Link className={"col-11 btn-mobile-two"} to={"/simulacao/" + next} replace>
      {/* onClick={requiredInputs} */}
        <Button className={"col-11 btn-custom-principal"}>Continuar</Button>
      </Link>
    </FooterStyle>
  );
};

export default Footer;