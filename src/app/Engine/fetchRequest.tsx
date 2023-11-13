import { unstable_cache as cache } from "next/cache";
import { apiKey, getSimpleTodayDate } from "./functions";

async function fetchData() {
  let today = getSimpleTodayDate();
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${today}&to=${today}&APIkey=${apiKey}`,
    { method: "GET", next: { revalidate: 900 } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getFixtures = cache(fetchData);

///Fetch Predictions
async function fetchPrediction() {
  let today = getSimpleTodayDate();
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_predictions&from=${today}&to=${today}&APIkey=${apiKey}`,
    { method: "GET", next: { revalidate: 900 } }
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
