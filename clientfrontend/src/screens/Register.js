import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ContactInfo from "../components/homeComponents/ContactInfo";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
import Header from "./../components/Header";
import Video4 from "../components/video/Video4.mp4"


const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <>
      <Header />
      <div className="position-relative">
      <RegisterVideoOverlay/>
      <div className="Register container-fluid d-lg-flex flex-column justify-content-center align-items-center login-center position-absolute top-0 d-none">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form
          className="RegisterForm col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>

      </div>

        {/* TODO: This area will display none in 992px and above */}

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center login-center position-relative top-0 d-lg-none">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <p className="mt-2" style={{fontSize:"7vmin", fontWeight:"900"}}>Create an Account</p>

        <form
          className="RegisterForm col-md-8 col-lg-4 col-11 mt-3"
          onSubmit={submitHandler} style={{backgroundColor:"#003F62", color:"#003F62"}}
        >
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" style={{fontSize:"2.7vmin"}}>Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>

      </div>

        {/* TODO: This area will display none in 992px and above */}


      </div>

      <ContactInfo />
      <Footer />
    </>
  );
};

export default Register;

export function RegisterVideoOverlay() {
  return(
    <div className="d-lg-block d-none">
      <video src={Video4} className="w-100" autoPlay loop muted></video>
    </div>
  );
}
