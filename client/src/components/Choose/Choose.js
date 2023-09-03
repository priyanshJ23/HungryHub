import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Choose.module.css";
import hamimg from "../Images/Icon/foods.png";
import deliveryimg from "../Images/Icon/delivery-man.jpeg"
import topimg from "../Images/Icon/foodquality.png";

const Choose = () => {
  //Rendering the HeroTwo section
  return (
    <section id="why">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Why choose us</h2>
              <p>This is what makes our product different</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_cards}>
          <Col
            lg={4}
            className={classes.first_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <div className={`${classes.card_one} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={hamimg} alt="Hanmburger" id="img1"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Effortless Ordering:</h5>
                  <p> Ordering from us is a breeze. With just a single click, you can choose from a wide variety of food options and place your order, all from the comfort of your own space.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className={`${classes.card_two} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={deliveryimg} alt="Delivery man" className="img1"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Speedy Delivery:</h5>
                  <p>
                  Our dedicated delivery team ensures swift and reliable food delivery. Expect your food to arrive punctually, precisely at your specified location, and on any day or time that suits your schedule.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            className={classes.last_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.card_three} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={topimg} alt="Thumbs up" className="img1"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Top-notch Quality:</h5>
                  <p>
                  We take pride in delivering top-quality food that not only tastes great but also contributes to your overall health and well-being. Your satisfaction and well-being are our priorities.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default Choose;