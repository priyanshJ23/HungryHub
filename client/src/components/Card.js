
import React, { useState, useRef, useEffect } from "react";
import "./card.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  let data = useCart();
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  const Navigate = useNavigate();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  // console.log(options);
  const dispatch = useDispatchCart();
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;
   
        break;
      }
     
    }
    if(localStorage.getItem("token")){
    toast.success('Item has been added to cart', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      color:"darkcyan"
    });
  }
  else
  {
    alert("Login first")
    Navigate('/login')
  }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.Name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
   
    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.Name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  // <Popup trigger={<button>Add to Cart</button>} position="right center">
  //   <div>Popup content here !!</div>
  // </Popup>
//   return (
  // console.log(food.name);
  return (
    <>
      <div>
        <div
          className="card mt-3"
          style={{ width: "16rem", maxHeight: "1000px" }}
        >
          <img
            // src= {"https://source.unsplash.com/random/300x200/?FriedRice"}
            src={props.ImgSrc}
            className="d-block w-100"
            style={{ height: "150px", objectFit: "fill" }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title fontchange">{foodItem.Name}</h5>
            <p className="card-text des">
              Best Food
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ad? */}
            </p>
            <div className="container w-100 p-0" style={{ height: "38px" }}>
              <select
                className= {`btn btn-outline-info justify-center ms-2`}
                style={{ color: "darkcyan", fontFamily: "Poppins" }}
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(10), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select
                className={`btn btn-outline-info justify-center ms-2`}
                style={{ color: "darkcyan", fontFamily: "Poppins" }}
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
            <hr></hr>
            <div className="fs-5 ml-3 fontchange">
              Total Price:{" "}
              <span className="card_style color">₹{finalPrice}/-</span>
            </div>
            {/* <button className="btn btn-outline-danger justify-center ms-2 font">
              Remove
            </button> */}
            <hr />

            <button
              className={`btn btn-outline-info justify-center ms-2`}
              onClick={handleAddToCart}
              style={{ color: "darkcyan", fontFamily: "Poppins" }}
            >
              Add to Cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}