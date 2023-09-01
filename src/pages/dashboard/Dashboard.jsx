/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SignInNav from "../../components/shared/SignInNav";
import SharedButton from "../../components/shared/SharedButton";

const Dashboard = ({logOut, user}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3">
        <div className="custom-container">
          <SignInNav
            pseudoTitle={"User Dashboard"}
            pseudoClassName={"login__pseudo"}
          />
          <p>User Email: {user?.email}</p>
          <SharedButton
            showButtonArrow={false}
            buttonText={"LOGOUT"}
            backgroundColor={"#40df6d"}
            color={"white"}
            handleClick={logOut}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
