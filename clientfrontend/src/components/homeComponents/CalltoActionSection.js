import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Video1 from "../video/Video1.mp4"


const CalltoActionSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4iok5t8', 'template_d9hqtw9', form.current, 'b1gcexkuJgYk6qZZ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    
    <div className="subscribe-section bg-with-black" style={{position:"relative"}}>
      <video src={Video1} style={{display:"block", width:"100%"}}  autoPlay loop muted></video>

      <div className="container-fluid" id="video_overlay">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2 className="d-none d-sm-block">BE ON FIRST IN EVERYTHING!</h2>
              <p>Sign up free and get the latest offers.</p>
              <form ref={form} onSubmit={sendEmail} className="d-none form-section d-sm-flex justify-content-center gap-2">
                <input placeholder="Your Email..." name="email" type="email"  />
                <input value="Yes. I want!" type="submit" name='email' id="email" />
              </form>

              {/* For small screen 576px below */}

              <form ref={form} onSubmit={sendEmail} className="d-flex gap-2 justify-content-center d-sm-none">
                <input placeholder="Your Email..." name="email" type="email" style={{width:"50vmin", fontSize:"2.5vmin", border:"0 none"}}/>
                <button className="text-center text-light" value="Yes. I want!" type="submit" name='email' id="email" style={{width:"15vmin", fontSize:"2.5vmin", background:"#EDA415", border:"0 none"}}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default CalltoActionSection;
