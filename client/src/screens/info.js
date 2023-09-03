import React from "react";
import NavBar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function info() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let navigate = useNavigate();
  const placedorder = () => {
    toast.success('Order Placed SuccessFully', {
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
    navigate("/");
    alert("Order placed Successfully")
  };
  const cancelOrder = () => {
    alert("Order Cancelled");
    // return(
    //   <>
    //   <Alert>
    //     <Alert.Heading>Order</Alert.Heading>
    //   </Alert>
    //   </>
    // );
  };
  return (
    <>
      <div className="signup">
        <div>
          <NavBar />
        </div>
        <div className="conatiner">
          <form
            className="w-50 m-auto mt-5 rounded"
            style={{
              background: "rgba( 0, 0, 0, 0.5 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
              backdropFilter: "blur( 7.5px )",
              WebkitBackdropFilter: "blur( 7.5px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >

            <div className="form-outline mb-4 w-75 m-auto mt-4">
              <textarea
                class="form-control"
                id="form6Example7"
                rows="4"
              ></textarea>
              <label
                className="form-label"
                htmlFor="form6Example4"
                style={{ color: "white" }}
              >
                Address
              </label>
            </div>
            {/* <!-- Email input --> */}
            {/* <!-- Number input --> */}
            <div className="form-outline mb-4 w-75 m-auto mt-4">
              <input
                type="number"
                id="form6Example6"
                className="form-control"
              />
              <label
                className="form-label"
                htmlFor="form6Example6"
                style={{ color: "white" }}
              >
                Phone
              </label>
            </div>
            {/* <!-- Submit button --> */}
            <button
              type="submit"
              className="btn btn-success m-3"
              onClick={placedorder}
            >
              Place Order
            </button>
           
            <Link
              to="/"
              className="m-3 mx-1 btn btn-danger"
              onClick={cancelOrder}
            >
              Cancel Order
            </Link>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}