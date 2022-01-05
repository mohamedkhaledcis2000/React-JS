import React from "react";
import image1 from "../../images/image1.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="firstsection">
      <div className="yourwork">
        <div className="container">
          <div className="row">
            <div className=" col-sm-12 col-md-6 col-lg-6">
              <div className="workone">
                <h1>
                  Give Your Workout <br />A New Style!
                </h1>
                <p>
                  Success isnt always about greatness. Its about consistency.
                  <br /> Consistent hard work gains success.Greatness will come.
                </p>
                <button type="button" className="btn btn-danger">
                  Explore Now &#8594;
                </button>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-6">
              <div>
                <img src={image1} alt="no image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
