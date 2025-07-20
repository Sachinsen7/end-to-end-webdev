function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sceret = true;
      if (sceret) {
        return resolve("Fetched Data");
      } else {
        return reject("fetched data unsiccessfully");
      }
    });
  });
}
fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
