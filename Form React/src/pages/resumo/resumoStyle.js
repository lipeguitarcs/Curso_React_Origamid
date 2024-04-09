import styled from "styled-components";

export const CoberturaStyle = styled.section`
  @media (max-width: 768px) {
    .wrapper-form {
      top: 100px !important;
      h3.label-input{
        font-size: 1.5rem !important;
      }
      p.label-title{
        font-size: 0.7rem !important;
      }
      h3.title-card{
        font-size: 1rem !important;
        margin-bottom: 15px !important;
        max-width: 75px;
      }
      p.number-secury-life{
        font-size: xxx-large !important;
        font-weight: 400;
      }
      p.cifrao{
        align-self: center;
      }
      .label-card-one{
        font-size: 0.8rem !important;
      }
      .gener-label{
        font-size: 0.8rem !important;
        padding: 10px !important;
      }
    }
    .wrapper-form.m-auto.col-9{
      top: 50px;
      margin-bottom: 130px !important;
      h3.label-input{
        font-size: 1.2rem !important;
        margin: 0 !important;
      }
      h3.title-card-resumo{
        font-size: 0.8rem !important;
        max-width: 120px;
      }
      p.title-card-resumo-btn{
        font-size: 0.6rem !important;
      }
      p.label-title-resumo, p.values, p.label-input-resumo, input.form-control{
        font-size: 0.7rem !important;
      }
    }
  }
  max-height: 90vh;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  background-color: var(--bg-white);
  .btn-custom-principal{
    background-color: orange;
    margin-left: 10px !important;
    border: none;
    padding: 10px 0;
    letter-spacing: 1px;
    font-size: 1rem;
    font-family: "Montserrat";
    font-weight: bold;
    border-radius: 5px;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    box-shadow: 0px 0px !important;
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
  .small-label {
      font-size: 0.9rem;
      color: var(--color-gray);
    }
    .active {
      color: var(--bg-green) !important;
    }
    .btn-custom{
      background-color: orange;
      border: none;
      position: fixed;
      z-index:999;
      right:5.6%;
      bottom:4.8%;
      width:30%;
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

  .wrapper-form {
    position: relative;
    top: 150px;
    .last-part{
      margin-bottom:12rem!important;
    }

        .form-range {
          -webkit-appearance: none;
          width: 100%;
          height: 0;
          background: #d3d3d3;
          outline: none;
          -webkit-transition: .2s;
          transition: opacity .2s;
        }

        .form-range:hover {
          opacity: 1;
        }

        .form-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--bg-black);
          cursor: pointer;
        }

        .form-range::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--bg-black);
          cursor: pointer;
        }

      .gener-label {
        color: var(--bg-black) !important;
        font-weight: 500;
        border-radius: 10px;
        padding:15px 0 15px 15px;
        background-color: #f3f4f6;
        font-size: 1rem;
        font-family: "Montserrat";
        margin-bottom: 10px !important;
        margin-left: 0px;
        color: var(--bg-black);
        cursor: pointer;
        padding-bottom:20px;

        &:hover {
          border: 1px #373b42 solid;
          border-radius: 10px;
        }
      }
      p.cifrao{
      align-self: end;
      margin-bottom: 20px;
      margin-right: 10px;
    }
      p.number-secury-life{
        font-size: 3.5rem !important;
        font-weight: 500;
        font-family: "Montserrat";
        color: var(--bg-black);
        margin: 0;
      }
      .label-input {
        font-weight: bold;
        font-size: 2.3rem;
        font-family: "Montserrat";
        align-self: end !important;
        margin-bottom: 10px !important;
        margin-left: 0px;
        color: var(--bg-black);
      }
      .title-card{
        font-weight: bold;
        font-size: 1.5rem;
        font-family: "Montserrat";
        align-self: end !important;
        margin-bottom: 5px !important;
        margin-left: 0px;
        color: var(--bg-black);
      }
      .title-card-resumo{
        font-weight: 600;
        font-size: 1rem;
        font-family: "Montserrat";
        align-self: end !important;
        margin-bottom: 0px !important;
        margin-left: 0px;
        color: var(--bg-black);
      }
      .title-card-resumo-btn{
        font-weight: 600;
        font-size: 1rem;
        font-family: "Montserrat";
        align-self: end !important;
        margin-bottom: 5px !important;
        margin-right: 10px !important;
        color: var(--bg-black);
      }
      .label-input-resumo{
        font-weight: 400;
        font-size: 1rem;
        font-family: "Montserrat";
        align-self: end !important;
        margin-bottom: 0 !important;
        margin-left: 10px !important;
        color: var(--bg-black);
      }
      .bg-custom{
        background-color: transparent;
        border: 1px solid #baa9a9;
        transition: linear 0.2s;
        &:hover{
          border: 1px solid var(--bg-black);
          transition: linear 0.2s;
        }
      }
      .label-title{
        font-size: 0.8rem;
        margin-right: 10px;
        padding-bottom: 5px;
      }
      .label-title-resumo{
        font-size: 0.9rem;
        margin-right: 10px;
        padding-bottom: 5px;
      }
      .height-resumo{
        height: 33px;
      }
      .label-card-one{
        font-size: 0.9rem;
        max-width: 500px;
        font-weight: 500;
      }
      #flexSwitchCheckChecked{
        width: 3em;
        height: 1.5rem;
        box-shadow: none;
      }
      .form-check.form-switch{
        align-self:center;
      }
      .form-check-input{
        &:checked{
        background-color: var(--bg-green);
        border-color: var(--bg-green);
      }
      .form-check-input-resumo{
        &:checked{
        background-color: var(--bg-green);
        border-color: var(--bg-green);
      }
    }
  
`;
