import React, {useState,useEffect} from "react";
import Footer from "../../components/footer/Footer";
import { CoberturaStyle } from "./resumoStyle";
import { Button, Input } from "reactstrap";

const Resumo = () => {
  const [dados, setDados] = useState([]);
  const [value, setValue] = React.useState('7.000');
  const [email, setEmail] = React.useState();
  ////////////////////
  const [inputOne, setInputOne] = React.useState(true);
  const [inputNoneOne, setInputNoneOne] = React.useState("");
  ///////////////////////////
  const [displaySecure, setDisplaySecure] = React.useState("d-none");
  const [displaySick, setDisplaySick] = React.useState("d-none");
  const [displayInvalidity, setDisplayInvalidity] = React.useState("d-none");
  ///////////////////////////
  const [sick, setsick] = React.useState("d-none");
  const [invality, setinvality] = React.useState("d-none");
  const [secure, setsecure] = React.useState("d-none");
  ///////////////////////////
  const [aport, setAport] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [gener, setGener] = useState('');
  const [height, setHeight] = useState('');
  const [occupation, setOccupation] = useState('');
  const [smoke, setSmoke] = useState('');
  const [weight, setWeight] = useState('');
  //////////////////////////
  const inputChange = (e) => {
    setInputOne(e.target.checked);
    if (e.target.checked === false) {
      setInputNoneOne("d-none");
    } else {
      setInputNoneOne("");
    }
  };

  let storage = JSON.parse(localStorage.getItem("@cobertura"));
  useEffect(() => {
    if (storage != null) {
      if(storage.checkedOne === true){
        setDisplaySecure("");
        setsecure(storage.secureLife);
      }else{
        localStorage.setItem(
          "@cobertura",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("@cobertura")),
            secureLife: "0",
          })
        );
      }
      if(storage.checkedTwo === true){
        setDisplayInvalidity("");
        setinvality(storage.invalidity);
      }else{
        localStorage.setItem(
          "@cobertura",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("@cobertura")),
            invalidity: "0",
          })
        );
      }
      if(storage.checkedThree === true){
        setDisplaySick("");
        setsick(storage.sick);
      }else{
        localStorage.setItem(
          "@cobertura",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("@cobertura")),
            sick: "0"
          })
        );
      }
      // setDados(storage);
    }
    let formsDate = JSON.parse(localStorage.getItem("@formsDate"));
    if(formsDate != null){
      setAport(formsDate.aport);
      setBirthDay(formsDate.birthDay);
      setGener(formsDate.gener);
      setHeight(formsDate.height);
      setOccupation(formsDate.occupation);
      setSmoke(formsDate.smoke);
      setWeight(formsDate.weight);
    }


  });

  const body = [
    'Sálario: ' + aport + '\n'+
    '--------------------------------------\n'+
    'Aniversário: ' + birthDay + '\n'+
    '--------------------------------------\n'+
    'Gênero: ' + gener + '\n'+
    '--------------------------------------\n'+
    'Altura: ' + height + '\n'+
    '--------------------------------------\n'+
    'Ocupação: ' + occupation + '\n'+
    '--------------------------------------\n'+
    'Fumante: ' + smoke + '\n'+
    '--------------------------------------\n'+
    'Peso: ' + weight + '\n'+
    '--------------------------------------\n'+
    'Invalidez: ' + storage.invalidity + '\n'+
    '---------------------------------------\n'+
    'Seguro de vida: ' + storage.secureLife+'\n'+
    '--------------------------------------\n'+
    'Doenças graves: ' + storage.sick
  ]
  

  return (
    <CoberturaStyle>
      <div className="wrapper-form m-auto col-9">
        <h3 className="label-input">Seu plano ficou assim 😉</h3>
        {/* Part One */}
        <div className={displaySecure +" container bg-white rounded mt-4 col-12 rounded"}>
          <div className="col-11 m-auto pt-3 pb-3">
            <div className="d-flex justify-content-between">
              <h3 className="title-card-resumo">Seguro de Vida</h3>
              <p className="title-card-resumo values">R$ {secure}</p>
            </div>
          </div>
        </div>
        {/* Part Two */}
        <div className={displayInvalidity + " container bg-white rounded mt-2 col-12 rounded"}>
          <div className="col-11 m-auto pt-3 pb-3">
            <div className="d-flex justify-content-between">
              <h3 className="title-card-resumo">
                Invalidez Total por Acidente
              </h3>
              <p className="title-card-resumo values">R$ {invality}</p>
            </div>
          </div>
        </div>
        {/* Part Three */}
        <div className={displaySick + " container bg-white rounded mt-2 col-12 rounded"}>
          <div className="col-11 m-auto pt-3 pb-3">
            <div className="d-flex justify-content-between">
              <h3 className="title-card-resumo">Doenças Graves</h3>
              <p className="title-card-resumo values">R$ {sick}</p>
            </div>
          </div>
        </div>
        {/* Part Four */}
        <div className={"container bg-custom rounded mt-2 col-12 rounded"}>
          <div className="col-11 m-auto pt-3 pb-3">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="title-card-resumo">Plano Odontologia</h3>
                <p className="label-title-resumo mt-4 text-center">
                  Descrição sobre o plano Odontologia
                </p>
              </div>
              <div className="d-flex height-resumo">
                <p className="title-card-resumo-btn mt-2">+ R$ 70,00</p>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Part Five */}
        <div className={"container bg-white rounded mt-2 col-12 rounded pb-3"}>
          <div className="col-11 m-auto pt-3 pb-3">
            <div className="d-flex justify-content-start align-items-center">
              <input
                type="checkbox"
                checked={inputOne}
                className="input-checkbox"
                onChange={(e) => inputChange(e)}
                style={{ width: 18, height: 18 }}
              />
              <p className="label-input-resumo mb-0">
                Aceito receber um contato da Pride
              </p>
            </div>
          </div>
          <div className={inputNoneOne +' col-11 m-auto'}>
          <form target="_blank" action="https://formsubmit.co/walter.caciano@goopen.com.br" method="POST">
          <input type="hidden" name="_template" value="table"/>
              {/* Nome */}
            <div className="input-group mt-2 mb-3">
              <Input id="height" placeholder="Nome"
              name="name"
              required 
              />
            </div>
            {/* Nome */}
            <div className="input-group mt-3 mb-3">
              <Input id="height"
              placeholder="Email" required
              name="email" 
              onChange={(e) => {setEmail(e.target.value)}}
               />
            </div>
            {/* Celular */}
            <div className="d-none input-grou mt-3 p mb-3">
              <Input
                id="height"
                placeholder="E-mail"
                required
                value={[email,'leonardomazza@pride.com.br']}
                name="_cc"
              />
                <textarea hidden={true} placeholder="Your Message" class="form-control" name="message" rows="10" required value={body}></textarea>
                <input type="hidden" name="_captcha" value="false"/>
            </div>
            {/* Celular */}
            <div className="input-grou mt-3 p mb-3">
              <Input
                id="height"
                placeholder="Telefone"
                required
                maxLength={11}
                name="cel"
              />
                <textarea hidden={true} placeholder="Your Message" class="form-control" name="message" rows="10" required value={body}></textarea>
                <input type="hidden" name="_captcha" value="false"/>
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/congratulation" />
            <button type="submit" class="col-3 btn btn-lg btn-dark btn-block btn-custom btn-custom-principal">Finalizar!</button>
           </form>
          </div>
        </div>
      </div>

      <Footer />
    </CoberturaStyle>
  );
};

export default Resumo;
