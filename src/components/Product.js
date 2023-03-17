import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Product(props) {
    return (
       <>
        <div>
            <input placeholder='Enter Search'/>
        </div>

        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new-products">New</Link>
        </nav>
       
        <Outlet/>
       </>
    );
}

export default Product;