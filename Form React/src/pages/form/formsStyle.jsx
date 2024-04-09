import styled from "styled-components";

export const BornStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;
  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  p {
    font-family: "Montserrat";
  }

  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }

  .group-input {
    position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .icon-baby {
      max-width: 50px;
      min-height: 40px;
      height: 48px;
      min-width: 50px;
      border-radius: 50%;
      border-color: white !important;
      background-color: white;
    }

    .baby-img {
      margin: 4px;
    }

    input.mask-input {
      color: var(--color-gray);
      border-right: none;
      border-top: none;
      border-left: none;
      font-size: 1rem;
      font-family: "Montserrat";
      background-color: var(--bg-white) !important;
      outline: none;
      width: 100%;
      height: 50px;
      box-shadow: none;
      border-bottom: 1px solid var(--bg-gray);
      padding-top: 20px;
    }

    .label-input {
      font-weight: bold;
      font-size: 1.7rem;
      font-family: "Montserrat";
      align-self: start !important;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
    }
  }

  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }
    .group-input {
      position: relative;
      top: 3%;
    }
    .label-input {
      font-size: 1.3rem !important;
    }
  }

  .form-control {
    border: none;
    border-bottom: 1px solid #ced4da;
    background-color: var(--bg-white) !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
`;

export const GenerStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;

  p {
    font-family: "Montserrat";
  }

  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }
  .wrapper-form {
    position: relative;
    top: 45%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .choiceGap {
      gap: 18px;
    }

    .bigChoiceGap {
      gap: 118px;
    }

    .formGap {
      display: flex;
      flex-direction: column;
      gap: 30px;

      p {
        margin: 0;
        display: flex;
        align-items: center;
      }
    }

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
    }

    .label-input {
      font-weight: bold;
      font-size: 1.928rem;
      font-family: "Montserrat";
      align-self: start !important;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
    }
    .btn-man,
    .btn-woman {
      padding: 30px 0;
      background-color: white;
      color: var(--bg-black);
      font-weight: 600;
      font-size: 1rem;
      font-family: "Montserrat";
      align-self: end !important;
      border-radius: 10px;
      border: 1px solid transparent;
      box-shadow: none;
    }
    .active {
      border-color: var(--yellow-pride) !important;
      background-color: var(--yellow-pride) !important;
      color: var(--bg-white) !important;
    }
    .btn-woman {
      margin-left: 10px;
    }
    .form-control {
      border: none;
      border-bottom: 1px solid #ced4da;
      background-color: var(--bg_white);
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .btn-man:hover,
    .btn-woman:hover {
      border: 1px solid var(--bg-black);
    }

    .btn-plan {
      border-radius: 26px;
      height: fit-content;
      width: 80px;
      background-color: transparent;
      color: black;
    }

    .btnBig-plan {
      border-radius: 26px;
      height: fit-content;
      width: 80px;
      background-color: transparent;
      color: black;
      margin-left: 12px;
    }

    .btn-wrapper {
      display: flex;
      gap: 10px;
    }
  }
  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      font-size: 1.3rem !important;
    }
    .wrapper-form {
      position: relative;
      top: -3%;
    }
    
      .dmdRuO {
        position: relative;
        padding-top: 71px;
      }
  }
`;

export const BodyStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;
  p {
    font-family: "Montserrat";
  }

  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }

  .wrapper-form {
    position: relative;
    top: 270px;

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
    }

    .label-input {
      font-weight: bold;
      font-size: 2.1rem;
      font-family: "Montserrat";
      align-self: end !important;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      margin-bottom: 30px !important;
    }
    .small-label {
      font-size: 0.9rem;
      color: var(--color-gray);
    }
    .active {
      border-color: var(--yellow-pride) !important;
      background-color: var(--yellow-pride) !important;
      color: var(--bg-white) !important;
    }

    input.form-control,
    .input-group-text,
    .input-group-prepend {
      background-color: transparent;
      border-right: none;
      border-top: none;
      border-left: none;

      &:focus {
        box-shadow: 0px 1px 0px var(--bg-green);
      }
    }
  }
  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      font-size: 1.3rem !important;
    }
    .wrapper-form {
      position: relative;
      top: 150px;
    }
  }
`;

export const SmokeStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;

  p {
    font-family: "Montserrat";
  }

  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }

  .wrapper-form {
    /* max-width: 570px; */
    position: relative;
    top: 250px;

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
    }

    .label-input {
      font-weight: bold;
      font-size: 1.928rem;
      font-family: "Montserrat";
      align-self: end !important;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
    }
    .btn-man,
    .btn-woman {
      padding: 30px 0;
      background-color: white;
      color: var(--bg-black);
      font-weight: 600;
      font-size: 1rem;
      font-family: "Montserrat";
      align-self: end !important;
      border-radius: 10px;
      border: 1px solid transparent;
      box-shadow: none;
    }
    .active {
      border-color: var(--yellow-pride) !important;
      background-color: var(--yellow-pride) !important;
      color: var(--bg-white) !important;
    }
    .btn-woman {
      margin-left: 10px;
    }

    .btn-man:hover,
    .btn-woman:hover {
      border: 1px solid var(--bg-black);
    }
  }
  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      font-size: 1.3rem !important;
    }
    .wrapper-form {
      position: relative;
      top: 150px;
    }
  }
`;

export const OccupationStyle = styled.section`
   height: 100%;
   width: 100%;
   background-color: var(--bg-white) !important;
   .custom-progress-bar {
     border-top-left-radius: 0px;
     border-bottom-left-radius: 0px;
     height: 5px;

     .progress-bar.bg-success {
       background-color: var(--bg-black) !important;
       border-top-right-radius: 10px;
       border-bottom-right-radius: 10px;
     }
   }

   p {
    font-family: "Montserrat";
  }

   .alert-mobile{
     display:none;
     background-color: #FFF;
     color: var(--bg-gray);
     border: none;
     border-radius: 10px;

     p{
       font-size: 1.1rem;
       font-family: "Montserrat";
       font-weight: 600;
       margin: 0;
     }
     small{
       color: var(--color-gray-sky);
     }
   }

   .group-input {
     position: relative;
     top: 300px;

     .label-suggest{
       margin-top:60px;
       font-weight: normal;
       font-size: 0.8rem;
       color: var(--color-gray-sky);
     }
     .react-autosuggest__input{
      font-family: "Montserrat";
      width: 100%;
      border-top: none;
      border-right: none;
      border-left: none;
      background-color: transparent;
      font-size: 18px;

      &:focus-visible {
        border-bottom: 1px solid var(--bg-green);
        box-shadow: 0px 1px 0px var(--bg-green);
        outline: 0;
      }
     }
     #react-autowhatever-1{
       li{
         width: 100%;
         list-style: none;
         padding-top: 5px;
         padding-bottom: 5px;
         font-size: 1rem;
         padding-left:0 ;

         &:hover{
            background-color: var(--bg-green-sky);
         }
       }
       ul{
          width: 100%;
         margin-top: 10px;
         max-height: 180px;
          overflow-y: auto;
          background-color: white;
       }        
     }

     .label-input {
       font-weight: bold;
       font-size: 2rem;
       font-family: "Montserrat";
       align-self: end !important;
       margin-bottom: 10px !important;
       margin-left: 0px;
       color: var(--bg-black);
     }
   }

   @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      font-size: 1.3rem !important;
    }
    .group-input {
      position: relative;
      top: 150px;
    }
  }
`;

export const AportStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;

  p {
    margin: 0 !important;
    font-family: "Montserrat";
  }

  .form-control:select {
    outline: none;
  }

  .flexOptions {
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0 0 !important;

    p {
      width: 490px;
    }
  }

  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }
  
  .aport-title__container {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }
  
  .aport-title {
    display: flex;
    justify-content: left;
    font-weight: 600;
    font-size: 22px;
    font-family: "Montserrat";
    align-self: center !important;
    margin-bottom: 30px !important;
    margin-left: 0px;
    margin-top: 10%;
    width: 80%;
  }

  .wrapper-form::-webkit-scrollbar {
    width: 8px; /* largura da barra de rolagem */
    position: relative;
    right: 5%;
  }
  
  .wrapper-form::-webkit-scrollbar-track {
    background-color: transparent !important; /* cor do fundo da barra de rolagem */
  }
  
  .wrapper-form::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: #BBB; /* cor da alça da barra de rolagem */
  }
  
  .wrapper-form::-webkit-scrollbar-thumb:hover {
    background: #555; /* cor da alça da barra de rolagem ao passar o mouse */
  }

  .wrapper-form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-height: 65%;
    width: 80%;
    overflow-y: auto;
    padding: 30px 30px 30px 0;

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
    }

    .btn-man,
    .btn-woman {
      background-color: var(--bg_white);
      color: var(--bg-black);
      font-weight: 600;
      font-size: .8em;
      font-family: "Montserrat";
      align-self: end !important;
      border-radius: 10px;
      border: 1px solid #6c757d;
      box-shadow: none;
      height: 30px;
      width: 200px !important;
    }
    .btn-man {
      margin-left: 30px;
      border-radius: 40px;
    }
    .btn-yes {
      height: 30px;
      width: 100px !important;
      padding: 0 !important;
      margin-left: 30px;
      border-radius: 40px;
      background-color: transparent;
      color: black;
    }
    .btnBig-yes {
      height: 30px;
      width: 100px !important;
      padding: 0 !important;
      margin-left: 38px;
      border-radius: 40px;
      background-color: transparent;
      color: black;
    }
    .btn-no {
      height: 30px;
      width: 100px !important;
      padding: 0 !important;
      margin-left: 10px;
      border-radius: 40px;
      background-color: transparent;
      color: black;
    }
    .active {
      border-color: var(--yellow-pride) !important;
      background-color: var(--yellow-pride) !important;
      color: var(--bg-white) !important;
    }
    .btn-woman {
      margin-left: 10px;
      border-radius: 40px;
      background-color: transparent;
      color: black;
    }

    .btn-man:hover,
    .btn-woman:hover {
      border: 1px solid var(--bg-black);
    }
  }
  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      font-size: 1.6rem !important;
    }
    .wrapper-form {
      position: relative;
      top: 70px;
    }
`;

  export const MassStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;

  p {
    margin: 0 !important;
    max-width: 45%;
    font-family: "Montserrat";
  }

  .flexOptions {
    justify-content: space-between;
    align-items: center;
  }

  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }

  .wrapper-form {
    position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
    }

    .label-input {
      font-weight: bold;
      font-size: 1.928rem;
      font-family: "Montserrat";
      align-self: start !important;
      text-align: center;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
    }
    .btn-man,
    .btn-woman {
      background-color: white;
      color: var(--bg-black);
      font-weight: 600;
      font-size: .8em;
      font-family: "Montserrat";
      align-self: end !important;
      border-radius: 10px;
      border: 1px solid transparent;
      box-shadow: none;
      height: 70px;
      width: 150px !important;
      background-color: transparent;
      color: black;
    }
    .btn-man {
      margin-left: 30px;
    }

    .btn-yes,
    .btn-no {
      background-color: transparent;
      color: black;
    }
    .btn-yes {
      height: 30px;
      width: 100px !important;
      padding: 0 !important;
      margin-left: 30px;
      border-radius: 18px;
    }
    .btnBig-yes {
      height: 30px;
      width: 100px !important;
      padding: 0 !important;
      margin-left: 38px;
    }
    .btn-no {
      height: 30px;
      width: 100px !important;
      padding: 0 !important;
      margin-left: 10px;
      border-radius: 18px;
    }
    .active {
      border-color: var(--yellow-pride) !important;
      background-color: var(--yellow-pride) !important;
      color: var(--bg-white) !important;
    }
    .btn-woman {
      margin-left: 10px;
    }

    .btn-man:hover,
    .btn-woman:hover {
      border: 1px solid var(--bg-black);
    }
  }
  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      font-size: 1.6rem !important;
    }
    .wrapper-form {
      position: relative;
      top: 70px;
    }
  }
`;

export const EndStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white) !important;

  .custom-progress-bar {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 5px;

    .progress-bar.bg-success {
      background-color: var(--bg-black) !important;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  p {
    font-family: "Montserrat";
  }
  
  .alert-mobile {
    display: none;
    background-color: #fff;
    color: var(--bg-gray);
    border: none;
    border-radius: 10px;

    p {
      font-size: 1.1rem;
      font-family: "Montserrat";
      font-weight: 600;
      margin: 0;
    }
    small {
      color: var(--color-gray-sky);
    }
  }
  .wrapper-form {
    /* max-width: 570px; */
    position: relative;
    top: 15%;
    display: flex;
    flex-direction: column;

    .choiceGap {
      gap: 18px;
    }

    .bigChoiceGap {
      gap: 118px;
    }

    .formGap {
      display: flex;
      flex-direction: column;
      gap: 60px;

      p {
        margin: 0;
        display: flex;
        align-items: center;
      }
    }

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
    }

    .label-input {
      font-weight: bold;
      font-size: 1.928rem;
      font-family: "Montserrat";
      align-self: start !important;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
    }
    .btn-man,
    .btn-woman {
      padding: 30px 0;
      background-color: white;
      color: var(--bg-black);
      font-weight: 600;
      font-size: 1rem;
      font-family: "Montserrat";
      align-self: end !important;
      border-radius: 10px;
      border: 1px solid transparent;
      box-shadow: none;
    }
    .active {
      border-color: var(--yellow-pride) !important;
      background-color: var(--yellow-pride) !important;
      color: var(--bg-white) !important;
    }
    .btn-woman {
      margin-left: 10px;
    }

    .btn-man:hover,
    .btn-woman:hover {
      border: 1px solid var(--bg-black);
    }

    .btn-plan {
      border-radius: 26px;
      height: fit-content;
      width: 55px;
    }

    .btn-wrapper {
      display: flex;
      gap: 10px;
    }
  }
  .form-control {
    border: none;
    border-bottom: 1px solid #ced4da;
    background-color: var(--bg-white) !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  @media (max-width: 768px) {
    .alert-mobile {
      display: block;
    }

    .label-input {
      display: none;
    }
    .wrapper-form {
      position: relative;
      top: -3%;
    }
    
      .dmdRuO {
        position: relative;
        padding-top: 71px;
      }
  }
`;

export const TermoStyle = styled.section`

  font-family: "Montserrat";

  .upperCase {
    text-transform: uppercase;
  }

  .column-information {
    background-color: var(--bg-white);
  }

  .tos-title {
    margin: 20px 0;
    font-size: 22px;
    font-weight: 600;
  }

  .tos-border {
    
    border: 1px solid #DDD;
    border-radius: 26px;
    box-shadow: 1px 3px 15px #AAA;
    display: flex;
    justify-content: center;
  }
  
  .tos-box {
    width: 97%;
    max-height: 70vh;
    padding: 25px;
    overflow: auto;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }

  .tos-box::-webkit-scrollbar {
    width: 8px; /* largura da barra de rolagem */
    position: relative;
    right: 5%;
  }
  
  .tos-box::-webkit-scrollbar-track {
    background: transparent; /* cor do fundo da barra de rolagem */
  }
  
  .tos-box::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: #BBB; /* cor da alça da barra de rolagem */
  }
  
  .tos-box::-webkit-scrollbar-thumb:hover {
    background: #555; /* cor da alça da barra de rolagem ao passar o mouse */
  }
  

  .tos-checkbox {
    margin: 20px;
    display: flex;
    gap: 10px;
  }
`;

export const UploadStyle = styled.section`

  background-color: var(--bg-white);
  height: 100vh;
  font-family: Montserrat;

  .upload-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 85%;
    width: 80%;
    margin: 0 auto;
  }

  .upload-title {
    font-size: 22px;
    text-align: center;
    margin-top: 5%;
  }

  .select-wrapper {
    align-self: center;
    margin  10px 0 20px;
    width: 80%;
    
    select {
      width: 100%;
      border: none;
      border-radius: 7px;
      box-shadow: 1px 1px 6px #AAA;
      text-align: center;
      height: 30px;
    }
  }

  .items-wrapper {
    width: 70%;
    margin: 0 auto;
  }

  .uploaded-items {
    display: flex;
    flex-wrap: wrap;
    gap 5px;
    width: 100%;

    button {
      font-size: 12px;
      text-align: left;
      display: inline-flex; /* Adicionamos inline-flex para manter os ícones e o texto no mesmo line box */
      align-items: center; /* Alinhar itens verticalmente */
      padding: 5px;
      border: none;
      background: none;

      .option-close {
        margin-left: 5px;
        color: red;
        cursor: pointer;
      }
    }
  }

  .uploader-wrapper {
    align-self: center;
    margin-top: 30px;
  }

  button {
    border: none;
  }

  .selected-files {
    width: 80%;
    margin: 0 auto;
  }

  .uploading-items {

    button {
      color: red;
    }
  }
`;

export const SpreadsheetStyle = styled.section`

  background-color: var(--bg-white);
  height: 100vh;
  font-family: Montserrat;

  .spreadsheet-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
    
    .bold {
      font-weight: 700;
    }

    .show-border {
      outline: 2px solid black;
      border-radius: 7px;
      opacity: 1;
    }
    
    .show-border.show {
      opacity: 1;
      transition: opacity 1s ease;
    }

    .excel-icon {
      width: 167px;
      height: 167px;
    }
    
    .spreadsheet-title {
      text-align: center;
    }

    .question-wrapper {
      max-width: 250px;
      height: 120px;
      text-align: center;
      padding: 5px;

      .question {
        cursor: pointer;
        user-select: none;
      }

      .question-hidden {
        opacity: 0;
        user-select: none;
      }
      
      .question-hidden.show {
        opacity: 1;
        transition: opacity 1s ease;
      }
      
    }
    
    .btn-wrapper {
      display: flex;
      gap: 40px;

      a {
        height: 30px;
        width: 100px !important;
        padding: 4px 35px;
        border-radius: 18px;
        border: 1px solid black;
        font-weight: 600;
        text-decoration: none;
        color: black;
      }
    }

    .download-wrapper {

      a {

        text-decoration: none;
        color: black;
      }
    }

    .skip-wrapper {

      a {

        text-decoration: none;
        opacity: 20%;
      }
    }
  }

`;

export const FormAgeStyle = styled.section`

  background-color: var(--bg-white);
  height: 100vh;
  font-family: "Montserrat";

  .formAge {

    max-width: 80%;
    margin: 0 auto;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .formAge_title__container {

      text-align: left;

      .formAge_title {

        padding-top: 10%;
        font-size: 22px;
        font-weight: 600;
      }
    }

    .formAge_fields__container {

      display: flex;
      justify-content: flex-start;
      margin: 25px 0;
      gap: 100px;

      .formAge_fields__column {

        .field_label {

          margin: 0 !important;
          display: flex;
          align-items: flex-end;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .form-control {

          border: none;
          border-radius: 0;
          border-bottom: 1px solid var(--yellow-pride);
          width: 85px;
          background-color: var(--bg-white);
          margin-left: 10px;
        }
      }
    }

    .formAge_additionalFields__container {

      .employees_field {

        display: flex;

        .employees_label {

          margin: 0 !important;
          display: flex;
          align-items: flex-end;
        }

        .employees_input {

          .form-control {

            background-color: var(--bg-white);
            border: none;
            border-radius: 0;
            border-bottom: 1px solid var(--yellow-pride);
            width: 150px;
            margin-left: 10px;
          }
        }
      }
    }
  }

`;