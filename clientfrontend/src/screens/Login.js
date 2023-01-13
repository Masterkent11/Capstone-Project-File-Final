import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "../components/Footer";

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



    const onSuccess = async (res)=>{
      const accessToken = res.access_token
      const result = await fetch(`http://graph.facebook.com/me?field=id,name,picture&access_token=${accessToken}`)
      const profile = await result.json();
      console.log(profile)
    }
    const onFailure = (res)=>{
      console.log(res);
    }


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
    
{/* 
          <OAuth2Login
            buttonText=" Login with Facebook"
            authorizationUrl="https://www.facebook.com/dialog/oauth"
            responseType="token"
            clientId="1230316541028928"
            redirectUri="http://localhost:3001"
            onSuccess={onSuccess}
            onFailure={onFailure}/> */}
        </form>
       
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
};

export default Login;
