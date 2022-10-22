
import './App.css';
import AppRouter from './router/AppRouter';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <BrowserRouter>
      <div className="topnav">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/tabla'> Tabla</NavLink>
        <NavLink to='/formulario'>Formulario</NavLink>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AppRouter />
          </div>
        </div>
      </div>

    </ BrowserRouter>
  );
}

export default App;
