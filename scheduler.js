const cron = require("node-cron");

function startScheduler(client, message) {
  cron.schedule("0 */2 * * *", () => {
    console.log("Running a task every 2 hours");
    // Here you can call your function to fetch tweets and send them to the Discord channel
    // await fetchTweetsAndSendToDiscord();
  });
}
