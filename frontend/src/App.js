import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import Home from './components/Home';
import MyServices from './components/MyServices';
import StatusServices from './components/StatusServices';
import MyServicesVolunteer from './components/MyServicesVolunteer';
import AvailableServices from './components/AvailableServices';
import NotFound from './components/NotFound';

function App() {
  let user = localStorage.getItem('id');
  if (user === undefined || !user) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  } else if (user) {
    let nivel_usuario = localStorage.getItem('nivel_usuario');
    if (nivel_usuario == '0') {
      // Se for voluntário
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meus-servicos" component={MyServicesVolunteer} />
            <Route path="/status-services" component={StatusServices} />
            <Route path="/servicos-disponiveis" component={AvailableServices} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      // Se for vulnerável
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meus-servicos-vulneravel" component={MyServices} />
            <Route path="/status-services" component={StatusServices} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
