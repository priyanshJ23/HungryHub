/* eslint-disable react/jsx-no-undef */

import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Avatar, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const user = {
    avatar:
      "https://i.pinimg.com/originals/17/f3/9c/17f39c6f7a4a5457f39dba2368f0d077.jpg",
    name: "Hello"
  };
  const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
      height: 50,
      width: 50
    }
  }));
  
export default function Navbar(props) {
      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')

        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const items = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">HungryHub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                            </li>
               
                            {(localStorage.getItem("token")) ?
                                
                                <li className="nav-item">
                                   <div className="btn bg-white text-primary mx-2 " onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length} overlap="rectangular">
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                                   
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-primary mx-1 " to="/login">Login</Link>
                                <Link className="btn bg-white text-primary mx-1" to="/signup">Signup</Link>
                            </form> :
                            <div>
                 
                                
                             <div
                               style={{
                                 display: "flex",
                                 flexDirection: "row-reverse"
                               }}
                             >
                               <Button
                                 aria-controls="fade-menu"
                                 aria-haspopup="true"
                                 onClick={handleClick}
                                 startIcon={<ArrowDropDownIcon />}
                               >
                                 {user.name}
                                 <Avatar
                                   className={classes.avatar}
                                   src={user.avatar}
                                   style={{
                                     marginLeft: "10px"
                                   }}
                                 />
                               </Button>
                             </div>
                       
                             <Menu
                               id="fade-menu"
                               anchorEl={anchorEl}
                               keepMounted
                               open={open}
                               onClose={handleClose}
                               TransitionComponent={Fade}
                             >
                               <MenuItem component={Link} to="/myorder">My Orders</MenuItem>
                               <MenuItem onClick={handleLogout}>Logout</MenuItem>
                             </Menu>
                           </div>
                            // <div>

                            //     <div className="btn bg-white text-primary mx-2 " onClick={loadCart}>
                            //         <Badge color="secondary" badgeContent={items.length} overlap="rectangular">
                            //             <ShoppingCartIcon />
                            //         </Badge>
                            //         Cart
                            //     </div>

                                // {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

                                // <button onClick={handleLogout} className="btn bg-white text-primary" >Logout</button></div>}
                      }
                    </div>
                </div>
            </nav>
        </div>
    )
}
