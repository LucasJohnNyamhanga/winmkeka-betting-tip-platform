export function customTruncate(str: string, size: number) {
  return typeof str === "string"
    ? str.length > size
      ? str.slice(0, size) + "..."
      : str
    : "No Team";
}

export const getTime = (date: string) => {
  let muda = new Date(date);
  var GMTtime =
    muda.getMonth() +
    1 +
    "/" +
    muda.getDate() +
    "/" +
    muda.getFullYear() +
    " " +
    muda.getHours() +
    ":" +
    muda.getMinutes() +
    ":" +
    muda.getSeconds() +
    " GMT";
  let myTime = new Date(GMTtime).toLocaleString("en-GB", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
  });
  return myTime; // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
};

export const getTodayDate = () => {
  return new Date().toDateString();
};

export const getSimpleTodayDate = () => {
  var leo = new Date();
  return leo.toISOString().slice(0, 10);
};

export function compareByPriorty(
  compareA: { priority: number },
  compareB: { priority: number }
) {
  return compareA.priority - compareB.priority;
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 99999);
}

export const emptyLogo = `https://apiv3.apifootball.com/badges/27845_stade-dabidjan.jpg`;
export const apiKey = `283529ed38e099fdcddd531ccc86f9892fad0f7f4e032dc7c0b8a0c640a946cc`;
