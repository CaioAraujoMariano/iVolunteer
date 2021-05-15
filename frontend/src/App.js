import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css';
import Home from './components/Home';
import MyServices from './components/MyServices';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meus-servicos" component={MyServices} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
