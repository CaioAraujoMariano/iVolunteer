import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import Home from './components/Home';
import MyServices from './components/MyServices';
import StatusServices from './components/StatusServices';
import MyServicesVolunteer from './components/MyServicesVolunteer';
import AvailableServices from './components/AvailableServices';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meus-servicos" component={MyServices} />
        <Route path="/status-services" component={StatusServices} />
        <Route path="/perfil" component={Profile} />
        <Route path="/voluntario" component={MyServicesVolunteer} />
        <Route path="/servicos-disponiveis" component={AvailableServices} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
