
import TheButton from "./Button";
import React from "react";
import Helmet from "./Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import aboutImage from "../Images/about-image.webp";
import "./About.css"
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Food
                </h1>
                <p> At HungryHub, we believe that great food has the power to bring people together, inspire unforgettable moments, and satisfy more than just your cravings. As a premier food delivery restaurant, we are dedicated to serving you the most delectable dishes right at your doorstep.</p>
    
              <Link  to="/order">
              <TheButton>Order Now</TheButton>
              </Link>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={aboutImage} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;