import React, { useEffect, useState } from 'react';

const Car = () => {

 const [car, setCar] =  useState({brand : 'BMW', model: '2010'});

 useEffect(()=>{
    console.log("use Effect working");
    //setCar({brand : 'Maruti', model: '2000'});
    setCar({...car, brand: 'Tesla', type: 'Automatic'});
 }, []);

    return (
        <div>
            <b>{car.brand} {car.model} {car.type}</b>
        </div>
    );
};

export default Car;