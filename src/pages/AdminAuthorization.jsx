import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/AdminAuthorization.module.css';
import { useNavigate } from 'react-router-dom';

const AdminAuthorization = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokens, setTokens] = useState(null);
  const [error, setError] = useState('');

  const isFormValid = () => username && password;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setError('Имя пользователя и пароль обязательны');
      return;
    }

    try {
      const response = await axios.post('https://www.kunasyl-backender.org.kg/login/', {
        username,
        password,
      });

      setTokens(response.data.tokens);
      setError('');
      navigate('/admin-page');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Invalid credential, try again');
      } else {
        setError('Не удалось выполнить запрос к серверу');
      }
    }
  };

  return (
    <div className={styles.authPage}>
      <h2 className={styles.authPageTitle}>Страница авторизации</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Имя пользователя:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.adminAuthorizationButton} type="submit" disabled={!isFormValid()}>
          Далее
        </button>
      </form>
      {tokens && <div>Вы успешно авторизованы</div>}
    </div>
  );
};

export default AdminAuthorization;
