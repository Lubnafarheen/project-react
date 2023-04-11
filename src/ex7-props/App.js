import React from 'react';
import Menu from './Menu';
import Product from './Product';

const App = () => {

    const menus = [
        {id:1, name: 'Indian Jewellery', path: "/home", active: 'active'},
        {id:2, name: 'Login', path: "/login", active: ''},
        {id:3, name: 'Product', path: "/products", active: ''},
        {id:4, name: 'Cart', path: "/items", active: ''}
];

const productList =[
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

    return (
        <div className='container-fluid'>
            <Menu menuList={menus} />
            <br />
            <div className='container card-group'>
                <div className='row'>

                    {
                        productList.map(product => {
                            return <Product data = {product}/>
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default App;