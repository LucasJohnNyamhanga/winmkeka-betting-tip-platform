import { cache } from "react";
import { apiKey } from "./functions";

async function fetchData() {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${getSimpleTodayDate()}&to=${getSimpleTodayDate()}&APIkey=${apiKey}`,
    { next: { revalidate: 900 } }
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
async function fetchPrediction() {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_predictions&from=${getSimpleTodayDate()}&to=${getSimpleTodayDate()}&APIkey=${apiKey}`,
    { next: { revalidate: 900 } }
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
