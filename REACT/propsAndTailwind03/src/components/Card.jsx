import React from "react";

const Card = ({ username = "ishwar", email = "karan@gmail", image }) => {
  //you can do that to destructuring lik {username, email}
  return (
    <div>
      <h1>Hii my name is sachin</h1>
      <p>{username}</p>
      <p>{email}</p>

      <p>{image && <img src={image} alt="" />}</p>

      {/* // so now we owork on what if the valuw doesnt exist so ??? */}
    </div>
  );
};

export default Card;
