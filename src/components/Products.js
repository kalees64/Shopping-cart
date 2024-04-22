import React from "react";

const Products = ({data,handleClick})=>{
    // console.log(data)
    

    return(
        <section className='flex-grow-1 p-3 '>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-md-4 row-cols-xl-5  g-3 justify-content-center  '>
            {
                data.map((product)=>{
                    return(
                    <div className='col' key={product.id}>
                        <div className='card text-center '>
                        <img className='card-img-top ' src={product.image} alt="Image" />
                        <div className='card-body '>
                            <div className='fw-bolder '>{product.phone_name}</div>
                            <p><b>Rs {product.mrp}</b> <strike>{product.price}</strike></p>
                            <button className='btn btn-primary ' onClick={()=>handleClick(product.id)}>Add to Cart</button>
                        </div>
                    </div>
                    </div>)
                })
            }
            </div>  
        </section>
    )
}

export default Products