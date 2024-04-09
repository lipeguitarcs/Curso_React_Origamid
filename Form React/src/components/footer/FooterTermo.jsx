import React, { useState } from "react";
import {FooterTermoStyle} from "../footer/footerStyle"
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const FooterTermo = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    if (!checked) {
      console.log("O botão está desabilitado. Não é possível continuar.");
    } else {
      console.log("Botão clicado");
      // Adicione aqui o código que você deseja executar quando o botão for clicado
    }
  };

  return (
    <FooterTermoStyle>
      <div className="tos-checkbox">
        <input id="termos" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <label htmlFor="termos"> Eu concordo com os termos de uso</label>
      </div>
      {checked ? (
        <Link className={"col-11 btn-mobile-two"} to={"/simulacao/1"} replace>
          <Button className={"col-11 btn-custom-principal"} onClick={handleClick} disabled={!checked}>
            Continuar
          </Button>
        </Link>
      ) : (
        <div className={"col-11 btn-mobile-two"}>
          <Button className={"col-11 btn-custom-principal"} onClick={handleClick} disabled={!checked}>
            Continuar
          </Button>
        </div>
      )}
    </FooterTermoStyle>
  );
};

export default FooterTermo;
