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

export async function startBot(discordLink: string, authorization: string) {
  const apiURL: string = getApiURL(discordLink);

  return window.setInterval(function () {
    fetch(apiURL, fetchBody(authorization, "y!chop")).then(() =>
      console.log("🪓 Chop command sent")
    );
    fetch(apiURL, fetchBody(authorization, "y!fish")).then(() =>
      console.log("🎣 Fish command sent")
    );
    fetch(apiURL, fetchBody(authorization, "y!mine")).then(() =>
      console.log("⛏️ Mine command sent")
    );
    console.log(" ");
  }, 7000);
}
