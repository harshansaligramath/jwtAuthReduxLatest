import { useEffect } from "react";
// import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/slices/users/usersSlice";

import "./Navbar.css"
export default function Navbar() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const isLoggedIn = user?.token ? true : false;
  const logoutHandler = () => {
    dispatch(logoutAction());
    //reload
    window.location.reload();
  };

  return (
    <div>
      <header >
        <nav>
          {!isLoggedIn && (
            <>
              <Link className="links" to="/register">Create an account</Link>
              <span />
              <Link className="links" to="/login">Sign in</Link>
            </>
          )}

          <div>
            {isLoggedIn && (
              <div>
                <Link className="links" to="/customer-profile">CustomerProfile</Link>
                {/* logout */}
                <button onClick={logoutHandler}>Log out</button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
