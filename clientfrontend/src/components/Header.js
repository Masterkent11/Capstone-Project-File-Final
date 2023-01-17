import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";






const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>(02) 8808-5901</p>
              <p>xplorear@gmail.com</p>
            </div>

            <div className="social-header col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">

              <Link to="/ourteam" className="text-dark" style={{fontSize:"2.5vmin"}}>
                Our Team
              </Link>

            </div>

          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/Logo1.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          PROFILE
                        </Link>

                        <a
                          className="dropdown-item"
                          href="https://adminxplorear.netlify.app/"
                        >
                          DASHBOARD
                        </a>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          LOGOUT
                        </Link>

                     
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          LOGIN
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          REGISTER
                        </Link>

                        {/* <Link className="dropdown-item" to="/">
                          DASHBOARD
                        </Link> */}
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group mb-4">
                    <input id="search-1" style={{fontSize:"2.7vmin"}}
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button" style={{fontSize:"2.7vmin"}}>
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/Logo1.png" style={{width:"12vmin"}}/>
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        PROFILE
                      </Link>

                      <a
                        className="dropdown-item"
                        href="https://adminxplorear.vercel.app/"
                        target="_#"
                      >
                        DASHBOARD
                      </a>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        LOGOUT
                      </Link>

                      
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register" className="small">REGISTER</Link>
                    <Link to="/login" className="small">LOGIN</Link>
                    {/* <Link to="/login" target="_blank" className="small">DASHBOARD</Link> */}
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag bag-1 "></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Header;







