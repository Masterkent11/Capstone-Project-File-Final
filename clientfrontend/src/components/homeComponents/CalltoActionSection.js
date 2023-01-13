import React from "react";
import Video1 from "../video/Video1.mp4"

// New Update



const CalltoActionSection = () => {
  return (
    <>
    <div className="subscribe-section bg-with-black" style={{position:"relative"}}>
      <video src={Video1} style={{display:"block", width:"210vmin"}}  autoPlay loop muted></video>
      
      <div className="container-fluid" id="video_overlay">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>BE ON FIRST IN EVERYTHING!</h2>
              <p>Sign up free and get the latest offers.</p>
              <form className="form-section d-sm-flex d-block justify-content-center gap-2">
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="Yes. I want!" name="subscribe" type="submit" />
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
