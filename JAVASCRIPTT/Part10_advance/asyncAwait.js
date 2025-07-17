function userData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "sachin", age: 21 });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching data...");
    const getData = await userData();

    console.log("fetched data successfully");
    console.log("user Data:", getData);
  } catch (error) {
    console.log("Error fetching data");
  }
}

getUserData();

// More Fun

function getPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function getCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("comment data fetched");
    }, 4000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching all data");
    // const postData = await getPostData();
    // const commentData = await getCommentData();

    const [postData, commentData] = await Promise.all([
      getPostData(),
      getCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);

    console.log("All data fetched successfully");
  } catch (error) {
    console.error("Error fetching data");
  }
}

getBlogData();
