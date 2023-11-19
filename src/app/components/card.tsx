import styles from "../styles/card.module.scss";
import Image from "next/image";
import {
  customTruncate,
  emptyLogo,
  getPredictionDetail,
} from "../Engine/functions";
import { dataMainType, fixtureType, predictionType } from "../Engine/type";
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
          {getPredictionDetail(league.data.prediction, league.data.fixture)}
        </div>
        <Link href={`/details/${league.data.fixture.match_id}`}>
          <div className={styles.details}>More Details</div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
