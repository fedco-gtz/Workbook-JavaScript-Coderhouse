import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Componentes de interfaz
const Enviar = () => <h2>Interfaz de Envío</h2>;
const Enviados = () => <h2>Interfaz de Enviados</h2>;
const Papelera = () => <h2>Interfaz de Papelera</h2>;

// Componente de router
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/enviar">Enviar</Link>
            </li>
            <li>
              <Link to="/enviados">Enviados</Link>
            </li>
            <li>
              <Link to="/papelera">Papelera</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/enviar">
            <Enviar />
          </Route>
          <Route path="/enviados">
            <Enviados />
          </Route>
          <Route path="/papelera">
            <Papelera />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
