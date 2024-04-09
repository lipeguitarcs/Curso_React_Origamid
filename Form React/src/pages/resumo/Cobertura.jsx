import React,{useState,useEffect} from "react";
import Footer from "../../components/footer/Footer";
import { CoberturaStyle } from "./resumoStyle";
import { Modal, ModalHeader, ModalBody } from "reactstrap";


const Cobertura = () => {
  const [dados, setDados] = useState([]);
  const [modal, setModal] = React.useState(false);
  const [modalInvalidez, setModalInvalidez] = React.useState(false);
  const [modalDoencas, setModalDoencas] = React.useState(false);
  ////////////////////
  const [valueOne, setValueOne] = React.useState("100.000");
  const [valueTwo, setValueTwo] = React.useState("80.000");
  const [valueThree, setValueThree] = React.useState("20.000");
  const [minValue, setMinValue] = React.useState("100000");
  const [maxValue, setMaxValue] = (React.useState("20000"));
  
  useEffect(() => {
  let formsDate = JSON.parse(localStorage.getItem("@formsDate"));
  if(formsDate != null){
    setMaxValue(750000);
  }
  }, []);

  ////////////////////
  const [inputOne, setInputOne] = React.useState(true);
  const [inputNoneOne, setInputNoneOne] = React.useState("");
  const [inputTwo, setInputTwo] = React.useState(false);
  const [inputNoneTwo, setInputNoneTwo] = React.useState("d-none");
  const [inputThree, setInputThree] = React.useState(false);
  const [inputBirthDay, setBirthDay] = useState();
  const [inputGener, setGener] = useState();
  ///////////////////////////


  const toggleModal = () => {
    modal === false ? setModal(true) : setModal(false);
  };
  const toggleModalInvalidez = () => {
    modalInvalidez === false
      ? setModalInvalidez(true)
      : setModalInvalidez(false);
  };
  const toggleModalDoencas = () => {
    modalDoencas === false ? setModalDoencas(true) : setModalDoencas(false);
  };
  ///////////////////////////
  useEffect(() => {
    localStorage.setItem(
      "@cobertura",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("@cobertura")),
        checkedOne: true,
        checkedThree: false,
        checkedTwo: false,
        invalidity: "1.000.000",
        secureLife: "100.000",
        sick: "980.000"
      })
    );
    let formsDate = JSON.parse(localStorage.getItem("@formsDate"));
    if(formsDate != null){
      setBirthDay(formsDate.birthDay);
      setGener(formsDate.gener);
    }

  }, []);
  const inputChangeOne = (e) => {
    setInputOne(e.target.checked);
    if (e.target.checked === false) {
      setInputNoneOne("d-none");
    } else {
      setInputNoneOne("");
    }
    localStorage.setItem(
      "@cobertura",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("@cobertura")),
        checkedOne: e.target.checked,
      })
    );
  };
  ///////////////////////////
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


  function securyLifeOne(e) {
    let text = inputBirthDay;
    const myArray = text.split("/");
    let dia = myArray[0];
    let mes = myArray[1];
    let ano = myArray[2];
    let finalValue = ''

    let value = e.target.value;
    let valueInt = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    setValueOne(valueInt);
    if (inputGener === "Masculino" && idade(ano, mes, dia) >= 16 && idade(ano, mes, dia) <= 30) {   
      finalValue = valueInt / 10 * 5.16;
    } 
    else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 31 && idade(ano, mes, dia) <= 35) {
      finalValue = valueInt / 10 * 5.456;
    } 
    else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 36 && idade(ano, mes, dia) <= 40) {
      finalValue = valueInt / 10 * 6.66;
    } 
    else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 41 && idade(ano, mes, dia) <= 45) {
      finalValue = valueInt / 10 * 8.6;
    }
    else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 46 && idade(ano, mes, dia) <= 50) {
      finalValue = valueInt / 10 * 11.80;
    }
    else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 51 && idade(ano, mes, dia) <= 55) {
      finalValue = valueInt / 10 * 16.773;
    }
    else if (inputGener === "Masculino" && idade(ano, mes, dia) >= 56 && idade(ano, mes, dia) <= 60) {
      finalValue = valueInt / 10 * 24.73;
    }

      localStorage.setItem(
        "@cobertura",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("@cobertura")),
          secureLife: valueInt,
          checkedOne: true,
          checkedThree: false,
          checkedTwo: false,
          invalidity: "1.000.000",
          sick: "980.000"
        })
      );

    document.getElementById("valorEstimado").innerHTML = "R$ " + finalValue.toFixed(2).replace('.', ',') + " mensais";

    localStorage.setItem(
      "@cobertura",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("@cobertura")),
        secureLife: valueInt,
      })
    );
  }

  // useEffect(() => {
  //   let storage = localStorage.getItem("@cobertura");
  //   if (storage !== null) {
  //     document.getElementById("customRange1").value = storage.secureLife;
  //     document.getElementById("customRange2").value = storage.invalidity;
  //     document.getElementById("customRange3").value = storage.sick;
  //     document.getElementById("flexCheckbox1").checked = storage.checkedOne;
  //     document.getElementById("flexCheckbox2").checked = storage.checkedTwo;
  //     document.getElementById("flexCheckbox3").checked = storage.checkedThree;
  //   }
  // });
  ///////////////////////////

  return (
    <CoberturaStyle>
      <div className="wrapper-form m-auto col-8">
        <h3 className="label-input text-center">
          Pronto! Confira as melhores opções de seguro para você.
        </h3>
        <p className="label-title mt-4 text-center">
          Personalize seu plano e escolha o valor das coberturas de acordo com
          seu momento de vida.
        </p>
        {/* Part One */}
        <div className={"container bg-white rounded col-12 pb-2 rounded"}>
          <div className="col-11 m-auto">
            <div className="d-flex justify-content-between">
              <h3 className="title-card">Seguro de Vida</h3>
              <div className="d-flex">
                <p className="label-title mt-4">Incluir no plano</p>
                <div className="form-check form-switch">
                  <input
                    onChange={(e) => inputChangeOne(e)}
                    className="form-check-input"
                    type="checkbox"
                    checked={inputOne}
                    id="flexCheckbox1"
                  />
                </div>
              </div>
            </div>
            <p className="label-card-one mt-2">
              Proteja o futuro dos seus beneficiários. Eles receberão o valor da
              cobertura caso você venha a falecer.
            </p>
          </div>

          <div className={inputNoneOne + " col-11 m-auto"}>
            <div className="wrapper-slider-value w-100 d-flex justify-content-center">
              <p className="cifrao">R$</p>
              <p id="range-value" className="number-secury-life">
                {valueOne}
              </p>
            </div>
            <input
              type="range"
              className="form-range"
              onChange={(e) => {
                securyLifeOne(e);
              }}
              min={minValue}
              max={maxValue}
              step="50000"
              id="customRange1"
            />
            <div className="mt-2 w-100 d-flex justify-content-between">
              <small>R$ {minValue} mil</small>
              <small>R$ {maxValue} mil</small>
            </div>
            <div className="col-12 m-auto container ">
              <p className="gener-label mt-4" onClick={toggleModal}>
                Saiba mais sobre esta cobertura
              </p>
            </div>
          </div>
        </div>
        {/* Part Two
        <div className="container bg-white rounded col-12 pb-2 rounded mt-3">
          <div className="col-11 m-auto">
            <div className="d-flex justify-content-between">
              <h3 className="title-card">Invalidez Total por Acidente</h3>
              <div className="d-flex">
                <p className="label-title mt-4">Incluir no plano</p>
                <div className="form-check form-switch">
                  <input
                    onChange={(e) => inputChangeTwo(e)}
                    className="form-check-input"
                    type="checkbox"
                    checked={inputTwo}
                    id="flexCheckbox2"
                  />
                </div>
              </div>
            </div>
            <p className="label-card-one mt-2">
              Proteja o seu futuro financeiro. Você receberá o valor total da
              cobertura em caso de perda definitiva de um membro ou função do
              corpo causada por um acidente.
            </p>
          </div>

          <div className={inputNoneTwo + " col-11 m-auto"}>
            <div className="wrapper-slider-value w-100 d-flex justify-content-center">
              <p className="cifrao">R$</p>
              <p id="range-value" className="number-secury-life">
                {valueTwo}
              </p>
            </div>
            <input
              type="range"
              className="form-range"
              onChange={(e) => {
                securyLifeTwo(e);
              }}
              min="80000"
              max="2000000"
              step="10000"
              id="customRange2"
            />
            <div className="mt-2 w-100 d-flex justify-content-between">
              <small>R$ 80 mil</small>
              <small>R$ 2 milhões</small>
            </div>
            <div className="col-12 m-auto container ">
              <p className="gener-label mt-4" onClick={toggleModalInvalidez}>
                Saiba mais sobre esta cobertura
              </p>
            </div>
          </div>
        </div>
        */}
        {/* Part Three
        <div className="container bg-white rounded col-12 pb-2 rounded mt-3 last-part">
          <div className="col-11 m-auto">
            <div className="d-flex justify-content-between">
              <h3 className="title-card">Doenças Graves</h3>
              <div className="d-flex">
                <p className="label-title mt-4">Incluir no plano</p>
                <div className="form-check form-switch">
                  <input
                    onChange={(e) => inputChangeThree(e)}
                    className="form-check-input"
                    type="checkbox"
                    checked={inputThree}
                    id="flexCheckbox3"
                  />
                </div>
              </div>
            </div>
            <p className="label-card-one mt-2">
              Proteja-se de gastos inesperados com a sua saúde caso você receba
              o diagnóstico de alguma doença grave ou passe por um transplante
              de órgãos.
            </p>
          </div>

          <div className={inputNoneThree + " col-11 m-auto"}>
            <div className="wrapper-slider-value w-100 d-flex justify-content-center">
              <p className="cifrao">R$</p>
              <p id="range-value" className="number-secury-life">
                {valueThree}
              </p>
            </div>
            <input
              type="range"
              className="form-range"
              onChange={(e) => {
                securyLifeThree(e);
              }}
              min="20000"
              max="2000000"
              step="10000"
              id="customRange3"
            />
            <div className="mt-2 w-100 d-flex justify-content-between">
              <small>R$ 20 mil</small>
              <small>R$ 500 mil</small>
            </div>
            <div className="col-12 m-auto container ">
              <p className="gener-label mt-4" onClick={toggleModalDoencas}>
                Saiba mais sobre esta cobertura
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
      {/*Modal Part One */}
      <Modal isOpen={modal} onClick={toggleModal} id="modal-gener">
        <ModalHeader onClick={toggleModal}>Seguro de Vida</ModalHeader>
        <ModalBody onClick={toggleModal}>
          <ul>
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Cobrimos morte acidental sem carência.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Morte natural ou por doença com 60 dias de carência (incluindo
              COVID-19).
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Emissão da apólice de forma digital e sem burocracia em até 1 dia
              útil após análise e pagamento.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Você define os beneficiários e pode alterá-los quando quiser.
            </li>
            <hr />
          </ul>
        </ModalBody>
      </Modal>
      {/* Modal Part Two */}
      <Modal
        isOpen={modalInvalidez}
        onClick={toggleModalInvalidez}
        id="modal-gener"
      >
        <ModalHeader onClick={toggleModalInvalidez}>
          Invalidez Total por Acidente
        </ModalHeader>
        <ModalBody onClick={toggleModalInvalidez}>
          <ul>
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Perda total da visão de um ou ambos os olhos.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Perda total do uso de um ou ambos os membros superiores.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Perda total do uso de um ou ambos os membros inferiores.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Perda total do uso de uma ou ambas as mãos.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Perda total do uso de um ou ambos os pés.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Perda total do uso de um dos polegares, inclusive o metacarpiano.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Alienação mental total e incurável.
            </li>
            <hr />
          </ul>
        </ModalBody>
      </Modal>

      {/* Modal Part Three */}
      <Modal
        isOpen={modalDoencas}
        onClick={toggleModalDoencas}
        id="modal-gener"
      >
        <ModalHeader onClick={toggleModalDoencas}>Doenças Graves</ModalHeader>
        <ModalBody onClick={toggleModalDoencas}>
          <ul>
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              As doenças passíveis de cobertura são câncer, AVC (Acidente
              Vascular Cerebral) e infarto agudo do miocárdio, além de
              transplante de órgãos e insuficiência renal terminal.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Período de carência de 90 dias.
            </li>
            <hr />
            <li className="d-flex">
              <div>
                <img src="https://img.icons8.com/material/27/000000/approval--v1.png" />
              </div>
              Cobertura da pessoa segurada em vida, após 30 dias do primeiro
              diagnóstico definitivo da doença ou tratamento citado.
            </li>
            <hr />
          </ul>
        </ModalBody>
      </Modal>
      <Footer />
    </CoberturaStyle>
  );
};

export default Cobertura;
