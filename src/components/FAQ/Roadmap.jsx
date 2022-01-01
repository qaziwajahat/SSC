import React from "react";
import "./roadmap.css";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionData";
import { FaTwitter, FaInstagram, FaMask } from "react-icons/fa";


const Roadmap = () => {
  const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem" };

  return (
    <>
      <div id="Roadmap" className="daDaa pt-5">
        <div className="container">
          <div className="row bg-gray">
            <div className="col-md-12">
              <h1 className="FAQ-head">Frequently Asked Questions</h1>
              {accordionData.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="dataTeam2 bg">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <h1 className="homeHeading2">
                <span className="span-color"> JOIN </span>OUR COMMUNITY
              </h1>
              <p className="TeamPara">
                Come join the community now to follow our latest announcements,
                and participate
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dataFooter ">
        <div className="container">
          <div className="row">
            <div className="col-7 mx-auto">
              <p className="TeamPara">Copyright © 2021 nftsrealestate</p>
            </div>
            <div className="col-5 mx-auto">
              <a href="https://discord.gg/P4N5DVuQaK">
                <FaMask style={fontStyles} />
              </a>
              <a href="https://twitter.com/NftsReal">
                <FaTwitter style={fontStyles} />
              </a>
              <a href="https://instagram.com/nfts_real_estate?utm_medium=copy_link">

                <FaInstagram style={fontStyles} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roadmap;
