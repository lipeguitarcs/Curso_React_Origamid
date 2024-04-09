import React, { useEffect, useState } from "react";
import { AportStyle } from "./formsStyle";
import { Button, Alert, Progress, Input } from "reactstrap";
import ArrowLeft from "../../components/assets/left-arrow.png";
import Footer from "../../components/footer/Footer";
import { Active } from "../../components/status/statusActive";
import { Link } from "react-router-dom";

const FormAport = ({ display }) => {
  const [path, setPath] = useState();

  const[formData, setFormData] = useState({});

  const [readjustmentDate, setReadjustmentDate] = useState("");

  const [selectedCopay, setSelectedCopay] = useState("");

  const [planForEmployees, setPlanForEmployees] = useState("");

  const [planForDependents, setPlanForDependents] = useState("");

  const [residentsFromElsewhere, setResidentsFromElsewhere] = useState("");

  const [hasBranches, setHasBranches] = useState("");
  const [hasBranchesLoaded, setHasBranchesLoaded] = useState("");

  const [registeredEmployeesTotal, setRegisteredEmployeesTotal] = useState("");
  const [registeredEmployeesTotalLoaded, setRegisteredEmployeesTotalLoaded] = useState("");

  const [interestedEmployeesTotal, setInterestedEmployeesTotal] = useState("");
  const [interestedEmployeesTotalLoaded, setInterestedEmployeesTotalLoaded] = useState("");

  const [currentHealthPlan, setCurrentHealthPlan] = useState("");
  const [currentHealthPlanLoaded, setCurrentHealthPlanLoaded] = useState("");

  const [healthPlanOperator, setHealthPlanOperator] = useState("");
  const [healthPlanOperatorLoaded, setHealthPlanOperatorLoaded] = useState("");

  const [sex, setSex] = useState("");
  const [sexLoaded, setSexLoaded] = useState("");

  const [residentCities, setResidentCities] = useState("");
  const [residentCitiesLoaded, setResidentCitiesLoaded] = useState("");

  const [inactives, setInactives] = useState("");
  const [inactivesLoaded, setInactivesLoaded] = useState("");

  const [suspended, setSuspended] = useState("");
  const [suspendedLoaded, setSuspendedLoaded] = useState("");

  const [longTermInpatients, setLongTermInpatients] = useState("");
  const [longTermInpatientsLoaded, setLongTermInpatientsLoaded] = useState("");

  const [specialChildren, setSpecialChildren] = useState("");
  const [specialChildrenLoaded, setSpecialChildrenLoaded] = useState("");

  const [pregnantCases, setPregnantCases] = useState("");
  const [pregnantCasesLoaded, setPregnantCasesLoaded] = useState("");

  const [highCostPatients, setHighCostPatients] = useState("");
  const [highCostPatientsLoaded, setHighCostPatientsLoaded] = useState("");

  const [ongoingSurgeryCases, setOngoingSurgeryCases] = useState("");
  const [ongoingSurgeryCasesLoaded, setOngoingSurgeryCasesLoaded] = useState("");

  const [cid, setCid] = useState("");
  const [cidLoaded, setCidLoaded] = useState("");


  useEffect(() => {
    setPath(parseInt(window.location.pathname.replace(/\D/g, "")));
    // Recuperar as informações salvas no localStorage
    const savedOptions = JSON.parse(localStorage.getItem('@selectedOptions')) || [];
    // Verificar se cada opção está presente nas informações recuperadas e definir o estado correspondente como booleano
    setHasBranchesLoaded(savedOptions.includes('Filiais'));
    setRegisteredEmployeesTotalLoaded(savedOptions.includes('Total de funcionarios registrados'));
    setInterestedEmployeesTotalLoaded(savedOptions.includes('Total de funcionarios interessados'));
    setCurrentHealthPlanLoaded(savedOptions.includes('Plano de saúde atual'));
    setHealthPlanOperatorLoaded(savedOptions.includes('Operadora'));
    setSexLoaded(savedOptions.includes('Sexo'));
    setResidentCitiesLoaded(savedOptions.includes('Cidades dos residentes de outras localidades'));
    setInactivesLoaded(savedOptions.includes('Inativos (demitidos ou aposentados)'));
    setSuspendedLoaded(savedOptions.includes('Afastados'));
    setLongTermInpatientsLoaded(savedOptions.includes('Internados de longa permanência'));
    setSpecialChildrenLoaded(savedOptions.includes('Filhos especiais'));
    setPregnantCasesLoaded(savedOptions.includes('Casos de gestantes'));
    setHighCostPatientsLoaded(savedOptions.includes('Doentes crônicos, tratamento de alto custo, oncológico ou home care'));
    setOngoingSurgeryCasesLoaded(savedOptions.includes('Casos de indicação de cirurgias em andamento'));
    setCidLoaded(savedOptions.includes('CID'));
  }, []);

  useEffect(() => {
    // Recuperar as informações salvas no localStorage
    let formData = JSON.parse(localStorage.getItem('@aportData'));
    if (formData) {
      setReadjustmentDate(formData.readjustmentDate || "");
      setSelectedCopay(formData.selectedCopay || "");
      setPlanForEmployees(formData.planForEmployees || "");
      setPlanForDependents(formData.planForDependents || "");
      setResidentsFromElsewhere(formData.residentsFromElsewhere || "");
      setHasBranches(formData.hasBranches || "");
      setRegisteredEmployeesTotal(formData.registeredEmployeesTotal || "");
      setInterestedEmployeesTotal(formData.interestedEmployeesTotal || "");
      setCurrentHealthPlan(formData.currentHealthPlan || "");
      setHealthPlanOperator(formData.healthPlanOperator || "");
      setSex(formData.sex || "");
      setResidentCities(formData.residentCities || "");
      setInactives(formData.inactives || "");
      setSuspended(formData.suspended || "");
      setLongTermInpatients(formData.longTermInpatients || "");
      setSpecialChildren(formData.specialChildren || "");
      setPregnantCases(formData.pregnantCases || "");
      setHighCostPatients(formData.highCostPatients || "");
      setOngoingSurgeryCases(formData.ongoingSurgeryCases || "");
      setCid(formData.cid || "");
    }
  }, []);

  useEffect(() => {
    // Salvar formData no localStorage sempre que ele for atualizado
    localStorage.setItem('@aportData', JSON.stringify({...formData, readjustmentDate, selectedCopay, planForEmployees, planForDependents, residentsFromElsewhere, hasBranches, registeredEmployeesTotal, interestedEmployeesTotal, currentHealthPlan, healthPlanOperator, sex, residentCities, inactives, suspended, longTermInpatients, specialChildren, pregnantCases, highCostPatients, ongoingSurgeryCases, cid}));
  }, [readjustmentDate, selectedCopay, planForEmployees, planForDependents, residentsFromElsewhere, hasBranches, registeredEmployeesTotal, interestedEmployeesTotal, currentHealthPlan, healthPlanOperator, sex, residentCities, inactives, suspended, longTermInpatients, specialChildren, pregnantCases, highCostPatients, ongoingSurgeryCases, cid]);

  //
  const handleReadjustmentDate = (e) => {
    setReadjustmentDate(e.target.value);
  }

  const handleCopay = (value) => {
    setSelectedCopay(value);
    // updateLocalStorage({ copay: value });
  };

  const handlePlanForEmployees = (value) => {
    setPlanForEmployees(value);
  }

  const handlePlanForDependents = (value) => {
    setPlanForDependents(value);
  }

  const handleResidentsFromElsewhere = (value) => {
    setResidentsFromElsewhere (value);
  }
  
  const handleHasBranches = (value) => {
    setHasBranches(value);
    // updateLocalStorage({ planForAllHolders: value });
  };
  
  const handleRegisteredEmployeesTotal = (e) => {
    setRegisteredEmployeesTotal (e.target.value);
  }

  const handleInterestedEmployeesTotal = (e) => {
    setInterestedEmployeesTotal (e.target.value);
  }

  const handleCurrentHealthPlan = (e) => {
    setCurrentHealthPlan (e.target.value);
  }

  const handleHealthPlanOperator = (e) => {
    setHealthPlanOperator (e.target.value);
  }
  
  const handleResidentCities = (e) => {
    setResidentCities (e.target.value);
  }
  
  const handleInactives = (e) => {
    setInactives(e.target.value);
  }
  
  const handleSuspended = (e) => {
    setSuspended(e.target.value);
  }

  const handleLongTermInpatients = (e) => {
    setLongTermInpatients(e.target.value);
  }

  const handleSpecialChildren = (e) => {
    setSpecialChildren(e.target.value);
  }

  const handlePregnantCases = (e) => {
    setPregnantCases(e.target.value);
  }

  const handleHighCostPatients = (e) => {
    setHighCostPatients(e.target.value);
  }

  const handleOngoingSurgeryCases = (value) => {
    setOngoingSurgeryCases(value);
  }

  const handleCid = (value) => {
    setCid(value);
  }

  

  return (
    <AportStyle className={display}>
      <Progress value="40" color="success" className="custom-progress-bar" />
      <Alert className="col-9 m-auto alert-mobile mt-5">
        <p>Passo {path} de 6</p>
        <small>Concluir</small>
      </Alert>
      <div className="aport-title__container">
        <h3 className="aport-title">Preencha essas informações adicionais</h3>
      </div>
      <div className="wrapper-form m-auto col-8">
        
        <div className="mt-5 col-12 flexOptions">
          <p>Data de Reajuste</p>
          {readjustmentDate !== undefined && (
            <>
              <Input
                type="date"
                value={readjustmentDate}
                onChange={handleReadjustmentDate}
              />
            </>
          )}
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui coparticipação atualmente?</p>
          {selectedCopay !== undefined && (
            <>
              <Button 
                className={`btnBig-yes col-12 ${selectedCopay === "Sim" ? "active" : ""}`} 
                onClick={() => handleCopay("Sim")}>
                  
                Sim
                  
              </Button>
              <Button 
                className={`btn-no col-12 ${selectedCopay === "Não" ? "active" : ""}`} 
                onClick={() => handleCopay("Não")}>
                
                Não
                
              </Button>
            </>
          )}
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Custeará plano para funcionários?</p>
          {planForEmployees !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${planForEmployees === "Sim" ? "active" : ""}`} 
                onClick={() => handlePlanForEmployees("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${planForEmployees === "Não" ? "active" : ""}`} 
                onClick={() => handlePlanForEmployees("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Custeará plano para dependentes?</p>
          {planForDependents !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${planForDependents === "Sim" ? "active" : ""}`} 
                onClick={() => handlePlanForDependents("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${planForDependents === "Não" ? "active" : ""}`} 
                onClick={() => handlePlanForDependents("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Custeará plano para dependentes?</p>
          {residentsFromElsewhere !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${residentsFromElsewhere === "Sim" ? "active" : ""}`} 
                onClick={() => handleResidentsFromElsewhere("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${residentsFromElsewhere === "Não" ? "active" : ""}`} 
                onClick={() => handleResidentsFromElsewhere ("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
        {!hasBranchesLoaded && (
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui filiais?</p>
          {hasBranches !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${hasBranches === "Sim" ? "active" : ""}`} 
                onClick={() => handleHasBranches("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${hasBranches === "Não" ? "active" : ""}`} 
                onClick={() => handleHasBranches("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
        )}
        {!registeredEmployeesTotalLoaded && (
        <div className="mt-5 col-12 flexOptions">
          <p>Total de funcionários registrados</p>
          {registeredEmployeesTotal !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Digite aqui o total de funcionários registrados"
                value={registeredEmployeesTotal}
                onChange={handleRegisteredEmployeesTotal}
              />
            </>
          )}
        </div>
        )}
        {!interestedEmployeesTotalLoaded && (
        <div className="mt-5 col-12 flexOptions">
          <p>Total de funcionários interessados</p>
          {interestedEmployeesTotal !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Digite aqui o total de funcionários interessados"
                value={interestedEmployeesTotal}
                onChange={handleInterestedEmployeesTotal}
              />
            </>
          )}
        </div>
        )}
        {!currentHealthPlanLoaded && (
        <div className="mt-5 col-12 flexOptions">
          <p>Plano de saúde atual</p>
          {currentHealthPlan !== undefined && (
            <>
              <Input
                type="text"
                placeholder="Digite o nome do seu plano de saúde atual"
                value={currentHealthPlan}
                onChange={handleCurrentHealthPlan}
              />
            </>
          )}
        </div>
        )}
        {!healthPlanOperatorLoaded && (
        <div className="mt-5 col-12 flexOptions">
          <p>Categoria</p>
          {healthPlanOperator !== undefined && (
            <>
              <Input
                type="text"
                placeholder="Digite o nome da operadora do seu plano de saúde"
                value={healthPlanOperator}
                onChange={handleHealthPlanOperator}
              />
            </>
          )}
        </div>
        )}
        {!residentCitiesLoaded && (
        <div className="mt-5 col-12 flexOptions">
          <p>Cidades dos residentes de outras localidades</p>
          {residentCities !== undefined && (
            <>
              <Input
                type="text"
                placeholder="Digite as cidades dos funcionários"
                value={residentCities}
                onChange={handleResidentCities}
              />
            </>
          )}
        </div>
        )}
        {!inactivesLoaded && (
        <div className="mt-2 col-12 flexOptions">
          <p>Possui inativos (demitidos ou aposentados)?</p>
          {inactives !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Informe o número de inativos"
                value={inactives}
                onChange={handleInactives}
              />
            </>
          )}
        </div>
        )}
        {!suspendedLoaded && (
        <div className="mt-2 col-12 flexOptions">
          <p>Possui afastados?</p>
          {suspended !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Informe o número de afastados"
                value={suspended}
                onChange={handleSuspended}
              />
            </>
          )}
        </div>
        )}
        {!longTermInpatientsLoaded && (
        <div className="mt-2 col-12 flexOptions">
          <p>Possui internados de longa permanência?</p>
          {longTermInpatients !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Informe o número de internados de longa permanência"
                value={longTermInpatients}
                onChange={handleLongTermInpatients}
              />
            </>
          )}
        </div>
        )}
        {!specialChildrenLoaded && (
        <div className="mt-2 col-12 flexOptions">
          <p>Possui filhos especiais?</p>
          {specialChildren !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Informe o número de crianças que necessitam de cuidados especiais"
                value={specialChildren}
                onChange={handleSpecialChildren}
              />
            </>
          )}
        </div>
        )}
        {!pregnantCasesLoaded && (
        <div className="mt-2 col-12 flexOptions">
          <p>Possui casos de gestantes?</p>
          {pregnantCases !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Informe o número de gestantes"
                value={pregnantCases}
                onChange={handlePregnantCases}
              />
            </>
          )}
        </div>
        )}
        {!highCostPatientsLoaded && (
        <div className="mt-2 col-12 flexOptions">
          <p>Doentes crônicos, tratamento de alto custo, oncológico ou home care?</p>
          {highCostPatients !== undefined && (
            <>
              <Input
                type="number"
                placeholder="Informe o número de colaboradores com essas necessidades"
                value={highCostPatients}
                onChange={handleHighCostPatients}
              />
            </>
          )}
        </div>
        )}
        {!ongoingSurgeryCasesLoaded && (
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui casos de indicação de cirurgias em andamento?</p>
          {ongoingSurgeryCases !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${ongoingSurgeryCases === "Sim" ? "active" : ""}`} 
                onClick={() => handleOngoingSurgeryCases("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${ongoingSurgeryCases === "Não" ? "active" : ""}`} 
                onClick={() => handleOngoingSurgeryCases("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
        )}
        {!cidLoaded && (
        <div className="d-flex mt-2 col-12 flexOptions">
          <p>Possui CID?</p>
          {cid !== undefined && (
            <>
              <Button 
                className={`btn-yes col-12 ${cid === "Sim" ? "active" : ""}`} 
                onClick={() => handleCid("Sim")}>
                
                Sim
                
              </Button>
              <Button 
                className={`btn-no col-12 ${cid === "Não" ? "active" : ""}`} 
                onClick={() => handleCid("Não")}>
                  
                Não
                
              </Button>
            </>
          )}
        </div>
        )}
      </div>
      <Footer />
    </AportStyle>
  );
};

export default FormAport;
