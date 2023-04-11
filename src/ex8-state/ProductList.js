import React, { useEffect, useState } from 'react';
import Product from '../ex7-props/Product';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const responseData = [
            {
                price : 39,
                picture_URL : 'product1.jpg'
            },
            {
                price : 49,
                picture_URL : 'product2.jpg'
            },
            {
                price : 59,
                picture_URL : 'product3.jpg'
            },
            {
                price : 39,
                picture_URL : 'product4.jpg'
            }
        ];
        setProducts(responseData);
    } , []);
    return (
        <div className='container card-group'>
            <div className='row'>
                {
                    products.map(product => {
                        return <Product data = {product}/>
                    })
                }

            </div>
            
        </div>
    );
};

export default ProductList;