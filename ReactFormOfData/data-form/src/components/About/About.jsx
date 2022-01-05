import React from "react";
import product4 from "../../images/product-4.jpg";
import "./About.css";
const About = () => {
  return (
    <div class="aboutus">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h2>About Us</h2>
            <hr />
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6">
            <p class="abouttext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              blanditiis magnam molestias quos quasi, vero, recusandae iste
              pariatur modi sapiente nulla dolorem omnis? Illum quidem at quos
              ad! Ipsum, velit? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Soluta, saepe accusantium! Vero culpa beatae vel
              officiis numquam labore minima doloremque iste eos odit!
              Voluptatibus sapiente odit dignissimos tempore illum omnis. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Ea porro
              consequuntur rem ipsum ducimus ullam explicabo accusamus odit
              harum vel illo error qui optio dolor amet, sed illum quae
              quisquam!
            </p>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <img src={product4} alt=" no images" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
