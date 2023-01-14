import React from "react";
import Logo from './video/Logo.png'
import {Link} from "react-router-dom"


export function FooterTop() {
  return(
    <div className="text-center p-5" style={{backgroundColor:"#003F62"}}>
      <Link to="/"><img  style={{width:'25vmin'}} src={Logo} alt='aa'/></Link>
      <p className="d-flex justify-content-center gap-1 text-light">
        <span><i className="fa fa-copyright" aria-hidden="true"></i></span>
        <span>Copyright XploRear 2023</span>
      </p>
    </div>
    


  )
}

const Footer = () => {
  return (
    <div className="mt-5">
    <FooterTop/>
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
