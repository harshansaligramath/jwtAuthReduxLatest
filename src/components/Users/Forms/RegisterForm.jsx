import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/slices/users/usersSlice";
// import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";

import "./RegistrationForm.css"

const RegisterForm = () => {
  //dispatch
  const dispatch = useDispatch();
  //dispatch
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  // console.log("data:::::",data);
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserAction({ name, email, password } ));
  };

  //select store data
  const { user, error, loading } = useSelector((state) => state?.users);
  //redirect
  useEffect(() => {
    if (user) {
      window.location.href = "/login";
    }
  }, [user]);
  return (
    <>
      <section className="section-container">
        <div className="form-container">
          <div className="title-container">
            <h3>Signing up with your datas</h3>
            {/* {error && <ErrorMsg message={error?.message} />} */}
          </div>
          <form onSubmit={onSubmitHandler}>
            <input 
            className="input-field"
            name="name"
            value={name}
            onChange={onChangeHandler}
            type="text"
            placeholder="name"
            />
            <input
              className="input-field"
              name="email"
              value={email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="input-field"
              name="password"
              value={password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Enter your password"
            />
            {loading ? <LoadingComponent /> : <button className="submit-button">Register</button>}
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
