import { cache } from "react";

async function fetchData() {
  var leo = new Date();
  let today = leo.toISOString().slice(0, 10);
  let mwaka = leo.getFullYear();

  const res = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${today}&season=${mwaka}`,
    {
      // params: {
      //   date: "2023-10-30",
      //   season: "2023",
      // },
      headers: {
        "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getFixtures = cache(fetchData);

///Fetch Predictions
export async function fetchPrediction(fixtureId: number) {
  const res = await fetch(
    `https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=${fixtureId}`,
    {
      headers: {
        "X-RapidAPI-Key": "1936923b3emsh2cc97780d559a45p1629f7jsn2bb41be1f074",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
