// src/App.js
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
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.minPrice) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <header className="text-center py-4">
        <h1 className="text-2xl font-bold text-blue-600">🛒 WwWMarket</h1>
      </header>

      <main>
        {userData ? (
          <>
            <UserProfile user={userData} />
            <AddListingForm />
            <Filters onFilterChange={applyFilters} />
            <ProductList products={filteredProducts} />
          </>
        ) : (
          <p className="text-center text-gray-500">Загрузка данных...</p>
        )}
      </main>

      <footer className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} WwWMarket
      </footer>
    </div>
  );
}

export default App;