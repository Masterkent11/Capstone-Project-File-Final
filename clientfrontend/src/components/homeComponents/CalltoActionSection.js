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
      <video src={Video1} style={{display:"block", width:"203vmin"}}  autoPlay loop muted></video>

      <div className="container-fluid" id="video_overlay">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>BE ON FIRST IN EVERYTHING!</h2>
              <p>Sign up free and get the latest offers.</p>
              <form ref={form} onSubmit={sendEmail} className="form-section d-sm-flex d-block justify-content-center gap-2">
                <input placeholder="Your Email..." name="email" type="email"  />
                <input value="Yes. I want!" type="submit" name='email' id="email" />
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
