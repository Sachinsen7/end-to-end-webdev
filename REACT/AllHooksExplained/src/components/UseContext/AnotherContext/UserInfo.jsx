import React, { use } from "react";
import { UserContext } from "../AnotherContext/App.jsx";
import { useContext } from "react";

function UserInfo() {
  const user = useContext(UserContext);
  return (
    <>
      <div>
        {user.isloggedIn ? <p>Welcome, {user.name}!</p> : <p>Please log in </p>}
      </div>
    </>
  );
}

export default UserInfo;
