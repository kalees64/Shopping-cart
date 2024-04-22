import React from "react";

const Cart = ({handleCart,cartProduuts,handleDelete,amount})=>{

    // console.log(cartProduuts)

    return(
        <div className='container-fluid position-absolute bg-secondary bg-opacity-50 d-flex justify-content-center ' style={{height:'100vh'}}>
        <div className='container bg-white  m-5 rounded text-center overflow-scroll  '>
            <div className='navbar px-5 '>
              <h2 className='navbar-brand'>Cart</h2>
              <button className='btn-close' onClick={handleCart}></button>
            </div>
            <div className='p-4 table-responsive-sm '>
              <table className='table table-striped table-sm  '>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    {cartProduuts.length > 0?
                        cartProduuts.map((product)=>{
                            
                            return(
                                <tr key={product.id}>
                                    <td><img src={product.image} alt={product.brand} width={200} height={200}/></td>
                                    <td className=" text-center ">{product.phone_name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.mrp}</td>
                                    <td><button className="btn btn-danger " onClick={()=>handleDelete(product.id)}>Delete</button></td>
                                </tr>
                            )
                        }):
                        <tr>
                          <td colSpan={5}>No Products are Selected</td>
                        </tr>
                    }
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={5} className=" text-end ">Total Amount : Rs <span className=" text-success ">{amount}</span> </th>
                  </tr>
                </tfoot>
              </table>
            </div>
        </div>
      </div>
    )
}

export default Cart