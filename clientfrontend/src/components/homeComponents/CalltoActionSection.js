import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


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
    
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you need more tips?</h2>
              <p>Sign up free and get the latest tips.</p>
              <form ref={form} onSubmit={sendEmail} className="form-section">
                <input placeholder="Your Email..." name="email" type="email"  />
                <input value="Yes. I want!" type="submit" name='email' id="email" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
