import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const ProductsCard = (props) => {

    const { addItem } = useCart();

    return (
        <>
            <div className='col-md-3 product-cols mt-5'>

                <div class="card1" style={{ "width": '18rem' }} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={props.cover} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h6 class="card-title">{props.name}<span className="heart"><i class="fa-solid fa-heart"></i></span></h6>
                        <p className='card-text'>
                            <i class="icon fa-solid fa-star"></i>
                            <i class="icon fa-solid fa-star"></i>
                            <i class="icon fa-solid fa-star"></i>
                            <i class="icon fa-solid fa-star-half-stroke"></i>
                            <i class="icon fa-solid fa-star"></i><br />
                            <p>{props.price}</p>

                        </p>
                        <a href="#" class="btn btn-primary" onClick={() => addItem(props.item)}><i class="fa-solid fa-cart-shopping"></i> Add card</a>
                        <NavLink to={`/productinfo/${props.id}`}><a href="#" class="btn1 btn btn-primary">Know More</a></NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductsCard
