import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../../redux/slices/users/usersSlice";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";

import "./Login.css"

const Login = () => {
  //dispatch
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "username",
    password: "12345",
  });
  const { email, password } = data;
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserAction({ email, password }));
  };

  const { error, loading, userInfo } = useSelector(
    (state) => state?.users?.userAuth
  );

  useEffect(() => {
    if (userInfo?.userFound) {
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

          {error && <ErrorMsg message={error?.message} />}

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
                <button className="submit-button">Login</button>
              {/* )} */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
