import styled from "styled-components";

export const GenerStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--bg-white);

  .wrapper-form {
    /* max-width: 570px; */
    position: relative;
    top:250px;

    .gener-label {
      color: var(--bg-green) !important;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Montserrat";
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
    }

    .label-input {
      font-weight: bold;
      font-size: 1.928rem;
      font-family: "Montserrat";
      align-self: end !important;
      margin-bottom: 10px !important;
      margin-left: 0px;
      color: var(--bg-black);
      cursor: pointer;
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
      border-color: var(--bg-green) !important;
      color: var(--bg-green);
    }
    .btn-woman {
      margin-left: 10px;
    }

    .btn-man:hover,
    .btn-woman:hover {
      border: 1px solid var(--bg-black);
    }
  }
  
`;
