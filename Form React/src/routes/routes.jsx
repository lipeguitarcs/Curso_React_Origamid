import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Congratulation from "../pages/congratulation/Congratulation";
import Status from "../components/status/Status";
import FormAport from "../pages/form/FormAport";
import FormBody from "../pages/form/FormBody";
import FormBorn from "../pages/form/FormBorn";
import FormSmoke from "../pages/form/FormSmoke";
import { FormOccupation } from "../pages/form/FormOccupation";
import FormGener from "../pages/form/FormGener";
import Cobertura from "../pages/resumo/Cobertura";
import Resumo from "../pages/resumo/Resumo";
import FormMass from "../pages/form/FormMass";
import FormEnd from "../pages/form/FormEnd";
import FormTermos from "../pages/form/FormTermos";
import FormUpload from "../pages/form/FormUpload";
import FormSpreadsheet from "../pages/form/FormSpreadsheet";
import FormAge from "../pages/form/FormAge";

const RoutesJS = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={"/simulacao/termos"} />
        </Route>
        <Route path='/simulacao/termos' exact>
          <FormTermos />
        </Route>

        <Route path='/simulacao/1' exact>
          <FormBorn />
        </Route>

        <Route path='/simulacao/2' exact>
          <FormSpreadsheet />
        </Route>

        <Route path="/simulacao/3" exact>
          <FormUpload />
        </Route>

        <Route path="/simulacao/4" exact>
          <FormAport />
        </Route>

        <Route path="/simulacao/5" exact>
          <FormAge />
        </Route>

        <Route path="/simulacao/7" exact>
          <FormEnd />
        </Route>

        <Route path="/simulacao/6" exact>
          <Congratulation />
        </Route>

        <Route path="/congratulation" exact>
          <Congratulation />
        </Route>

        <Route path="/resumo/1" exact>
          <Cobertura />
        </Route>
        <Route path="/resumo/2" exact>
          <Resumo />
        </Route>
      </Switch>

    </Router>
  )
}

export default RoutesJS;