import styles from "./styles/page.module.scss";
import { getFixtures } from "./Engine/fetchRequest";
import Card from "./components/card";
import { compareByPriorty, getTime, getTodayDate } from "./Engine/functions";
import { fixtureType } from "./Engine/type";

export default async function Home() {
  const data = await getFixtures();
  const fixtures = data.response;

  let countriesFixture: { name: string; priority: number }[] = [];
  let priorityCountries: { name: string; priority: number }[] = [
    { name: "Tanzania", priority: 1 },
    { name: "World", priority: 2 },
    { name: "England", priority: 2 },
    { name: "Congo-DR", priority: 4 },
    { name: "Italy", priority: 2 },
    { name: "Malawi", priority: 4 },
    { name: "Zambia", priority: 4 },
    { name: "Egypt", priority: 4 },
    { name: "Ghana", priority: 4 },
    { name: "Saudi-Arabia", priority: 3 },
    { name: "Egypt", priority: 4 },
    { name: "Ivory-Coast", priority: 3 },
  ];
  fixtures.map((fixture: fixtureType) => {
    if (
      countriesFixture.some((contry) => contry.name === fixture.league.country)
    ) {
    } else {
      let priorityAssigned = 5;
      priorityCountries.some((contry) => {
        if (contry.name === fixture.league.country) {
          priorityAssigned = contry.priority;
        }
      });

      countriesFixture.push({
        name: fixture.league.country,
        priority: priorityAssigned,
      });
    }
  });

  countriesFixture.sort(compareByPriorty);
  console.log(countriesFixture);

  let dataFixtureByCountry: { country: string; fixture: fixtureType[] }[] = [];

  countriesFixture.map((contry) => {
    let fixtureByCountry = fixtures.filter(function (fixture: fixtureType) {
      return contry.name === fixture.league.country;
    });

    dataFixtureByCountry.push({
      country: contry.name,
      fixture: fixtureByCountry,
    });
  });

  const dataActive = dataFixtureByCountry.slice(0, 3);
  console.log(dataActive);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={styles.headerTop}
        >{`Free Betting Tips For ${getTodayDate()}`}</div>
        {dataActive.map(
          (match: { country: string; fixture: fixtureType[] }) => (
            <>
              <div className={styles.header}>{match.country}</div>
              {match.fixture.map(
                (res) =>
                  typeof res.fixture.id == "number" && (
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
                  )
              )}
            </>
          )
        )}
      </main>
    </div>
  );
}
