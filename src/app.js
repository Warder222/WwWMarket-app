import React, { useState, useEffect } from 'react';
import { getUserData } from './utils/auth';
import UserProfile from './components/UserProfile';
import AddListingForm from './components/AddListingForm';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import { mockProducts } from './data/products';

function App() {
  const [userData, setUserData] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    const user = getUserData();
    if (user) {
      setUserData(user);
    }
  }, []);

  const applyFilters = (filters) => {
    let filtered = mockProducts;

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseInt(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseInt(filters.maxPrice)
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>WwWMarket</h1>
      {userData ? (
        <>
          <UserProfile user={userData} />
          <AddListingForm />
          <Filters onFilterChange={applyFilters} />
          <ProductList products={filteredProducts} />
        </>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default App;