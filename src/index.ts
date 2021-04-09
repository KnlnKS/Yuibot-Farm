import { red, green, bold, parse } from "./deps.ts";

import { formattedConsoleLog } from "./helpers/consoleLogHelpers.ts";
import { isUrlValid } from "./helpers/urlValidator.ts";
import { startBot } from "./bot.ts";

async function main(args: string[]) {
  const { url, auth, help } = parse(args);

  if (help) {
    console.log(bold('\n~~~Flags~~~'));
    formattedConsoleLog(green, '--url : ', 'URL for Discord Channel where messages will be sent.')
    formattedConsoleLog(green, '--auth: ', 'Authorization token for account that will send messages.')
    formattedConsoleLog(green, '--help: ', 'Help prompt.\n')
    Deno.exit(0);
  }

  if (!auth) {
    throw { error: "Please provide an authorization token." };
  }

  if (!isUrlValid(url)) {
    throw { error: "Please provide a valid url" };
  }

  startBot(url, auth);
  console.log(bold('\n~~~~~~Starting Yuibot Farm~~~~~~\n'));
}

try {
  await main(Deno.args);

} catch ({ error }) {
  console.log(red(`Error: ${error}`));
}
