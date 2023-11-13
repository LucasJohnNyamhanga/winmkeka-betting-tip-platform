import {
  unstable_cache as cache,
  revalidateTag,
  revalidatePath,
} from "next/cache";
import { apiKey, getSimpleTodayDate } from "./functions";

async function fetchData() {
  let today = getSimpleTodayDate();
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_events&from=${today}&to=${today}&APIkey=${apiKey}`,
    { method: "GET", next: { revalidate: 900, tags: ["fixture"] } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  revalidateTag("fixture");
  revalidatePath("/");
  return res.json();
}

export const getFixtures = cache(fetchData);

///Fetch Predictions
async function fetchPrediction() {
  let today = getSimpleTodayDate();
  const res = await fetch(
    `https://apiv3.apifootball.com/?action=get_predictions&from=${today}&to=${today}&APIkey=${apiKey}`,
    { method: "GET", next: { revalidate: 900, tags: ["fixture"] } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  revalidateTag("fixture");
  revalidatePath("/");
  return res.json();
}

export const getPrediction = cache(fetchPrediction);
