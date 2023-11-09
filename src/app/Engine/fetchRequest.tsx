import { cache } from "react";

async function fetchData(fromDate: string, toDate: string) {
  const apiKey = `283529ed38e099fdcddd531ccc86f9892fad0f7f4e032dc7c0b8a0c640a946cc`;

  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${fromDate}&to=${toDate}&APIkey=283529ed38e099fdcddd531ccc86f9892fad0f7f4e032dc7c0b8a0c640a946cc`,
    {
      // params: {
      //   date: "2023-10-30",
      //   season: "2023",
      // },
      // headers: {
      //   "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
      //   "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      // },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getFixtures = cache(fetchData);

///Fetch Predictions
async function fetchPrediction(fromDate: string, toDate: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_predictions&from=${fromDate}&to=${toDate}&APIkey=283529ed38e099fdcddd531ccc86f9892fad0f7f4e032dc7c0b8a0c640a946cc`,
    {
      // headers: {
      //   "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
      //   "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      // },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getPrediction = cache(fetchPrediction);
