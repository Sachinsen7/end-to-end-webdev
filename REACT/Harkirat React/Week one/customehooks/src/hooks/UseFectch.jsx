import React, { useEffect, useState } from "react";
import { use } from "react";

function UsePostTitle() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  //do not contains async function
  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}

export function useFetch(url, retryTime) {
  const [finalData, setFinaldata] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinaldata(json);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
  }, [url]); // you have to decalre dependencies

  // useFetch => fetch on every mount
  useEffect(() => {
    const intervalId = setInterval(() => {
      getDetails;
    }, retryTime * 1000);

    clearInterval(intervalId);
  }, []);
  return { finalData, loading }; // as an object
}

export default useFetch;
