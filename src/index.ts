import { bold, green, parse, red } from "./deps.ts";

import { formattedConsoleLog } from "./helpers/consoleLogHelpers.ts";
import { isUrlValid } from "./helpers/urlValidator.ts";
import { startBot } from "./bot.ts";

function main(args: string[]) {
  const { url, auth, help } = parse(args);

  if (help) {
    const urlMessage = "URL for Discord Channel where messages will be sent.";
    const authMessage = "Authtoken for account that will send messages.";
    const helpMessage = "Help prompt.";

    console.log(" ");
    console.log(bold("~~~Flags~~~"));
    formattedConsoleLog(green, "--url : ", urlMessage);
    formattedConsoleLog(green, "--auth: ", authMessage);
    formattedConsoleLog(green, "--help: ", helpMessage);
    console.log(" ");

    Deno.exit(0);
  }

  if (!auth) {
    throw { error: "Please provide an authorization token." };
  }

  if (!isUrlValid(url)) {
    throw { error: "Please provide a valid url" };
  }

  startBot(url, auth);
  console.log(" ");
  console.log(bold("~~~~~Starting Yuibot Farm~~~~~"));
}

try {
  main(Deno.args);
} catch ({ error }) {
  console.log(red(`Error: ${error}`));
}
