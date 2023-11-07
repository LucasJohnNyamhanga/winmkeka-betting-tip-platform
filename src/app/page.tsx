import styles from "./styles/page.module.scss";
import { getFixtures } from "./Engine/fetchRequest";
import Card from "./components/card";
import { getTime, getTodayDate } from "./Engine/functions";

type ligiType = {
  fixture: {
    id: number;
    venue: {
      id: number;
      name: string;
      city: string;
    };
    date: string;
    timestamp: number;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
    };
    away: { id: number; name: string; logo: string };
  };
};

export default async function Home() {
  const data = await getFixtures();
  console.log(data.response);
  const dataActive = data.response.slice(87, 112);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={styles.header}
        >{`Free Betting Tips For ${getTodayDate()}`}</div>
        {dataActive.map((res: ligiType, index: number) => (
          <Card
            key={res.fixture.id}
            fixtureId={res.fixture.id}
            time={getTime(res.fixture.date)}
            leagueName={res.league.name}
            country={res.league.country}
            countryFlag={res.league.flag}
            homeTeam={res.teams.home.name}
            awayTeam={res.teams.away.name}
            homeTeamLogo={res.teams.home.logo}
            awayTeamLogo={res.teams.away.logo}
          />
        ))}
      </main>
    </div>
  );
}
