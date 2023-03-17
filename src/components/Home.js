import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello Home</h1>
            <button onClick={()=>navigate('order-summary')}>Place Order</button>
        </div>
    );
}

export default Home;