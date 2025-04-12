require("dotenv").config();
import { TwitterClient } from "twitter-api-v2";
import generateRandomTweet from "./generateRandomTweet.js";
import { startScheduler } from "./scheduler.js";

const client = new TwitterClient({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const tweet = async () => {
  try {
    const text = generateRandomTweet();
    startScheduler(client, text);
  } catch (error) {
    console.error("Error tweeting:", error);
  }
};
