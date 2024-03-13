import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import EnviarMail from './EnviarMail';
import Enviados from './Enviados';
import Papelera from './Papelera';

// Array de rutas
const rutas = [
    { path: '/', nombre: 'Enviar', componente: EnviarMail },
    { path: '/enviados', nombre: 'Enviados', componente: Enviados },
    { path: '/papelera', nombre: 'Papelera', componente: Papelera }
];

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {rutas.map((ruta, index) => (
                            <li key={index}>
                                <NavLink to={ruta.path} activeClassName="active" exact>
                                    {ruta.nombre}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Switch>
                    {rutas.map((ruta, index) => (
                        <Route key={index} path={ruta.path} component={ruta.componente} exact />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
