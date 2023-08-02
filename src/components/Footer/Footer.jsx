import "./Footer.scss";

import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quo, provident explicabo consectetur cum fuga amet iste atque itaque
            minus numquam laudantium dicta aliquam. Ratione fugit beatae
            architecto eligendi tempora.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              main market main road Sadiqabad District Rahi yar khan
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 030928892843</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: AmirCommunication125@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Phones</span>
          <span className="text">Androids</span>
          <span className="text">Iphones</span>
          <span className="text">Head Phones</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Handfrees</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Amir Communication Created By Azam Shoukat</div>

          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
