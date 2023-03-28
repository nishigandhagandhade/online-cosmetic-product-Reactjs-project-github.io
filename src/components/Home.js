import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import ProductsCard from './ProductsCard';
import ProductData from '../ProductData';


const Home = () => {
    return (
        <>
            <div className='home'>

                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={'https://media.womensweekly.com.sg/public/2017/11/Cute-Press.gif'} class="img-fluid" alt="back3 image" />
                        </div>
                        <div class="carousel-item">
                            <img src={'assetes/images/back1.jpg'} class="d-block w-100" alt="back1 image" />
                        </div>
                        <div class="carousel-item">
                            <img src={'assetes/images/back2.jpg'} class="d-block w-100" alt="back2 iamge" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            {/* -------------------------------------------------latest Product-------------------------------------- */}

            <div className='latest container'>
                <div className='row mt-3'>
                    <div className='col-md-4 latest-cols mt-5'>
                        <div class="card" style={{ 'width': '26rem' }} data-aos="zoom-in" >
                            <img src="assetes/images/latest.jpg" class="card-img-top" alt="latest image" />
                            <div className='overly'>
                                <p className=' para text-center'>Nail Polish Weekend<br />Special 25% OFF</p>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-4 latest-cols mt-5'>
                        <div class="card" style={{ 'width': '25rem' }} data-aos="zoom-in">
                            <img src="assetes/images/latest1.jpg" class="card-img-top" alt="latest1 image" />
                            <div className='overly'>
                                <p className=' para text-center'>Get Extra 50% OFF<br />New Arrivals</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 latest-cols mt-5'>
                        <div class="card" style={{ 'width': '25rem' }} data-aos="zoom-in">
                            <img src="assetes/images/latest2.jpg" class="card-img-top" alt="latest2 image" />
                            <div className='overly'>
                                <p className='para text-center'>Hot This Week<br />$15.55 off Special makeup-kit </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* --------------------------------------------------------------------product overview--------------------------------- */}

            <div className='product container'>
                <h1 className='text-center mt-5'>Product Overview</h1>

                <div className='row'>
                    {

                        ProductData.map((cval,index)=>{

                            return(


                                <ProductsCard
                                
                                id = {cval.id}
                                name = {cval.name}
                                cover = {cval.cover}
                                color ={cval.color}
                                price = {cval.price}
                                item = {cval}


                                />
                            )
                        })

                    }
                </div>
            </div>

            {/* ------------------------------------------------------makeup image--------------------------------- */}
            <div className='makeup container-fluid mt-4'>

                <img src={'assetes/images/makeup.jpg'} class="img-fluid" alt="..." />

            </div>


            {/* ------------------------------------------------------Abouts constiner------------------------- */}
            <div className='About container'>

                <h1 className='text-center mt-4'>Abouts Me</h1>

                <div class="row g-0 bg-light position-relative mt-2" >
                    <div class="col-md-6 mb-md-0 p-md-4" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={'assetes/images/about.jpg'} class="w-100" alt="..." id='image1' />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <h4 class="mt-0" style={{ 'fontSize': '2.3rem' }}>Our Story</h4>
                        <p style={{ 'color': '#aba09b' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris consequat consequat enim, non auctor massa ultrices non.
                            Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Maecenas varius egestas diam, eu sodales metus scelerisque congue.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
                            Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
                            Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.<br /><br />
                            Donec gravida lorem elit, quis condimentum ex semper sit amet.
                            Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
                            Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
                            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
                            Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem.
                            Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum,
                            et maximus enim ligula ac ligula.
                        </p>
                    </div>
                </div>


                <div class="row g-0 bg-light position-relative mt-5">
                    <div class="col-md-6 p-4 ps-md-0">
                        <h4 class="mt-0" style={{ 'fontSize': '2.3rem' }}>Our Mission</h4>
                        <p style={{ 'color': '#aba09b' }}>Mauris non lacinia magna. Sed nec lobortis dolor.
                            Vestibulum rhoncus dignissim risus, sed consectetur erat.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida.
                            Praesent sed nunc fermentum mi molestie tempor.
                            Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris.
                            Sed in ipsum tempor, consequat odio in, porttitor ante.
                            Ut mauris ligula, volutpat in sodales in, porta non odio.
                            Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis.
                            Proin at gravida ante. Mauris auctor purus at lacus maximus euismod.
                            Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.<br /><br />
                            Creativity is just connecting things. When you ask creative people how they did something,
                            they feel a little guilty because they didn't really do it, they just saw something.
                            It seemed obvious to them after a while.
                        </p>
                    </div>
                    <div class="col-md-6 mb-md-0 p-md-4" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={'assetes/images/about1.jpg'} class="w-100" alt="..." id='image2' />
                    </div>
                </div>
            </div>



            {/* ----------------------------------------------------footer-----------------------------------*/}
            <div className='footer container-fluid'>
                <div className='row'>
                    <div className='col-md-3 footer-cols mt-5'>
                        <h5>OUR LOCATION</h5>
                        <p className='mt-4 footer-text'><i class="fa-solid fa-location-dot"></i> 446 Ramblewood St.<br /><br />Gurnee, IL 60031</p>
                    </div>

                    <div className='col-md-3 footer-cols mt-5'>
                        <h5>REACH US</h5>
                        <p className='mt-4 footer-text'><i class="fa-solid fa-envelope"></i>  info@nishigandha.com <br /><br />
                            <i class="fa-solid fa-phone"></i>+91 8830270985</p>

                    </div>

                    <div className='col-md-2 footer-cols mt-5'>
                        <h5>INFO LINKS</h5>
                        <p className='mt-4 footer-text'>Lipstick<br /> Nail-Paint <br />Mascara</p>
                    </div>

                    <div className='col-md-2 footer-cols mt-5'>
                        <h5>HELP DESK</h5>
                        <p className='mt-4 footer-text'>Eyeliner<br />Cosmetic<br />Matte lipstick</p>
                    </div>

                    <div className='col-md-2 footer-cols mt-5'>
                        <h5>WE ARE SOCIAL</h5>
                        <p className='footer-text' id='media'><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-whatsapp"></i> <i class="fa-brands fa-youtube"></i>
                        </p>
                    </div>
                    <hr className='hr' />
                    <div className='col-md-4 bottom-cols'>
                        <p className='text-center my-5 footer-text'>Copyright © 2020 Beaux. Product by Cosmatic Product</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
