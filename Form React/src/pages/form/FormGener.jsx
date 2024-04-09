import React, { useEffect, useState } from "react";
import { GenerStyle } from "./formsStyle";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Progress,
  Alert,
  Input,
} from "reactstrap";
import Footer from "../../components/footer/Footer";

const FormGener = ({ display }) => {
  const [modal, setModal] = useState(false);
  const [path, setPath] = useState();
  const [formData, setFormData] = useState({
    totalCollaborators: "",
    interestedCollaborators: "",
    hasPlan: "",
    operator: "",
    adjustmentDate: "",
    outsidePerimeter: "",
    citiesCoverage: "",
  });

  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    const storedData = JSON.parse(localStorage.getItem("@formsDate"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHasPlan = (value) => {
    setFormData({
      ...formData,
      hasPlan: value,
    });
  };

  return (
    <GenerStyle className={display}>
      <Progress
        value="20"
        color="success"
        className="custom-progress-bar"
      />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Dados pessoais</small>
      </Alert>
      <div className="wrapper-form m-auto col-8">
        <h3 className="label-input">
          Etapa 2 - Perfil e Cenário Atual
        </h3>
        <div className="mt-5 col-12 formGap">
          <div>
            <p>Total de colaboradores na empresa</p>
            <Input
              type="number"
              placeholder="Informe o total de colaboradores na empresa"
              name="totalCollaborators"
              value={formData.totalCollaborators}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <p>Total de colaboradores interessados no plano</p>
            <Input
              type="number"
              placeholder="Informe o total de colaboradores interessados no plano"
              name="interestedCollaborators"
              value={formData.interestedCollaborators}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex choiceGap">
            <p>Alguém reside fora do perímetro da localidade do CNPJ?</p>
            <Button
              className={`btn-plan ${formData.outsidePerimeter === "sim" ? "active" : ""}`}
              onClick={() => handleInputChange({ target: { name: "outsidePerimeter", value: "sim" } })}
            >
              Sim
            </Button>
            <Button
              className={`btn-plan ${formData.outsidePerimeter === "não" ? "active" : ""}`}
              onClick={() => handleInputChange({ target: { name: "outsidePerimeter", value: "não" } })}
            >
              Não
            </Button>
          </div>
          {formData.outsidePerimeter === "sim" && (
            <Input
              type="text"
              placeholder="Quais cidades precisam de abrangência?"
              name="citiesCoverage"
              value={formData.citiesCoverage}
              onChange={handleInputChange}
            />
          )}
          <div className="d-flex choiceGap">
            <p>Possui plano atualmente?</p>
            <Button
              className={`btn-plan ${formData.hasPlan === "sim" ? "active" : ""}`}
              onClick={() => handleHasPlan("sim")}
            >
              Sim
            </Button>
            <Button
              className={`btn-plan ${formData.hasPlan === "não" ? "active" : ""}`}
              onClick={() => handleHasPlan("não")}
            >
              Não
            </Button>
          </div>
          {formData.hasPlan === "sim" && (
            <>
              <div>
                <p>Qual a operadora?</p>
                <Input
                  type="text"
                  placeholder="Nome da operadora"
                  name="operator"
                  value={formData.operator}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <p>Data de reajuste</p>
                <Input
                  type="date"
                  placeholder="Data de reajuste"
                  name="adjustmentDate"
                  value={formData.adjustmentDate}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
      <Modal isOpen={modal} onClick={toggleModal} id="modal-gener">
        <ModalHeader onClick={toggleModal}>
          Por que apenas essas duas opções?
        </ModalHeader>
        <ModalBody onClick={toggleModal}>
          Sabemos que existem mais identidades de gênero do que apenas homem e
          mulher. No entanto, o mercado de seguros está aprendendo sobre o
          impacto de outras identidades de gênero no Seguro de Vida. Ao
          selecionar o sexo de acordo com seu registro de nascimento,
          conseguiremos uma cotação mais precisa.
        </ModalBody>
      </Modal>
    </GenerStyle>
  );
};

export default FormGener;
