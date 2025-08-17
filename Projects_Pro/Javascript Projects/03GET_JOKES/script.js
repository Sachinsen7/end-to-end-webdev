document.addEventListener("DOMContentLoaded", () => {
  const jokeText = document.getElementById("joke-text");
  const getjoke = document.getElementById("get-joke");
  const favJoke = document.getElementById("favorites");
  const shareJoke = document.getElementById("share");
  const displayJoke = document.getElementById("jokeDisplay");
  const favJokeList = document.getElementById("favorite-jokes");

  getjoke.addEventListener("click", getJoke);

  async function getJoke() {
    try {
      const jokeData = await fetchJokeApi();

      //   const joke = jokeData.data[0].content;
      //   displayJoke.textContent = joke;
      //   ShowFetchedJoke(jokeData.data[0]);

      const jokesArray = jokeData.data.data;
      if (jokesArray.length > 0) {
        ShowFetchedJoke(jokesArray[0]);
      }
    } catch (error) {
      console.error("Error fetching a new joke", error);
    }
  }

  async function fetchJokeApi() {
    const url = "https://api.freeapi.app/api/v1/public/randomjokes";
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESONSE", response);

    if (!response.ok) {
      throw new Error("Error fecthing data");
    }

    const data = await response.json();
    return data;
  }

  function ShowFetchedJoke(joke) {
    const { content } = joke;
    displayJoke.textContent = content;
  }

  favJoke.addEventListener("click", addToFavorites);
  function addToFavorites() {
    if (displayJoke.textContent.trim() === "") {
      console.error("No joke to add to favorites");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${displayJoke.textContent}</span>`;
    favJokeList.classList.remove("hidden");
    favJokeList.appendChild(li);
  }

  shareJoke.addEventListener("click", shareJokes);

  function shareJokes() {
    if (displayJoke.textContent.trim() === "") {
      console.error("No joke to share");
      return;
    }
    const url = `https://twitter.com/intent/tweet?text=${displayJoke.textContent}`;
    window.open(url, "_blank");
  }
});
