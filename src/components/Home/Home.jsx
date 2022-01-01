import { React } from "react";

import "./home.css";
import i1 from "../../assets/i1.jpg";
import ii2 from "../../assets/ii2.jpg"
import ii3 from "../../assets/ii3.jpg"
import ii4 from "../../assets/ii4.jpg"
import ii5 from "../../assets/ii5.jpg"


const Home = () => {
  return (
    <>
      <div id="Home" className="main">
        <div className="container ">
          <div className="row">
            <div className=" col-md-12 mx-auto ">
              <h1 className="homeHeading">NftsRealEstate</h1>

              <div className="row home-btn-div">
                <div className="col-md-4   "></div>
                <div className="col-md-4 mx-auto nav-btn-posi">
                  <a href="https://discord.gg/P4N5DVuQaK">
                    <button type="button" className=" nav-btn ">
                      BUY ON OPENSEA
                    </button>
                  </a>
                </div>

                <div className="col-md-4   "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto ">
              <h4 className="text-white ps-3">FEATURE</h4>
              <div className="d-flex">
                <h1 className="homeHeading2 ">
                  Welcome to the Shiba Social Club
                </h1>
              </div>
              <p className="para">
                <strong>
                  The Shiba Social Club is a collection of 7777 Shiba NFTs inspired by the new wealthy generation of crypto-currency and NFTs.
                </strong>
              </p>
              <p className="para">
                <strong>
                  Each piece is a unique 3d artwork with a collection of more than 150+ traits. The objective is to build the strongest community and project around NFTs.
                </strong>
              </p>
              <a href="https://discord.gg/P4N5DVuQaK">
                <button type="button" className=" nav-btn-join">
                  JOIN US
                </button>
              </a>
            </div>
            <div className="col-md-6 mx-auto">
              <img className="image" src={i1} alt="Pic" />
            </div>
          </div>
          <div className="row">

            <div className="col-md-6 mx-auto">
              <div className="row pt-3">
                <div className="col-md-6">
                  
                    <img className="image-thumble" src={ii2} alt="Pic" />
                  
                </div>
                <div className="col-md-6">
                  
                    <img className="image-thumble" src={ii3} alt="Pic" />
                  
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-6">
                 
                    <img className="image-thumble" src={ii4} alt="Pic" />
                  
                </div>
                <div className="col-md-6">
                 
                    <img className="image-thumble" src={ii5} alt="Pic" />
                  
                </div>
              </div>

            </div>
            <div className="col-md-6 about-content">
              <h4 className="text-white ps-3">ABOUT</h4>
              <div className="d-flex">
                <h1 className="homeHeading2 ">
                  Join the club!
                </h1>
              </div>
              <p className="para">
                <strong>
                  When you buy a Shiba, you don't buy only an avatar or a piece of art.
                </strong>
              </p>
              <p className="para">
                <strong>
                  You are gaining membership access to a club whose benefits and offerings will increase over time. Your Shiba can serve as your digital identity, and open digital doors for you.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
