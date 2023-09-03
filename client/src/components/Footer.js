import React from "react";
import { ListGroup } from "reactstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <h5>HungryHub</h5>
        <p>Best Food in town, try it out!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday-Friday :-</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Saturday-Sunday :-</span>
            <p>4:00pm - 3:00am</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>10th and 15th day of Month :-</span>
            <p>Holiday</p>
          </div>
        </ListGroup>
      </div>
        <div>
          <h5 className="footer__title mb-3">Contact</h5>
          <div className="delivery__time-item border-0 ps-0">
            <span>Address :-</span>
            <p>Abu Road, Jaipur</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Contact :-</span>
            <p>+91 789815454</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Email :-</span>
            <p>HungryHub45@gmail.com</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;