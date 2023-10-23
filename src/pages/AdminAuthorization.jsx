import React, { useState } from 'react';
import styles from '../styles/AdminAuthorization.module.css';

const AdminAuthorization = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};
    if (!username) validationErrors.username = "Имя пользователя обязательно";
    if (!email) validationErrors.email = "Email обязателен";
    if (!validateEmail(email)) validationErrors.email = "Email недействителен";
    if (!password) validationErrors.password = "Пароль обязателен";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Форма отправлена успешно!');
    }
  };

  const isFormValid = () => {
    return username && validateEmail(email) && password && Object.keys(errors).length === 0;
  };
    return (
        <div>
            <div className={styles.authPage}>
              <h2>Страница авторизации</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Имя пользователя:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Пароль:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <span className={styles.error}>{errors.password}</span>}
                </div>
                <button className={styles.adminAuthorizationButton} type="submit" disabled={!isFormValid()}>Далее</button>
              </form>
            </div>
        </div>
    );
};

export default AdminAuthorization;
