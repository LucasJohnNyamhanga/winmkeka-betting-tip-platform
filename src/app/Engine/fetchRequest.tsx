import {
  unstable_cache as cache,
  revalidateTag,
  revalidatePath,
} from "next/cache";
import { apiKey } from "./functions";

type dataType = {
  from: string;
  to: string;
};

async function fetchData(from: string, to: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${from}&to=${to}&APIkey=${apiKey}`,
    { next: { revalidate: 450 } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // revalidateTag("fixture");
  // revalidatePath("/");
  return res.json();
}

export const getFixtures = cache(fetchData);

///Fetch Predictions
async function fetchPrediction(from: string, to: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_predictions&from=${from}&to=${to}&APIkey=${apiKey}`,
    { next: { revalidate: 450 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // revalidateTag("fixture");
  // revalidatePath("/");
  return res.json();
}

export const getPrediction = cache(fetchPrediction);

///Fetch Predictions
async function fetchH2h(homeTeamId: string, awayTeamId: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${homeTeamId}&secondTeamId=${awayTeamId}&APIkey=${apiKey}`,
    { next: { revalidate: 450 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // revalidateTag("fixture");
  // revalidatePath("/");
  return res.json();
}

export const getHeadToHead = cache(fetchH2h);
