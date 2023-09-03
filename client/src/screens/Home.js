import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')
  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/auth/foodData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      // console.log(response);
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json()
    // console.log(response[1][0].CategoryName)
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])

  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div>
      <div 
      className=" d-flex justify-content-center "
      style={{ marginTop:"100px" }}
      >  {/* justify-content-center, copy this <form> from navbar for search box */}
 
              <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
              <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
            </div>
      </div>
      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat !== []
            ? foodCat.map((data) => {
              // console.log(foodItems)
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems !== [] ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.Name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {/* {console.log(filterItems.url)} */}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
      </div>
      <Footer />
    </div>
  )}



  // {/* <div>
        
  //       <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

  //         <div className="carousel-inner " id='carousel'>
  //           <div className=" carousel-caption  " style={{ zIndex: "9" }}>
  //           <div className='absolute  w-full h-full max-h-[500px] bg-black/40 text-red-200 flex flex-col justify-center'>
  //            <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'><span style={{ color: "white" }}> The   </span><span style={{ color: "orange" }}> Best</span></h1>
  //             <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify'> <span style={{ color: "orange" }}>  Foods    </span><span style={{ color: "white" }}> Delivered </span></h1>
  //           </div>
  //             <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
  //             <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
  //             <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>X</button>
  //           </div>
  //         </div>
  //         <div className="carousel-item active" >
          
  //           <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
  //         </div>
  //         <div className="carousel-item">
  //           <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
  //         </div>
  //         <div className="carousel-item">
  //           <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
  //         </div>
  //       </div>
  //       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
  //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //         <span className="visually-hidden">Previous</span>
  //       </button>
  //       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
  //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //         <span className="visually-hidden">Next</span>
  //       </button>
  //     </div>
  //   </div> */}