import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Order = () => {
  const [formData, setFormData] = useState({
    address: '',
    fullName: '',
    paymentMethod: '',
  });
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recaptchaVerified) {
      // Здесь должна быть логика отправки данных формы, например, на почту
      setOrderSubmitted(true);
    } else {
      alert('Пожалуйста, подтвердите, что вы не робот.');
    }
  };

  const handleRecaptcha = (value) => {
    // Здесь должна быть логика проверки Recaptcha
    setRecaptchaVerified(true);
  };

  return (
    <div>
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Адрес:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ФИО:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Способ оплаты:
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Выберите способ оплаты</option>
            <option value="creditCard">Кредитная карта</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Наличные при получении</option>
          </select>
        </label>
        <ReCAPTCHA
          sitekey="ВАШ_КЛЮЧ_RECAPTCHA"
          onChange={handleRecaptcha}
        />
        <button type="submit">Оформить заказ</button>
      </form>
      {orderSubmitted && <p>Ваш заказ успешно оформлен и отправлен на почту.</p>}
    </div>
  );
};

export default Order;
