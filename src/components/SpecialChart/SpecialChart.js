import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SpecialChart = () => {
    const [phone, setPhone] = useState([])
    useEffect(()=>{
        axios.get("url")
        .then(data => setPhone(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default SpecialChart;