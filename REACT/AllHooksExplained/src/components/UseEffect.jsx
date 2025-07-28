import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // another example
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  console.log("Render");
  useEffect(() => {
    console.log("Resource Type Changed");
    // clean up
    return () => {
      console.log("cleanup resource");
    };
  }, [resourceType]); // it renders only when a dependies is given to the parameter

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((respone) => respone.json())
      .then((json) => setItems(json));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("cleanup");
    };
  }, []);

  return (
    <>
      <div>
        <h1>{windowWidth}</h1>
        <button
          onClick={() => {
            setResourceType("post");
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
        <h1>{resourceType}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
};

export default UseEffect;
