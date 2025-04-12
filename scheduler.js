const cron = require("node-cron");

async function startScheduler(client, message) {
  try {
    cron.schedule("0 */2 * * *", () => {
      const response = client.v2.tweet(text);
      console.log("Tweeted successfully:", response.data.text);
    });
  } catch (error) {
    console.error("Error scheduling tweet:", error);
  }
}
