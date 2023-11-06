import styles from "./styles/page.module.scss";
import { getFixtures } from "./Engine/fetchRequest";
import Card from "./components/card";

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
  const dataActive = data.response.slice(0, 15);

  const getTime = (date: string) => {
    let muda = new Date(date);
    var GMTtime =
      muda.getUTCMonth() +
      1 +
      "/" +
      muda.getUTCDate() +
      "/" +
      muda.getUTCFullYear() +
      " " +
      muda.getUTCHours() +
      ":" +
      muda.getUTCMinutes() +
      ":" +
      muda.getUTCSeconds() +
      " GMT";
    let myTime = new Date(GMTtime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return myTime; // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
