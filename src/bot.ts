import {
  timedConsoleError,
  timedConsoleLog,
} from "./helpers/consoleLogHelpers.ts";

function getApiURL(discordLink: string): string {
  const splitDiscordLink: Array<string> = discordLink.split("/");
  const channelID: string = splitDiscordLink[splitDiscordLink.length - 1];

  return `https://discord.com/api/v8/channels/${channelID}/messages`;
}

function fetchBody(authorization: string, command: string): object {
  return {
    headers: {
      accept: "*/*",
      authorization,
      "content-type": "application/json",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    body: `{"content":"${command}","tts":false}`,
    method: "POST",
    mode: "cors",
  };
}

export function startBot(discordLink: string, authorization: string) {
  const apiURL: string = getApiURL(discordLink);
  console.time("Program Runtime");

  return window.setInterval(function () {
    const choptime: number = window.performance.now();
    fetch(apiURL, fetchBody(authorization, "y!chop"))
      .then(() => {
        const time: number = window.performance.now() - choptime;
        timedConsoleLog("🪓 Chop command sent", time);
      })
      .catch(() => {
        const errorTime: number = window.performance.now() - choptime;
        timedConsoleError("🪓 Chop command failed", errorTime);
      });

    const fishTime: number = window.performance.now();
    fetch(apiURL, fetchBody(authorization, "y!fish"))
      .then(() => {
        const time: number = window.performance.now() - fishTime;
        timedConsoleLog("🎣 Fish command sent", time);
      })
      .catch(() => {
        const errorTime: number = window.performance.now() - choptime;
        timedConsoleError("🎣 Fish command failed", errorTime);
      });

    const mineTime: number = window.performance.now();
    fetch(apiURL, fetchBody(authorization, "y!mine"))
      .then(() => {
        const time: number = window.performance.now() - mineTime;
        timedConsoleLog("⛏️ Mine command sent", time);
      })
      .catch(() => {
        const errorTime: number = window.performance.now() - choptime;
        timedConsoleError("⛏️ Mine command failed", errorTime);
      });

    console.log(" ");
    console.timeLog("Program Runtime");
    console.log(" ");
  }, 7000);
}
