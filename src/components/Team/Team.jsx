import React from "react";
import "./Team.css";
// import "react-slideshow-image/dist/styles.css";
import tt1 from "../../assets/tt1.jpg"
import tt2 from "../../assets/tt2.jpg"
import tt3 from "../../assets/tt3.jpg"
import tt4 from "../../assets/tt4.jpg"


const About = () => {
  return (
    <>
      <div id="Team" className="dataTeam">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h4 className="text-white">Meet the crew</h4>
              <h1 className="teamHeading2">
                NFTREALESTATE TEAM
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dataTeam">
        <div className="container">
          <div className="row">
            
            <div className="col-3 mx-auto cardCustom">
              <div className="card ">
                <img src={tt1} className="card-img-top img-cus-card" alt="..." />
                <div className="card-body bg-black cardCustom">
                  <a href="#" target="_blank" className="card-title cardHeading TT p-0">MIKE</a>
                  <a href="#" target="_blank" className="card-title cardHeading p-0">THE CAPTAIN</a>
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto cardCustom">
              <div className="card ">
                <img src={tt1} className="card-img-top img-cus-card" alt="..." />
                <div className="card-body bg-black cardCustom">
                  <a href="#" target="_blank" className="card-title cardHeading TT p-0">Vianney</a>
                  <a href="#" target="_blank" className="card-title cardHeading p-0">THE PILOT</a>
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto cardCustom">
              <div className="card ">
                <img src={tt1} className="card-img-top img-cus-card" alt="..." />
                <div className="card-body bg-black cardCustom">
                  <a href="#" target="_blank" className="card-title cardHeading TT p-0">Samy  </a>
                  <a href="#" target="_blank" className="card-title cardHeading p-0">THE ASTRONAUT</a>
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto cardCustom">
              <div className="card ">
                <img src={tt1} className="card-img-top img-cus-card" alt="..." />
                <div className="card-body bg-black cardCustom">
                  <a href="#" target="_blank" className="card-title cardHeading TT p-0">Ali</a>
                  <a href="#" target="_blank" className="card-title cardHeading p-0">THE GENIUS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
