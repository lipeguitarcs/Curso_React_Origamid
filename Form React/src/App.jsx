
import { Status } from './components/status/Status.jsx';
import FormBorn from './pages/form/FormBorn.jsx';
import FormGener from './pages/form/FormGener.jsx';
import FormBody from './pages/form/FormBody.jsx';
import FormSmoke from './pages/form/FormSmoke.jsx';
import FormMass from './pages/form/FormMass.jsx';
import FormEnd from './pages/form/FormEnd.jsx';
import { FormOccupation } from './pages/form/FormOccupation.jsx';
import FormAport from './pages/form/FormAport.jsx';
import Congratulation from './pages/congratulation/Congratulation.jsx';
import RoutesJS from './routes/routes.js';
import Contact from './contact.js';

function App() {
  return (
    <div className="App h-100">
      <div className='h-100 d-flex'>
        <Status />
        <div className='column-information h-100'>
          <RoutesJS />
        </div>
      </div>

    </div>
  );
}

export default App;
