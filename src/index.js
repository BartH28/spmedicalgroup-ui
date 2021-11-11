import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { parseJwt, usuarioAutenticado } from '../src/Services/auth';
import {Route , BrowserRouter as Router,Redirect, Switch} from 'react-router-dom';
import Login from '../src/pages/login/login';
import minhasConsultas from './pages/Consultas/minhasConsultas';

const PermissaoComum = ({ component : Component}) => (
  <Route 
  render={(props) =>
    usuarioAutenticado() && parseJwt().role === '2' ? (
      <Component {...props} />
    ) : (
      <Redirect to="login" />
    )
  }
  />
);


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login} />
        <Route path="/consultas" component={minhasConsultas} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
