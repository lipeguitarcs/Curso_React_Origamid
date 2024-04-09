import React, { useEffect, useState } from "react";
import ArrowLeft from "../../components/assets/left-arrow.png";
import { FooterFirstStyle } from "./footerStyle.js";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Active } from "../../components/status/statusActive";

const FooterFirst = () => {
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
      const storage = JSON.parse(localStorage.getItem("@formsData"));
      if (
        storage &&
        storage.company &&
        storage.cnpj.replace(/\D/g, "").length === 14 && // CNPJ deve ter 14 dígitos
        storage.phone &&
        storage.contact &&
        storage.email &&
        /^\S+@\S+\.\S+$/.test(storage.email) // Verifica se o email está em um formato válido
      ) {
        setValidatorBorn("auto");
      } else {
        setValidatorBorn("none");
      }
    // } else if (pathNumber === 3) {
    //   const storage = JSON.parse(localStorage.getItem("@formsData"));
    //   if (storage && storage.validatorBody === true) {
    //     setValidatorBorn("auto");
    //   } else {
    //     setValidatorBorn("none");
    //   }
    }
  }, [pathNumber, localStorage.getItem("@formsData")]);

  return (
    <FooterFirstStyle className="d-flex col-9 m-auto btn-group">
      {/* style={{ pointerEvents: validatorBorn }} */}
      <Link className={"col-11 btn-mobile-two"} to={"/simulacao/" + next} replace>
      {/* onClick={requiredInputs} */}
        <Button className={"col-11 btn-custom-principal"} disabled={validatorBorn === "none"}>Continuar</Button>
      </Link>
    </FooterFirstStyle>
  );
};

export default FooterFirst;