export function customTruncate(str: string, size: number) {
  return str.length > size ? str.slice(0, size) + "..." : str;
}

export const getTime = (date: string) => {
  let muda = new Date(date);
  var GMTtime =
    muda.getUTCMonth() +
    1 +
    "/" +
    muda.getUTCDate() +
    "/" +
    muda.getUTCFullYear() +
    " " +
    muda.getUTCHours() +
    ":" +
    muda.getUTCMinutes() +
    ":" +
    muda.getUTCSeconds() +
    " GMT";
  let myTime = new Date(GMTtime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return myTime; // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
};

export const getTodayDate = () => {
  return new Date().toDateString();
};
