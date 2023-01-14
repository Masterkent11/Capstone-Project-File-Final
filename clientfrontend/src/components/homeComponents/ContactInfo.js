import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>(02) 8808-5901</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Main Office</h5>
            <p>Manila, PH</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <h5>Fax</h5>
            <p>(02) 8808-5901</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
