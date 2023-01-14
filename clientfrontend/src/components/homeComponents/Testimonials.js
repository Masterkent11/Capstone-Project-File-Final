import React from 'react'
import user1 from './testi-images/user-1.png'
import user2 from './testi-images/user-2.png'
import user3 from './testi-images/user-3.png'

const Testimonials = () => {
  return(

  <div className="testimonials">
    <div className="container">
      <h1>Testimonials</h1>
      <div className="row">

        <div className="col-md-4 text-center">
          <div className="card-main">
            <img src={user1} alt="Profile Picture" className="user" />
            <p>This is the best Shoe shop that I have encountered so far. XploRear staff were clearly passionate about the brand and attention to detail during the process. I highly recommend XploRear.</p>
            <span id="wawa" className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <h3>Maria Raba<span> Founder KodeGo</span></h3>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card-main">
            <img src={user2} alt="Profile Picture" className="user" />
            <p>Strongly knowledgeable in the when it comes with shoes, this company works on the finest state-of-the-art server systems, helping you meet high tech challenges. Inquire right away for their rates and services.</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <h3>Ben Allan<span> Manager</span></h3>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="card-main">
            <img src={user3} alt="Profile Picture" className="user" />
            <p>Amazing customer service! I Will recommend you to everyone I know. Thank you so much for the quick service and getting me back up and running when I thought it was impossible. I will be a lifelong customer. Thanks again!</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>          
            <span className="fa fa-star checked"></span>          
            <span className="fa fa-star checked"></span>          
            <h3>Pretty Sopia<span> CEO at KodeGo</span></h3>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Testimonials;
