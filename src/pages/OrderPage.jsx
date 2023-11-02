import React, { useState } from 'react';
import freezerImg from '../img/holodilnik.jpg';
import styles from '../styles/OrderPage.module.css';

function OrderPage({ product }) {
  const [customerName, setCustomerName] = useState('');
  const [customerNameError, setCustomerNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я ]+$/;
    if (!nameRegex.test(name) || name.trim() === '') {
      setCustomerNameError('Поле обязательно для заполнения.(Имя должно содержать только буквы)');
      setIsFormValid(false);
      return false;
    } else {
      setCustomerNameError('');
      return true;
    }
  };


  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError('Поле обязательно для заполнения. (Некорректный формат номера телефона)');
      return false;
    } else {
      setPhoneNumberError('');
      return true;
    }
  };

  const validateQuantity = (quantity) => {
    const quantityNum = parseInt(quantity, 10);
    if (isNaN(quantityNum) || quantityNum <= 0) {
      setQuantityError('Количество должно быть больше 0.');
      return false;
    } else {
      setQuantityError('');
      return true;
    }
  };

  const updateCustomerName = (e) => {
    setCustomerName(e.target.value);
    validateName(e.target.value);
  };

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    validatePhone(e.target.value);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
    validateQuantity(e.target.value);
  };

  React.useEffect(() => {
    validateForm();
  }, [customerNameError, phoneNumberError, quantityError]);

  const validateForm = () => {
    const nameIsValid = customerNameError === '' && customerName.trim() !== '';
    const phoneIsValid = phoneNumberError === '' && phoneNumber.trim() !== '';
    const quantityIsValid = quantityError === '' && quantity !== '' && !isNaN(quantity) && quantity > 0;

    setIsFormValid(nameIsValid && phoneIsValid && quantityIsValid);
  };


  const handleOrder = () => {
    console.log('Заказ оформлен:', { customerName, phoneNumber, quantity });
  };

  return (
    <div className={styles.orderPage}>
      <div className={styles.productInfoPage}>
          <div>
              <img className={styles.productImage} src={freezerImg} alt='' />
          </div>
          <div className={styles.productInfo}>
            <h2 className={styles.productName}>Холодильник Indesit IBH 20</h2>
            <p className={styles.productDescription}>Встраиваемый холодильник Indesit IBH 20 глубиной 54,5 см,
                шириной 54 см и высотой 193,5 см имеет полезный объем 289 литров.
                Перенавешиваемые двери позволят вам подстроить использование бытовой техники под себя.
                Четыре полки из закаленного стекла холодильного отделения смогут вместить необходимые вам продукты.
                Морозильное отделение холодильника Indesit IBH 20 оснащено системой охлаждения Semi-No Frost,
                а также тремя ящиками и формой для льда. Уровень шума в 40 децибел сделает встроенный
                холодильник тихим помощником, а энергоэффективность класса А позволит экономить на счетах за электричество.
            Глубина, см 54.5 . Ширина, см 54 . Высота, см 193.5 . Гарантия 1 год
            </p>
            <p className={styles.productPrice}>Цена: <span className={styles.productPriceNumber}>52 000</span> сом</p>
          </div>
      </div>
      <div className={styles.orderForm}>
        <h2 className={styles.productName}>Оформить заказ</h2>
        <div className={styles.orderFormInput}>
          <label className={styles.nameOfInput}>
            Имя
            {customerNameError && <p className={styles.error}>{customerNameError}</p>}
            <input
              type="text"
              value={customerName}
              onChange={updateCustomerName}
              placeholder="Введите ваше имя"
              className={styles.productInput}
            />
          </label>
          <label className={styles.nameOfInput}>
            Номер телефона
            {phoneNumberError && <p className={styles.error}>{phoneNumberError}</p>}
            <input
              type="tel"
              value={phoneNumber}
              onChange={updatePhoneNumber}
              placeholder="Введите ваш телефон"
              className={styles.productInput}
            />
          </label>
          <label className={styles.nameOfInput}>
            Количество
            {quantityError && <p className={styles.error}>{quantityError}</p>}
            <input
              type="number"
              value={quantity}
              onChange={updateQuantity}
              min="1"
              placeholder="Количество"
              className={styles.productInput}
            />
          </label>
          <button
            onClick={handleOrder}
            className={styles.productButton}
            disabled={!isFormValid}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
