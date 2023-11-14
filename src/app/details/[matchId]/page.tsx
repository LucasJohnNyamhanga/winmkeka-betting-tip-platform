import { getSimpleTodayDate } from "@/app/Engine/functions";
import styles from "../../styles/page.module.scss";
import { fixtureType, predictionType } from "@/app/Engine/type";
import {
  getFixtures,
  getHeadToHead,
  getPrediction,
} from "@/app/Engine/fetchRequest";
const today = getSimpleTodayDate();

export async function generateStaticParams() {
  const dataPrediction: predictionType[] = await getPrediction(today, today);
  const dataFixtures: fixtureType[] = await getFixtures(today, today);

  return dataFixtures.map((fixture) => ({
    matchId: fixture.match_id,
  }));
}

export default async function Page({
  params,
}: {
  params: { matchId: string };
}) {
  const dataPrediction: predictionType[] = await getPrediction(today, today);
  const dataFixtures: fixtureType[] = await getFixtures(today, today);

  const fixture = dataFixtures.filter((fix) => {
    return fix.match_id == params.matchId;
  });
  const prediction = dataPrediction.filter((fix) => {
    return fix.match_id == params.matchId;
  });

  const [mechiFixture] = fixture;
  const [mechiPrediction] = prediction;

  const dataHeadToHead = await getHeadToHead(
    mechiFixture.match_hometeam_id,
    mechiFixture.match_awayteam_id
  );
  console.log(dataHeadToHead);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.headerTop}>
          {fixture.map((match) => (
            <div key={match.match_id}>
              {match.match_hometeam_name + "vs" + match.match_awayteam_name}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
