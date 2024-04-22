import React from "react";

const Nav = ({cartCount,handleCart})=>{
    return(
        <nav className='navbar '>
            <div className='container'>
            <a href="#" className='navbar-brand '>VK PHONES</a>
            <button className='btn btn-outline-primary ' onClick={handleCart}>Cart ({cartCount})</button>
            </div>
        </nav>
    )
}

export default Nav