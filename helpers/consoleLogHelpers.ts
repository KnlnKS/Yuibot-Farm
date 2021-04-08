export function formattedConsoleLog(color: Function, prefix: string, message: string){
    console.log(`${color(prefix)}${message}`);
}
