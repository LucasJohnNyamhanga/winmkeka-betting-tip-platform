import styles from "../styles/card.module.scss";
import Image from "next/image";
import { customTruncate } from "../Engine/functions";
import { fetchPrediction } from "../Engine/fetchRequest";

type leagueType = {
  fixtureId: number;
  time: string;
  leagueName: string;
  country: string;
  countryFlag: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamLogo: string;
  awayTeamLogo: string;
};

async function Card(league: leagueType) {
  const data = await fetchPrediction(league.fixtureId);
  console.log(data.response[0].predictions);
  const formHome = data.response[0].teams.home.league.form;
  const teamFormHome =
    typeof formHome == "string" ? formHome.split("").slice(-5) : [];

  const formAway = data.response[0].teams.away.league.form;
  const teamFormAway =
    typeof formAway == "string" ? formAway.split("").slice(-5) : [];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <div className={styles.time}>{league.time}</div>
          <div className={styles.flag}>
            <Image
              alt=""
              src={league.countryFlag ?? "/brainas.svg"}
              style={{ objectFit: "contain" }}
              placeholder="blur"
              blurDataURL={league.countryFlag ?? "/brainas.svg"}
              width={40}
              height={40}
            />
            <div className={styles.event}>
              <div className={styles.name}>{league.country}</div>
              <div className={styles.name}>
                {customTruncate(league.leagueName, 15)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Team}>
          <div className={styles.home}>
            <div className={styles.formListHome}>
              {teamFormHome.map((form: string, index: number) => (
                <div
                  key={index}
                  className={`${styles.fiveresults} ${
                    form === "W"
                      ? styles.win
                      : form === "D"
                      ? styles.draw
                      : styles.lose
                  }`}
                >
                  <div className={styles.result}>{form}</div>
                </div>
              ))}
            </div>

            <div className={styles.teamBoundary}>
              <div className={styles.name}>
                <div className={styles.image}>
                  <Image
                    alt=""
                    src={league.homeTeamLogo ?? "/brainas.svg"}
                    style={{ objectFit: "contain" }}
                    placeholder="blur"
                    blurDataURL={league.homeTeamLogo ?? "/brainas.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                {customTruncate(league.homeTeam, 15)}
              </div>

              <div className={styles.vs}>{` vs `}</div>
              <div className={styles.away}>
                <div className={styles.name}>
                  {customTruncate(league.awayTeam, 15)}
                </div>
                <div className={styles.image}>
                  <Image
                    alt=""
                    src={league.awayTeamLogo ?? "/brainas.svg"}
                    style={{ objectFit: "contain" }}
                    placeholder="blur"
                    blurDataURL={league.awayTeamLogo ?? "/brainas.svg"}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className={styles.formListAway}>
              {teamFormAway.map((form: string, index: number) => (
                <div
                  className={`${styles.fiveresults} ${
                    form === "W"
                      ? styles.win
                      : form === "D"
                      ? styles.draw
                      : styles.lose
                  }`}
                  key={index}
                >
                  <div className={styles.result}>{form}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.Prediction}>
          {`${customTruncate(data.response[0].predictions.winner.name, 10)} ${
            data.response[0].predictions.win_or_draw ? "Win or Draw" : "Win"
          } ${
            data.response[0].predictions.under_over
              ? "and " + data.response[0].predictions.under_over + " goals"
              : ""
          }`}
          {}
        </div>
      </div>
    </div>
  );
}

export default Card;
