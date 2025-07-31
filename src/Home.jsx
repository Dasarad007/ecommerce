import React, { useState, useEffect } from 'react';
import './home.css'; 

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const response = await result.json();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Our Products</h1>
      <div className="product-grid">
        {data.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-info">
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price">${item.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
