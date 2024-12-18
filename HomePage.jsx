import React, { useState } from 'react';

const HomePage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAuthPop, setShowAuthPop] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Toggle between Login and Signup views

  const handleSearchPopover = () => {
    setShowSearch(!showSearch);
  };

  const handleAuthPop = () => {
    setShowAuthPop(!showAuthPop);
  };

  const switchAuthView = () => {
    setIsSignup(!isSignup);
  };

  const closePopover = () => {
    setShowAuthPop(false);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>Tech-Shop</h1>
        </div>
        <nav className="navbar">
          {/* Search Icon and Popover */}
          <div className="over">
            <a href="#" onClick={handleSearchPopover}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <span>Search</span>
          </div>
          {showSearch && (
            <div className="searchstyle">
              <input
                type="text"
                placeholder="Search products..."
                style={{ width: '260px', padding: '8px' }}
              />
            </div>
          )}

          {/* Cart Icon */}
          <div className="over">
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <span>Cart</span>
          </div>

          {/* Login/Signup Icon and Popover */}
          <div className="over1">
            <a href="#" onClick={handleAuthPop}>
              <i className="fa-solid fa-user"></i>
            </a>
            <div className="overcontent">
              <h2>Hello!</h2>
              <h3>Access your account and manage orders</h3>
              <button type="button" onClick={handleAuthPop}>
                Login/Signup
              </button>
            </div>
          </div>

          {showAuthPop && (
            <div className="popoverMain" >
              <button type="button" onClick={closePopover} style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                ✖
              </button>
              {isSignup ? (
                <form className="auth-form" >
                  <h2>Sign Up</h2>
                  <p>
                    Already have an account?{' '}
                    <button
                      type="button"
                      className="switch-btn"
                      onClick={switchAuthView}
                    >
                      Login
                    </button>
                  </p>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="User Name"
                  />
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <button className="form-btn">Sign Up</button>
                  <p>Or login with:</p>
                  <button className="social-btn" style={{backgroundColor:'blue'}}>Facebook</button>
                  <button className="social-btn"style={{backgroundColor:'red'}}>Google</button>
                  <button className="social-btn"style={{backgroundColor:'skyBlue'}}>Twitter</button>
                </form>
              ) : (
                <form className="auth-form">
                  <h2>Login</h2>
                  <p>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      className="switch-btn"
                      onClick={switchAuthView}
                    >
                      Sign Up
                    </button>
                  </p>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="form-btn">Login</button>
                </form>
              )}
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
