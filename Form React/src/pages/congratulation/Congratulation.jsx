import React from "react";
import { CongrateStyle } from "./congrateStyle";
import Congrate from "../../components/assets/congrate.svg";
import FooterLast from "../../components/footer/FooterLast";
import Confetti from 'react-confetti';
import Palmas from "../../components/assets/palmas-1.webp"

const Congratulation = ({display}) => {


  return (
    <CongrateStyle className={display}>
       {/* <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      style={{flex:1, position: "absolute", top:0}}
       /> */}
      <div className="congrate-content m-auto">
        <div className="d-flex justify-content-center">
     
          <h1 className="title-congrate">Recebemos seus dados! 
          Logo um especialista irá entrar em contato.</h1>
        </div>

        <div className="clap">
          <img src={Palmas} alt="" />
        </div>
      </div>
      <FooterLast />
    </CongrateStyle>
  );
};

export default Congratulation;