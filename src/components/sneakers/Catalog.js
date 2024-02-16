
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Catalog.css';
import ProductModal from './ProductModal';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/product/get-all', {
                params: {
                    size: '3',
                    page: page,
                },
            });
            setProducts(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Ошибка при получении данных о продуктах:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page] );

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closeProductModal = () => {
        setSelectedProduct(null);
    };

    const renderPageButtons = () => {
        const buttons = [];

        if (page > 0) {
            buttons.push(
                <button key="prev" onClick={() => handlePageChange(page - 1)}>
                    Назад
                </button>
            );
        }

        if (page < totalPages - 1) {
            buttons.push(
                <button key="next" onClick={() => handlePageChange(page + 1)}>
                    Вперед
                </button>
            );
        }

        return buttons;
    };

    return (
        <div>
            <div className="header-data">
                <h1>Catalog</h1>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        <img src={product.img} alt="Club 100 удалил фото)" />
                        <h3>{product.title}</h3>
                        <p>Цена: {product.price}</p>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {renderPageButtons()}
                <p>Текущая страница: {page + 1}</p>
            </div>

            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={closeProductModal} />
            )}
        </div>
    );
};

export default Catalog;