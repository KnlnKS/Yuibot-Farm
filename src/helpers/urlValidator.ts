export function isUrlValid(input: string): boolean {
  const regexQuery: string =
    "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
  const url: RegExp = new RegExp(regexQuery, "i");

  return url.test(input);
}
