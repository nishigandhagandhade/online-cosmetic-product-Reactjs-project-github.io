import React from 'react'
import { useCart } from 'react-use-cart'


const Cart = () => {

  const { removeItem,updateItemQuantity,items, totalItems, totalUniqueItems, cartTotal } = useCart();

  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Cart</h1>

        <table class="table table-striped table-hover">
          <tr>

            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>color</th>
            <th>Action</th>

          </tr>

          {

            items.map((cval) => {

              return (

                <>

                  <tr>

                    <td>{cval.id}</td>
                    <td><img src={cval.cover} height={'100'} width={'100'} alt='...' /></td>
                    <td>{cval.name}</td>
                    <td>{cval.price}</td>
                    <td>{cval.color}</td>

                    <td><button onClick={()=>updateItemQuantity(cval.id,cval.quantity + 1)}>+</button></td>

                    <td>{cval.quantity}</td>

                    <td><button onClick={()=>updateItemQuantity(cval.id,cval.quantity - 1)}>-</button></td>

                    <td><button className='btn2 btn btn-dark'onClick={()=>removeItem(cval.id)}>Remove</button></td>




                  </tr>
                </>
              )


            })
          }

          <h3>Total = {cartTotal}</h3>

        </table>

      </div>



    </>
  )
}

export default Cart
