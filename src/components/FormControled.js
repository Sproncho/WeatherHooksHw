import React, {Component, useState} from 'react';

const FormControled = ({getWeather}) => {

    const [city, setCity] = useState('');
    const handleClick = () => {
        getWeather(city);
        setCity('');
    }

    const handleChange = e => {
        setCity(e.target.value);
    }


    return (
        <div>
            <input onChange={handleChange} type='text' value={city} placeholder='City'/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    );

}

export default FormControled;