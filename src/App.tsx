import React, {ChangeEvent} from 'react';
import './App.css';
import {Routes, Route, useNavigate, BrowserRouter as Router, useParams} from 'react-router-dom';

import Toggle from './Toggle/Toggle';

function App() {
  const navigate = useNavigate()
  const components = [{
    id: "toggle",
    name: "Toggle",
  }]
  const params = useParams()
  const currentComponent = params[0]

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${target?.value}`)
  }

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <select value={currentComponent} onChange={handleChange}>
            {components.map(({id, name}) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </header>
        <Routes>
          <Route
            element={ <Toggle /> }
            path="toggle"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
