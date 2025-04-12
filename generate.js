import arr from "./tweets.js";

function generateRandomTweet() {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
