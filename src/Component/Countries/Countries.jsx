import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[]);

    const colBox={
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <div style={colBox}>
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;