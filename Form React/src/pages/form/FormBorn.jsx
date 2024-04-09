import React, { useState, useEffect } from "react";
import { BornStyle } from "./formsStyle";
import FooterFirst from "../../components/footer/FooterFirst.jsx";
import { Progress, FormGroup, Alert, Input } from "reactstrap";

const FormBorn = ({ display }) => {

  // useState
  
  const [path, setPath] = useState();
  const [company, setCompany] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [validator, setValidator] = useState("d-none");

  // Regex para validar CNPJ
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  // Regex para validar telefone
  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  // Regex para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Manipuladores -->
  
    // Manipulador para CNPJ que insere "." e "/" automaticamente
    const handleCnpjChange = (e) => {
      const value = e.target.value;
      // Remove caracteres não numéricos
      const cleanedValue = value.replace(/[^\d]/g, "");
      // Verifica se o valor já tem 14 dígitos
      if (cleanedValue.length === 14) {
        // Aplica a formatação com "." e "/"
        const formattedValue = cleanedValue.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
          "$1.$2.$3/$4-$5"
        );
        setCnpj(formattedValue);
      } else {
        // Se ainda não tem 14 dígitos, apenas atualiza o estado com o valor digitado
        setCnpj(cleanedValue);
      }
    };

    // Manipulador para o telefone que insere "-" e "()" automaticamente
    const handlePhoneChange = (e) => {
      const value = e.target.value;
      const cleanedValue = value.replace(/[^\d]/g, "");
      if (cleanedValue.length === 10 || cleanedValue.length === 11) {
        const formattedValue = cleanedValue.replace(
          /^(\d{2})(\d{4,5})(\d{4})$/,
          "($1) $2-$3"
        );
        setPhone(formattedValue);
      } else {
        setPhone(cleanedValue);
      }
    };

    // Manipulador para validar o email
    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      if (!emailRegex.test(value)) {
        console.log("Email inválido");
      }
    };

  // Função para verificar se os campos obrigatórios estão preenchidos
  
  const areRequiredFieldsFilled = () => {
    return company.trim() !== "" && cnpj.trim() !== "" && phone.trim() !== "" && contact.trim() !== "" && email.trim() !== "";
  };

  // Alterações no localStorage

  useEffect(() => {
    let formData = JSON.parse(localStorage.getItem("@formsData"));
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    if (formData) {
      setCompany(formData.company || "");
      setCnpj(formData.cnpj || "");
      setPhone(formData.phone || "");
      setContact(formData.contact || "");
      setEmail(formData.email || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@formsData",
      JSON.stringify({ company, cnpj, phone, contact, email })
    );
  }, [company, cnpj, phone, contact, email]);

  // Retorno:

  return (
    <BornStyle className={display}>
      <Progress value="0" color="success" className="custom-progress-bar" />

      <Alert className="col-8 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Dados básicos</small>
      </Alert>

      <FormGroup className="col-8 group-input m-auto">
        <h3 className="label-input">Dados básicos</h3>
        <div>
          <p>Empresa</p>
          <Input
            type="text"
            placeholder="Nome da empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <p>CNPJ</p>
          <Input
            type="text"
            placeholder="Digite seu CNPJ"
            value={cnpj}
            onChange={handleCnpjChange}
          />
          {/* Adicionando validação de CNPJ */}
          {!cnpjRegex.test(cnpj) && (
            <small style={{ color: "red" }}>CNPJ inválido</small>
          )}
        </div>
        <div>
          <p>Nome do responsável</p>
          <Input
            type="text"
            placeholder="Digite o nome do responsável"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <p>Contato do Responsável</p>
          <Input
            type="text"
            placeholder="Telefone"
            value={phone}
            onChange={handlePhoneChange}
          />
          {/* Adicionando validação de telefone */}
          {!phoneRegex.test(phone) && (
            <small style={{ color: "red" }}>Telefone inválido</small>
          )}
        </div>
        <div>
          <p>Email</p>
          <Input
            type="email"
            placeholder="nome@email.com"
            value={email}
            onChange={handleEmailChange}
          />
          {/* Adicionando validação de email */}
          {!emailRegex.test(email) && (
            <small style={{ color: "red" }}>Email inválido</small>
          )}
        </div>
        <small className={validator} style={{ color: "red" }}>
          Por favor, preencha todos os campos.
        </small>
      </FormGroup>
      <FooterFirst />
    </BornStyle>
  );
};
export default FormBorn;