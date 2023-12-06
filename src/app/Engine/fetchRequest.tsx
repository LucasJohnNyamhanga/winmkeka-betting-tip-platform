import { unstable_cache as cache } from "next/cache";
import { apiKey } from "./functions";

type dataType = {
  from: string;
  to: string;
};

async function fetchData(from: string, to: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${from}&to=${to}&APIkey=${apiKey}&limit=50`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  // revalidateTag("fixture");
  // revalidatePath("/");
  return res.json();
}

export const getFixtures = cache(fetchData, ["fixtures"], { revalidate: 450 });

///Fetch Predictions
async function fetchPrediction(from: string, to: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_predictions&from=${from}&to=${to}&APIkey=${apiKey}`
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

export const getPrediction = cache(fetchPrediction, ["prediction"], {
  revalidate: 450,
});

///Fetch Predictions
async function fetchH2h(homeTeamId: string, awayTeamId: string) {
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${homeTeamId}&secondTeamId=${awayTeamId}&APIkey=${apiKey}`
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

export const getHeadToHead = cache(fetchH2h, ["h2h"], { revalidate: 3600 });
