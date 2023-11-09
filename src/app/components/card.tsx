import styles from "../styles/card.module.scss";
import Image from "next/image";
import { customTruncate } from "../Engine/functions";
import { dataMainType } from "../Engine/type";

type leagueType = {
  data: dataMainType;
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
  const emptyLogo = `https://apiv3.apifootball.com/badges/27845_stade-dabidjan.jpg`;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <div className={styles.flag}>
            <Image
              alt=""
              src={league.countryFlag == "" ? emptyLogo : league.countryFlag}
              style={{ objectFit: "contain" }}
              placeholder="blur"
              blurDataURL={"/brainas.svg"}
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
              {/* {teamFormHome.map((form: string, index: number) => (
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
                  ))} */}
              {league.data.fixture.match_hometeam_ft_score}
            </div>

            <div className={styles.teamBoundary}>
              <div className={styles.name}>
                <div className={styles.image}>
                  <Image
                    alt=""
                    src={
                      league.homeTeamLogo == ""
                        ? emptyLogo
                        : league.homeTeamLogo
                    }
                    style={{ objectFit: "contain" }}
                    placeholder="blur"
                    blurDataURL={"/brainas.svg"}
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
                    src={
                      league.awayTeamLogo == ""
                        ? emptyLogo
                        : league.awayTeamLogo
                    }
                    style={{ objectFit: "contain" }}
                    placeholder="blur"
                    blurDataURL={"/brainas.svg"}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
            <div className={styles.formListAway}>
              {league.data.fixture.match_awayteam_ft_score}
            </div>
          </div>
        </div>
        <div className={styles.Prediction}>
          {parseInt(league.data.prediction.prob_HW) > 65
            ? `Home to win`
            : parseInt(league.data.prediction.prob_HW_D) > 75
            ? `Home to Win or Draw`
            : parseInt(league.data.prediction.prob_AW_D) > 75
            ? `Away to Win or Draw`
            : parseInt(league.data.prediction.prob_AW) > 65
            ? `Away to win`
            : parseInt(league.data.prediction.prob_D) > 65
            ? `Draw`
            : parseInt(league.data.prediction.prob_HW_AW) > 65
            ? `Home or Away to win`
            : parseInt(league.data.prediction.prob_bts) > 60
            ? `Both Team To Score`
            : parseInt(league.data.prediction.prob_O_1) > 60
            ? `Over 1.5 goals`
            : parseInt(league.data.prediction.prob_O) > 60
            ? `Over 2.5 goals`
            : parseInt(league.data.prediction.prob_O_3) > 60
            ? `Over 3.5 goals`
            : parseInt(league.data.prediction.prob_U_3) > 60
            ? `Under 3.5 goals`
            : parseInt(league.data.prediction.prob_U) > 60
            ? `Under 2.5 goals`
            : parseInt(league.data.prediction.prob_U_1) > 60
            ? `Under 1.5 goals`
            : parseInt(league.data.prediction.prob_ots) > 60
            ? `Only one Team to Score`
            : `Home or Away to win`}
        </div>
        <div className={styles.details}>More Details</div>
      </div>
    </div>
  );
  // } else {
  //   return <></>;
  // }
  // } else {
  //   return <></>;
  // }
}

export default Card;
