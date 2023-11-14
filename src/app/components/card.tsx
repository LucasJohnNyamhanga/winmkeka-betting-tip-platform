import styles from "../styles/card.module.scss";
import Image from "next/image";
import { customTruncate, emptyLogo } from "../Engine/functions";
import { dataMainType } from "../Engine/type";
import Link from "next/link";

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
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <div className={styles.flag}>
            <div className={styles.event}>
              <div className={styles.name}>
                {customTruncate(league.leagueName, 25)}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Team}>
          <div className={styles.home}>
            <div className={styles.name}>
              <div className={styles.image}>
                <Image
                  alt=""
                  src={
                    league.homeTeamLogo == "" ? emptyLogo : league.homeTeamLogo
                  }
                  style={{ objectFit: "contain" }}
                  width={25}
                  height={25}
                  unoptimized
                  priority={false}
                  quality={1}
                />
              </div>
              <div className={styles.nameDisplay}>
                {customTruncate(league.homeTeam, 15)}
              </div>
            </div>
            <div className={styles.formListHome}>
              {league.data.fixture.match_hometeam_ft_score}
            </div>
          </div>
          <div className={styles.vs}>{` vs `}</div>
          <div className={styles.away}>
            <div className={styles.name}>
              <div className={styles.image}>
                <Image
                  alt=""
                  src={
                    league.awayTeamLogo == "" ? emptyLogo : league.awayTeamLogo
                  }
                  width={25}
                  height={25}
                  unoptimized
                  priority={false}
                  quality={1}
                />
              </div>
              <div className={styles.nameDisplay}>
                {customTruncate(league.awayTeam, 15)}
              </div>
            </div>
            <div className={styles.formListAway}>
              {league.data.fixture.match_awayteam_ft_score}
            </div>
          </div>
        </div>
        <div className={styles.Prediction}>
          {parseInt(league.data.prediction.prob_HW) > 65
            ? `${customTruncate(league.homeTeam, 15)} to win`
            : parseInt(league.data.prediction.prob_HW_D) > 75
            ? `${customTruncate(league.homeTeam, 15)} to Win or Draw`
            : parseInt(league.data.prediction.prob_AW_D) > 75
            ? `${customTruncate(league.awayTeam, 15)} to Win or Draw`
            : parseInt(league.data.prediction.prob_AW) > 65
            ? `${customTruncate(league.awayTeam, 15)} to win`
            : parseInt(league.data.prediction.prob_D) > 65
            ? `Draw`
            : parseInt(league.data.prediction.prob_HW_AW) > 65
            ? `${customTruncate(league.homeTeam, 15)} or ${customTruncate(
                league.awayTeam,
                15
              )} to win`
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
            : parseInt(league.data.prediction.prob_bts) > 60
            ? `Both Team To Score`
            : parseInt(league.data.prediction.prob_ots) > 60
            ? `Only one Team to Score`
            : `${customTruncate(league.homeTeam, 15)} or ${customTruncate(
                league.awayTeam,
                15
              )} to win`}
        </div>
        <Link href={`/details/${league.data.fixture.match_id}`}>
          <div className={styles.details}>More Details</div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
