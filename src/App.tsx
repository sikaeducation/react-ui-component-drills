import './App.scss';
import {Routes, Route, Link} from 'react-router-dom';
import ViewIndex from './views/ViewIndex';
import ViewComponent from './views/ViewComponent';

function App() {
  const components = [{
    id: "toggle",
    name: "Toggle",
  }, {
    id: "input-field",
    name: "InputField",
  }] as const

  return (
    <div className="App">
      <header className="App-header">
        <h1><Link to="/">React UI Library</Link></h1>
      </header>
      <nav>
        <ul>
          {components.map(({id, name} : {id: string; name: string; }) => (
            <li key={id} className="component-link">
              <Link to={`/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Routes>
          <Route
            element={<ViewIndex />}
            path="/"
          />
          <Route
            element={<ViewComponent />}
            path=":componentId"
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
