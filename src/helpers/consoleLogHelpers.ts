import { green, red } from "../deps.ts";

export function formattedConsoleLog(
  color: Function,
  prefix: string,
  message: string,
) {
  console.log(`${color(prefix)}${message}`);
}

export function timedConsoleLog(message: string, time: number) {
  console.log(`${message} [${green(time + "ms")}]`);
}

export function timedConsoleError(message: string, time: number) {
  console.log(`${message} [${red(time + "ms")}]`);
}
