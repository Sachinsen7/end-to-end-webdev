import React from "react";
import Profile from "./Profile";

function Avatar({ person, size, isOkay, demorolize }) {
  return (
    <>
      <Profile
        person={person}
        size={size}
        isOkay={isOkay}
        demorolize={demorolize}
      />
    </>
  );
}

export default Avatar;
