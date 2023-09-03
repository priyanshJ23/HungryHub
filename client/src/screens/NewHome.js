import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial'
import data from '../components/data.json'
import About from "../components/About/About"
import Choose from '../components/Choose/Choose'
export default function Home() {
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
          <div className="carousel-inner " id='carousel'>
            <div class=" carousel-caption"style={{ zIndex: "9" }}>    
              <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'><span style={{ color: "white" }}> The   </span><span style={{ color: "darkcyan"}}> Best</span></h1>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'> <span style={{ color: "darkcyan" }}>  Foods    </span><span style={{ color: "white" }}> Delivered </span></h1>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
              </div>
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <About/>
      <Choose/>
       <div id='horse'>
              <h2 id='horse1'>Testimonials</h2>
              <p id='horse2'>This is what our client are saying</p>
       </div>
      <Testimonial testimonialData={data}/>
      <Footer />
    </div>
  )}

