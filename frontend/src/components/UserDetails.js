import React from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div
      className="user-details"
      style={{ cursor: "pointer", marginLeft: "4%" }}
      onClick={() =>
        navigate("../viewCourse", {
          state: {
            data: user,
          },
        })
      }
    >
      <h4>{user.Username}</h4>
      <p>
        <strong>First Name: </strong>
        {user.FirstName}
      </p>
      <p>
        <strong>Last Name: </strong>
        {user.LastName}
      </p>
      <p>
        <strong>Wallet: </strong>
        {user.Wallet}
      </p>
    </div>
  );
};

export default UserDetails;
