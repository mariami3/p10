// pages/Favorites.js
import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Загрузите избранные товары из локального хранилища или базы данных
    const fetchFavorites = async () => {
      // Здесь должен быть ваш код для загрузки данных
    };

    fetchFavorites();
  }, []);

  // Функция для удаления товара из избранного
  const removeFromFavorites = (productId) => {
    // Здесь должен быть ваш код для удаления товара
  };

  return (
    <div>
      <h1>Избранное</h1>
      <ul>
        {favorites.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}₽
            <button onClick={() => removeFromFavorites(product.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
