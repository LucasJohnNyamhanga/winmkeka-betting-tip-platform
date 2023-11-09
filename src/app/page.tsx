import styles from "./styles/page.module.scss";
import { getFixtures, getPrediction } from "./Engine/fetchRequest";
import Card from "./components/card";
import {
  compareByPriorty,
  getSimpleTodayDate,
  getTime,
  getTodayDate,
} from "./Engine/functions";
import { dataMainType, fixtureType, predictionType } from "./Engine/type";

export default async function Home() {
  const dataPrediction: predictionType[] = await getPrediction(
    getSimpleTodayDate(),
    getSimpleTodayDate()
  );
  const dataFixtures: fixtureType[] = await getFixtures(
    getSimpleTodayDate(),
    getSimpleTodayDate()
  );
  //console.log(dataPrediction);

  let dataMain: dataMainType[] = [];

  dataFixtures.map((fixture) => {
    dataPrediction.some((prediction) => {
      if (prediction.match_id === fixture.match_id) {
        dataMain.push({ fixture, prediction });
      }

      if (fixture.match_hometeam_name == "Stade d Abidjan") {
        console.log(fixture.team_home_badge);
      }
    });
  });

  //console.log(dataMain);

  let countriesFixture: { name: string; priority: number }[] = [];
  let priorityCountries: { name: string; priority: number }[] = [
    { name: "Tanzania", priority: 1 },
    { name: "eurocups", priority: 2 },
    { name: "England", priority: 2 },
    { name: "Congo-DR", priority: 4 },
    { name: "Italy", priority: 2 },
    { name: "Malawi", priority: 4 },
    { name: "Zambia", priority: 4 },
    { name: "Egypt", priority: 4 },
    { name: "Ghana", priority: 4 },
    { name: "Saudi Arabia", priority: 3 },
    { name: "Egypt", priority: 4 },
    { name: "Ivory Coast", priority: 3 },
  ];

  dataMain.map((data) => {
    if (
      countriesFixture.some(
        (contry) => contry.name === data.fixture.country_name
      )
    ) {
    } else {
      let priorityAssigned = 5;
      priorityCountries.some((contry) => {
        if (contry.name === data.fixture.country_name) {
          priorityAssigned = contry.priority;
        }
      });

      countriesFixture.push({
        name: data.fixture.country_name,
        priority: priorityAssigned,
      });
    }
  });

  countriesFixture.sort(compareByPriorty);
  //console.log(countriesFixture);

  let dataFixtureByCountry: { country: string; fixture: dataMainType[] }[] = [];

  countriesFixture.map((contry) => {
    let fixtureByCountry = dataMain.filter(function (data) {
      return contry.name === data.fixture.country_name;
    });

    dataFixtureByCountry.push({
      country: contry.name,
      fixture: fixtureByCountry,
    });
  });

  const dataActive = dataFixtureByCountry.slice(0, 3);
  console.log(dataActive);

  // const getFixture = (id: number) => {
  //   console.log(id);
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={styles.headerTop}
        >{`Free Betting Tips For ${getTodayDate()}`}</div>
        {dataFixtureByCountry.map((match) => (
          <>
            <div className={styles.header}>{match.country}</div>
            {match.fixture.map((data, index) => (
              <Card
                key={parseInt(data.fixture.match_id) + index}
                data={data}
                time={data.fixture.match_date}
                leagueName={data.fixture.league_name}
                country={data.fixture.country_name}
                countryFlag={data.fixture.country_logo}
                homeTeam={data.fixture.match_hometeam_name}
                awayTeam={data.fixture.match_awayteam_name}
                homeTeamLogo={data.fixture.team_home_badge}
                awayTeamLogo={data.fixture.team_away_badge}
              />
            ))}
          </>
        ))}
      </main>
    </div>
  );
}
