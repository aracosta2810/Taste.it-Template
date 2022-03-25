
const Login = ({handleLogin}) => {
  return (
    <div className="hold-transition login-page">
        <img src={process.env.PUBLIC_URL + 'favicon.ico'} style={{marginBottom: 10}} alt="" srcSet="" />
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Taste.it</b>-Admin
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post" onSubmit={(e) => handleLogin(e)}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="user"
                  placeholder="Email"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  placeholder="Password"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" className="mr-1" id="remember" />
                    <label htmlFor="remember">Remeber me</label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
};

export default Login;
