import React from 'react';

const Product = (props) => {

    const {price, picture_URL} = props.data;

   
    return (
       
        <div className='col-md-4'>
                        <div className='card p-3 mb-2'>
                            <img src={picture_URL} alt='image1' width = '900' height= '400' className='card-img-top' />
                            <div className='card-body'>
                                <h5>Price : {price}</h5>
                            </div>
                            <div className='card-footer d-grid'>
                                <button className='btn btn-primary'> Add To Cart</button>

                            </div>
                        
                        </div>
                    </div>
    );
};

export default Product;