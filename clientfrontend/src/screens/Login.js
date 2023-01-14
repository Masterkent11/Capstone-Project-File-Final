import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "../components/Footer";

import jwt_decode from "jwt-decode"


const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

    // function handleCallbackResponse(response){
    //   console.log("encoded JWT ID token" + response.credential);
    //   var userObject = jwt_decode(response.credential);
    //   console.log(userObject);

    // }
    // useEffect(() => {
    //   /* global google */
    //   google.accounts.id.initialize({
    //     client_id: "1028814407207-gu8d0bcn6k4mitf26sfciu3g6dj5ft53.apps.googleusercontent.com",
    //     callback: handleCallbackResponse,
    //   })
    //   google.accounts.id.renderButton(
    //     document.getElementById("signInDiv"),
    //     {theme: "outline",size: 'large'}
    //   )
    // }, []);

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="search__email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            className="search__email"
          />
          <button type="submit" id="submit__button">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
          {/* <div id="signInDiv">Sign In</div> */}
        </form>
       
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
};

export default Login;
