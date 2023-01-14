import React from 'react'

const Contactus = () => {
  return (
    <div id="contact">
      <div className="container mb-5">
        <div className="testimonials" id="about">
          <div className="container-fluid">
        <h1>Contact</h1>
      <div>
    <div className="row">
      <div className="col-lg-6">
        <div className="info-box mb-4">
          {/* <i className="bx bx-map"></i> */}
          <h3>Our Address</h3>
          <p>123, Tonsuya Malabon City 1473</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
          {/* <i className="bx bx-envelope"></i> */}
          <h3>Email Us</h3>
          <p>Tech@gmail.com</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="info-box  mb-4">
          {/* <i className="bx bx-phone-call"></i> */}
          <h3>Call Us</h3>
          <p>+63 912345678</p>
        </div>
      </div>

    </div>


    <div className="row">

      {/* <div className="col-lg-6 ">
        <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.80254902792!2d121.04663401483968!3d14.553281089832643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1667379719818!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

      <div className="col-lg-6">
        <form action="#" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"/>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <br/>
          <button id="submit" onclick="alert()">Submit</button>
        

        </form>
      </div>
    </div>

  </div>
</div>
  )
}

export default Contactus
