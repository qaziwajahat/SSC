import React from "react";
import "./about.css";
import "react-slideshow-image/dist/styles.css";
import a1 from "../../assets/a1.jpg"
import a2 from "../../assets/a2.jpg"
import a3 from "../../assets/a3.jpg"
import a4 from "../../assets/a4.jpg"
import a5 from "../../assets/a5.jpg"
import a6 from "../../assets/a6.jpg"
import a7 from "../../assets/a7.jpg"



const About = () => {
  
  return (
    <>
      <div id="About" className="data-about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="homeHeadin">OUR SPECIAL LEGENDARY COLLECTION  </h1>
              <h6 className="text-white h4">Discover our special legendary collection, they are the rarest and unique.</h6>
              <div className="row">
                
                  <div className="col-md card card-back pt-5" >
                    <img src={a1} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">DogYear</h5>           
                      </div>
                  </div>
                  <div className="col-md card card-back pt-5" >
                    <img src={a2} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">The GodFather</h5>
                        
                      </div>
                  </div>
                  <div className="col-md card card-back pt-5" >
                    <img src={a3} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">Gundab Shiba</h5>
                        
                      </div>
                  </div>
                  <div className="col-md card card-back pt-5" >
                    <img src={a4} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">Golden Shiba</h5>
                        
                      </div>
                  </div>
                  <div className="col-md card card-back pt-5" >
                    <img src={a5} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">Bat Shiba</h5>
                        
                      </div>
                  </div>
                  <div className="col-md card card-back pt-5" >
                    <img src={a6} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">Samurai Shiba</h5>
                        
                      </div>
                  </div>
                  <div className="col-md card card-back pt-5" >
                    <img src={a7} className="card-img " alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title card-text pb-5 pt-4">Comming Soon</h5>
                        
                      </div>
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
