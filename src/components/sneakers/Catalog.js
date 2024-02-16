import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Catalog.css'

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/product/get-all');
                setProducts(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных о продуктах:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Магазин</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt="Club 100 удалил фото)"></img>
                        <h3>{product.title}</h3>
                        <p>Цена: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;