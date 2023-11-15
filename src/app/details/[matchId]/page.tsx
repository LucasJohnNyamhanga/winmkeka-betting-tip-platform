import {
  customTruncate,
  emptyLogo,
  getSimpleTodayDate,
} from "@/app/Engine/functions";
import styles from "../../styles/deatilsPage.module.scss";
import { fixtureType, h2hType, predictionType } from "@/app/Engine/type";
import {
  getFixtures,
  getHeadToHead,
  getPrediction,
} from "@/app/Engine/fetchRequest";
import Image from "next/image";

const today = getSimpleTodayDate();

export async function generateStaticParams() {
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

  const dataHeadToHead: h2hType = await getHeadToHead(
    mechiFixture.match_hometeam_id,
    mechiFixture.match_awayteam_id
  );
  console.log(dataHeadToHead);

  const checkWinningH2H = () => {
    if (dataHeadToHead.firstTeam_VS_secondTeam.length > 0) {
      let homeTeamWin = 0;
      let awayTeamWin = 0;
      let totalGames = dataHeadToHead.firstTeam_VS_secondTeam.length;
      dataHeadToHead.firstTeam_VS_secondTeam.forEach((data) => {
        //check home team wining in all meetings
        if (data.match_hometeam_name === mechiFixture.match_hometeam_name) {
          if (data.match_hometeam_score > data.match_awayteam_score) {
            homeTeamWin++;
          }
        }
        if (data.match_awayteam_name === mechiFixture.match_hometeam_name) {
          if (data.match_hometeam_score < data.match_awayteam_score) {
            homeTeamWin++;
          }
        }

        //check away team wining in all meetings
        if (data.match_hometeam_name === mechiFixture.match_awayteam_name) {
          if (data.match_hometeam_score > data.match_awayteam_score) {
            awayTeamWin++;
          }
        }
        if (data.match_awayteam_name === mechiFixture.match_awayteam_name) {
          if (data.match_hometeam_score < data.match_awayteam_score) {
            awayTeamWin++;
          }
        }
      });

      return `${
        mechiFixture.match_hometeam_name
      } has won ${homeTeamWin} while ${
        mechiFixture.match_awayteam_name
      } has won ${awayTeamWin} and they have drawn ${
        totalGames - (homeTeamWin + awayTeamWin)
      } times in their last ${totalGames} meetings`;
    }

    return `${mechiFixture.match_hometeam_name} and ${mechiFixture.match_awayteam_name} are meeting for the first time`;
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.headerTop}>
          <div className={styles.leagueName}>{mechiFixture.league_name}</div>
          <div className={styles.stadiumDetails}>
            <div
              className={styles.Stadium}
            >{`Stadium : ${mechiFixture.match_stadium}`}</div>
            <div className={styles.date}>{mechiFixture.match_date}</div>
          </div>
          <div className={styles.teams}>
            <div className={styles.board}>
              <div className={styles.homeTeam}>
                <Image
                  alt=""
                  src={
                    mechiFixture.team_home_badge == ""
                      ? emptyLogo
                      : mechiFixture.team_home_badge
                  }
                  style={{ objectFit: "contain" }}
                  width={50}
                  height={50}
                  unoptimized
                  quality={1}
                  priority={false}
                />
                <div className={styles.text}>
                  {customTruncate(mechiFixture.match_hometeam_name, 15)}
                </div>
              </div>
              <div className={styles.score}>
                {mechiFixture.match_hometeam_score}
              </div>
            </div>
            <div className={styles.vs}>VS</div>
            <div className={styles.boardAway}>
              <div className={styles.awayTeam}>
                <Image
                  alt=""
                  src={
                    mechiFixture.team_away_badge == ""
                      ? emptyLogo
                      : mechiFixture.team_away_badge
                  }
                  style={{ objectFit: "contain" }}
                  width={50}
                  height={50}
                  unoptimized
                  quality={1}
                  priority={false}
                />
                <div className={styles.text}>
                  {customTruncate(mechiFixture.match_awayteam_name, 15)}
                </div>
              </div>
              <div className={styles.score}>
                {mechiFixture.match_awayteam_score}
              </div>
            </div>
          </div>
          <div className={styles.winningHeader}>Last meeting status</div>
          <div className={styles.winningHeadToHead}>
            <div>{checkWinningH2H()}</div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
