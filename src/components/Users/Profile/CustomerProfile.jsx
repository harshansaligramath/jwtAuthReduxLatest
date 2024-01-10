import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../../redux/slices/users/usersSlice";
// import CustomerDetails from "./CustomerDetails";

import "./CustomerProfile.css";

export default function CustomerProfile() {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  const { error, loading, profile } = useSelector((state) => state?.users);

  return (
    <>
      <div>
        <div />
        <div>
          <h2 className="heading">
            Hi, {profile?.user?.name} you are welcome
          </h2>
        </div>
        <div />
      </div>

      {loading ? <h2>Loading...</h2> : error ? <h2>{error?.message}</h2> : ""}
    </>
  );
}
