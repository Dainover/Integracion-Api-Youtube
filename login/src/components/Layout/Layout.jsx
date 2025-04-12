// components/Layout/Layout.jsx
import styles from './Layout.module.css';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContainer}>
        <LoginForm />
        <div className={styles.imageContainer}>
          <img 
            src="../../assets/images/dientitos.jpg" 
            alt="Clínica dental Dientitos" 
            className={styles.clinicImage}
          />
        </div>
      </div>
      <footer className={styles.footer}>
        Dientitos tu mejor opción
      </footer>
    </div>
  );
};

export default Layout;