import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Загрузите список товаров с сервера или локального файла
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addToFavorites = (productId) => {
    // Логика добавления товара в избранное
  };

  const filteredProducts = products
    .filter((product) => {
      if (filter !== 'all') {
        return product.category === filter;
      }
      return true;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div>
      <h1>Каталог товаров</h1>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Все категории</option>
        {/* Здесь должны быть опции для каждой категории */}
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link> - {product.price}₽
            <button onClick={() => addToFavorites(product.id)}>В избранное</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
