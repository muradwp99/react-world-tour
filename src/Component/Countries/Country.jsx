import { useState } from "react";

const Country = ({country}) => {
    const [visited, setVisited] = useState(false)

    const{name, flags, area, population} = country;

    const boxStyle = {
        border: '1px solid green',
        padding: '25px',
        borderRadius: '25px',
        marginBottom: '10px'
    }


    const handleVisited = () =>{
        setVisited(!visited)
    }


    return (
        <div  style={boxStyle}>
            <img src={flags.png} alt="" />
            <h1>Name: {name.common}</h1>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <button onClick={handleVisited}>{visited? 'Visited': 'Visit Again'}</button>
        </div>
    );
};

export default Country;