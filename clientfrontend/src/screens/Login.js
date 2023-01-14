import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "../components/Footer";
import jwt_decode from 'jwt-decode'


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

  // Google
  const google = window.google;

  const [user,setUser] = useState({})

  function test(response){
    console.log("Encoded JWT Token: "+response.credential)
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById('signIn').hidden=true
  }

  function handleSignout(event){
    setUser({})
    document.getElementById('signIn').hidden=false
  }

  useEffect(()=>{
        google.accounts.id.initialize({
        client_id: '892119654427-kp9o9a029fkile3u0pjguhrc9pp6mads.apps.googleusercontent.com',
        callback: test
  })

  google.accounts.id.renderButton(
    document.getElementById('signIn'),
    {theme: 'outline',size:'large'}

  )
  },[])



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


            {/*  */}

            <div id="signIn"></div>
        {Object.keys(user).length!=0 &&
         <button onClick={(e)=>handleSignout(e)}>Signout</button>
        
        }

        {
          user && <div className="details"><img src={user.picture} alt="" />
          <h3>{user.name}</h3>
          </div>
        }
            
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
    
        </form>
       
      </div>

      <ContactInfo />
      <Footer />
    </>
  );
};

export default Login;
