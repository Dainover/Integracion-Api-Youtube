// components/Header/Header.jsx
import styles from './Header.module.css';

const Header = () => {
  return (
    <header >
      <div className="header">
        <h1 className="title">Consultorio Adientitos</h1>
        <div className="header-right">
          <button className="buscar-button">Buscar</button>
          <button className="registro-button">Registrate</button>
        </div>
      </div>

      <main className="main-content">
        <h2 className="medico-title">¿Eres médico?</h2>
      </main>
       
    </header>
  );
};

export default Header;