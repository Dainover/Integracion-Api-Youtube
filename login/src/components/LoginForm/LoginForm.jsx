// components/LoginForm/LoginForm.jsx
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Ingresa tus datos para ingresar</h2>
      
      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Usuario</label>
        <input 
          type="text" 
          className={styles.inputField}
          placeholder="Tu usuario" 
        />
      </div>
      
      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Contraseña</label>
        <input 
          type="password" 
          className={styles.inputField}
          placeholder="Tu contraseña" 
        />
      </div>
      
      <button className={styles.submitButton}>Aceptar</button>
      
      <p className={styles.footerText}>Confactamos</p>
    </div>
  );
};

export default LoginForm;