// pages/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Загрузите товары из корзины из локального хранилища или базы данных
    const fetchCart = async () => {
      // Здесь должен быть ваш код для загрузки данных
    };

    fetchCart();
  }, []);

  // Функция для удаления товара из корзины
  const removeFromCart = (productId) => {
    // Здесь должен быть ваш код для удаления товара
  };

  // Функция для подсчета итоговой стоимости товаров в корзине
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h1>Корзина</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}₽
            <button onClick={() => removeFromCart(product.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <h2>Итого: {calculateTotal()}₽</h2>
    </div>
  );
};

export default Cart;
