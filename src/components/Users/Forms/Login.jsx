import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../redux/slices/users/usersSlice";
// import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";
import { connect } from 'react-redux';

import "./Login.css"

const Login = (props) => {
  const {userInfo, error, loading}=props
  // error&&console.log(error)

  // userInfo&&console.log(userInfo)
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "username",
    password: "12345",
  });
  const { email, password } = data;

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
     dispatch(await loginUserAction({ email, password }));
  };

  // const { error, loading } = useSelector(
  //   (state) => state?.users?.userAuth
  // );

  useEffect(() => {
    if (userInfo?.user) {
      debugger
      window.location.href = "/";
    }
  }, [userInfo]);
  
  return (
    <>
      <section className="form-container">
        <div>
          <div className="text-center">
            <h3>Login to your account</h3>
          </div>

          {/* {error && <ErrorMsg message={error?.message} />} */}

          <form onSubmit={onSubmitHandler}>
            <div className="label-container-1">
              <label >
                <h4>username</h4>
                <input
                  className="input-field"
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  type="email"
                />
              </label>
            </div>

            <div className="label-container">
              <label>
                <h4>Password</h4>
                <input
                  className="input-field"
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                  type="password"
                />
              </label>
            </div>

            <div className="button-container">
              {/* {loading ? (
                <LoadingComponent />
              ) : ( */}
              {error && (
                <div> {error}</div>
              )}
                <button className="submit-button">Login</button>
              {/* )} */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    userInfo: state?.users?.userAuth?.userInfo,
    loading: state?.users?.userAuth?.loading,
    error: state?.users?.userAuth?.error,
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(Login);
