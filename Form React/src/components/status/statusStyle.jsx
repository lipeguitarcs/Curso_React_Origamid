import styled from "styled-components";

const StatusStyle = styled.section`
  display: block;
  width: 30%;
  height: 100% !important;
  box-sizing: border-box;
  background: url("../bg_pride.webp");
  background-size: cover;

  .logo-box {
    width: 100%;
  }

  .logo{
    margin-left: 32px;
    margin-top: 25px;
    width: 80%;
    height: auto;
  }

  .logo2{
    margin-top: 0px;
  }

  .parceria{
    margin: 10px 0;
    color: white;
    margin-left: 32px;
    font-size: 12px;
  }

  .status-text-conteiner {
    margin-top: 35px;
    margin-left: 32px;
    .status-text {
      font-family: "Montserrat";
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
  .content-status {
    margin-top: 10%;
    margin-left: 13%;

    // content status active
    .content-status-active {
      max-width: 50px;
      min-height: 40px;
      height: 48px;
      min-width: 50px;
      border-radius: 50%;
      background-color: #CA991E;
      z-index: 50;
      color: white;

      .number-active {
        padding-top: 11px;
        padding-left: 21px;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: "Montserrat";
        color: white;
      }
      .describe-active {
        padding-top: 12px;
        padding-left: 20px;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: "Montserrat";
        color: white;
      }
    }
    .data-active {
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      align-self: end !important;
      margin-bottom: 10px !important;
      margin-left: 7px;
      color: var(--bg-white);
    }
    // content-status-desactive
    .content-status-desactive {
      max-width: 50px;
      min-height: 40px;
      height: 48px;
      min-width: 50px;
      border-radius: 50%;
      background-color: #00022D;
      border: 1px solid var(--yellow-pride);
      z-index: 50;

      .number-desactive {
        padding-top: 10px;
        padding-left: 18px;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: "Montserrat";
        color: var(--bg-white);
      }
      .describe-desactive {
        padding-top: 10px;
        padding-left: 18px;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: "Montserrat";
        color: var(--bg-white);
      }
    }
    .data-desactive {
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      align-self: end !important;
      margin-bottom: 10px !important;
      margin-left: 7px;
      color: var(--bg-white);
    }
  }
  .divisor-style {
    position: fixed;
    width: 1px;
    height: 300px;
    left: 5.7%;
    margin-top: 115px;
    background-color: var(--bg-white);
  }

  .heart {
    margin-top: 10px;
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default StatusStyle;
