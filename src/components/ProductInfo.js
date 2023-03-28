import React from 'react'
import ProductData from '../ProductData'
import { NavLink, useParams } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';

const ProductInfo = () => {


    const { id } = useParams();

    console.log(id)

    return (
        <>

            <h1 className='text-center'>Product Information</h1>

            {

                ProductData.map((cval) => {

                    if (id == cval.id) {

                        return (

                            <>


                                <div class="row g-0 position-relative mt-4">
                                    <div class="col-md-6 mb-md-0 p-md-4">
                                        <img src={cval.cover} class="w-100" alt="Product image" className='productinfoimg' />
                                    </div>
                                    <div class="col-md-6 p-4 ps-md-0">
                                        <p className='sale'>Sale</p>
                                        <h4 class="mt-0 text-dark">Name : {cval.name}</h4>

                                        <h6 className='price'>Price : {cval.price}</h6>

                                        <p>
                                            <i class="icon fa-solid fa-star"></i>
                                            <i class="icon fa-solid fa-star"></i>
                                            <i class="icon fa-solid fa-star-half-stroke"></i>
                                            <i class="icon fa-solid fa-star"></i>
                                        </p>

                                        <Badge bg="success">Color : {cval.color}</Badge>
                                        <p>
                                            {cval.description}
                                        </p>
                                        <p>
                                            {cval.description}
                                        </p>
                                        <p>
                                            {cval.description}
                                        </p>





                                        <NavLink to={'/'}> <button className='btn btn-primary'><i class="fa-solid fa-cart-shopping"></i>
                                            Add To Cart</button>
                                        </NavLink>
                                    </div>
                                </div>

                            </>

                        )
                    }


                })

            }

        </>
    )
}

export default ProductInfo
