import { fixtureType, predictionType } from "./type";

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

export const checkLeague = (leaguesByCountries: string[], league: string) => {
  const ligiFound = leaguesByCountries.filter((ligi) => {
    return league.includes(ligi);
  });

  if (ligiFound.length > 0) {
    return true;
  }
  return false;
};

export const getPredictionDetail = (
  dataPrediction: predictionType,
  dataFixture: fixtureType
) => {
  return parseInt(dataPrediction.prob_bts) > 65
    ? `Both Team To Score`
    : parseInt(dataPrediction.prob_HW) > 61
    ? `${customTruncate(dataFixture.match_hometeam_name, 15)} to win`
    : parseInt(dataPrediction.prob_HW_D) > 70
    ? `${customTruncate(dataFixture.match_hometeam_name, 15)} to Win or Draw`
    : parseInt(dataPrediction.prob_AW) > 61
    ? `${customTruncate(dataFixture.match_awayteam_name, 15)} to win`
    : parseInt(dataPrediction.prob_AW_D) > 70
    ? `${customTruncate(dataFixture.match_awayteam_name, 15)} to Win or Draw`
    : parseInt(dataPrediction.prob_D) > 60
    ? `Draw`
    : parseInt(dataPrediction.prob_O_1) > 72
    ? `Over 1.5 goals`
    : parseInt(dataPrediction.prob_O) > 72
    ? `Over 2.5 goals`
    : parseInt(dataPrediction.prob_O_3) > 72
    ? `Over 3.5 goals`
    : parseInt(dataPrediction.prob_U_3) > 72
    ? `Under 3.5 goals`
    : parseInt(dataPrediction.prob_U) > 72
    ? `Under 2.5 goals`
    : parseInt(dataPrediction.prob_U_1) > 72
    ? `Under 1.5 goals`
    : parseInt(dataPrediction.prob_HW_AW) > 65
    ? `${customTruncate(
        dataFixture.match_hometeam_name,
        15
      )} or ${customTruncate(dataFixture.match_awayteam_name, 15)} to win`
    : parseInt(dataPrediction.prob_ots) > 65
    ? `Only one Team to Score`
    : `${customTruncate(
        dataFixture.match_hometeam_name,
        15
      )} or ${customTruncate(dataFixture.match_awayteam_name, 15)} to win`;
};

export const emptyLogo = `https://apiv3.apifootball.com/badges/27845_stade-dabidjan.jpg`;
export const apiKey = `283529ed38e099fdcddd531ccc86f9892fad0f7f4e032dc7c0b8a0c640a946cc`;
