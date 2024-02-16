import React, { useEffect } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${product ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                {product && (
                    <>
                        <h2>{product.title}</h2>
                        <img src={product.img} alt="Club 100 удалил фото)))" className="img" />
                        <p>{product.desc}</p>
                        <p>Цена: {product.price}</p>
                        <button onClick={onClose}>Закрыть</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductModal;