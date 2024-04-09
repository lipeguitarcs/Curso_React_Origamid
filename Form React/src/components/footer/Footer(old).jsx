import React, { useState, useEffect } from "react";
import ArrowLeft from "../../components/assets/left-arrow.png";
import { FooterStyle } from "./footerStyle.js";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Footer = () => {
  const [path, setPath] = useState(
    parseInt(window.location.pathname.replace(/\D/g, ""))
  );
  const [inputBirthDay, setBirthDay] = useState("");
  const [inputGener, setGener] = useState("");
  const [inputMensalValue, setMensalValue] = useState("");
  const [display, setDisplay] = useState("");

  function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario && mes_atual === mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
  }

  useEffect(() => {
    if (path === 1) {
      let finalValue = document.getElementById("range-value").outerText;
      let text = inputBirthDay;

      const myArray = text.split("/");
    
      let dia = myArray[0];
      let mes = myArray[1];
      let ano = myArray[2];
    
      
    
      if (inputGener === "Masculino" && idade(ano, mes, dia) >= 16 && idade(ano, mes, dia) <= 30) {   
        finalValue = finalValue / 10 * 5.16;
      } 
      else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 31 && idade(ano, mes, dia) <= 35) {
        finalValue = finalValue / 10 * 5.456;
      } 
      else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 36 && idade(ano, mes, dia) <= 40) {
        finalValue = finalValue / 10 * 6.66;
      } 
      else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 41 && idade(ano, mes, dia) <= 45) {
        finalValue = finalValue / 10 * 8.6;
      }
      else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 46 && idade(ano, mes, dia) <= 50) {
        finalValue = finalValue / 10 * 11.80;
      }
      else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 51 && idade(ano, mes, dia) <= 55) {
        finalValue = finalValue / 10 * 16.773;
      }
      else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 56 && idade(ano, mes, dia) <= 60) {
        finalValue = finalValue / 10 * 24.73;
      }

      setMensalValue(finalValue);

      localStorage.setItem(
        "@mensalValue",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("@mensalValue")),
          mensalValue: finalValue,
        })
      );

      let formsDate = JSON.parse(localStorage.getItem("@mensalValue"));
      if(formsDate != null){
        setMensalValue(formsDate.mensalValue);
      }

      document.getElementById("valorEstimado").innerHTML = "R$ " + Number(inputMensalValue).toFixed(2).replace('.', ',') + " mensais";

    }

    if (path === 2) {
      setDisplay("d-none");

      let formsDate = JSON.parse(localStorage.getItem("@mensalValue"));
      if(formsDate != null){
        setMensalValue(formsDate.mensalValue);
      }

      document.getElementById("valorEstimado").innerHTML = "R$ " + Number(inputMensalValue).toFixed(2).replace('.', ',') + " mensais";

    }

    let formsDate = JSON.parse(localStorage.getItem("@formsDate"));
    if(formsDate != null){
      setBirthDay(formsDate.birthDay);
      setGener(formsDate.gener);
    }
  });




  return (    
    <FooterStyle className="d-flex col-9 m-auto btn-group">
      <div className="col-2 align-items-center align-self-center align-btn">
        <p>Valor estimado:</p>
        <p id="valorEstimado"></p>
      </div>
      <div className="d-flex col-6 margin-btn">
        <Link className="col-2 align-self-center" to={"/resumo/" + 1} replace>
          <Button className="col-12 btn-custom-back">
            <img
              src={ArrowLeft}
              alt="seta para esquerda"
              height="40px"
              width="32px"
            />
          </Button>
        </Link>
        <Link className="col-10 align-self-center" to={"/resumo/" + 2} replace>
          <Button className={display + " col-12 btn-custom-principal"}>
            Continuar
          </Button>
        </Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;
