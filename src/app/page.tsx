import styles from "./styles/page.module.scss";
import { getFixtures, getPrediction } from "./Engine/fetchRequest";
import Card from "./components/card";
import {
  compareByPriorty,
  emptyLogo,
  getRandomNumber,
  getSimpleTodayDate,
  getTodayDate,
} from "./Engine/functions";
import { dataMainType, fixtureType, predictionType } from "./Engine/type";
import Image from "next/image";

export default async function Home() {
  const today = getSimpleTodayDate();
  const dataPrediction: predictionType[] = await getPrediction(today, today);
  const dataFixtures: fixtureType[] = await getFixtures(today, today);

  let dataMain: dataMainType[] = [];

  dataFixtures.forEach((fixture) => {
    dataPrediction.some((prediction) => {
      if (prediction.match_id === fixture.match_id) {
        dataMain.push({ fixture, prediction });
      }
    });
  });

  //console.log(dataMain);

  let countriesFixture: { name: string; flag: string; priority: number }[] = [];
  let priorityCountries: { name: string; priority: number }[] = [
    { name: "Tanzania", priority: 1 },
    { name: "eurocups", priority: 2 },
    { name: "England", priority: 1 },
    { name: "Spain", priority: 2 },
    { name: "Italy", priority: 2 },
    { name: "France", priority: 2 },
    { name: "Belgium", priority: 3 },
    { name: "Egypt", priority: 4 },
    { name: "Germany", priority: 2 },
    { name: "Saudi Arabia", priority: 3 },
    { name: "South Africa", priority: 4 },
    { name: "Portugal", priority: 2 },
    { name: "Turkey", priority: 3 },
    { name: "Ghana", priority: 4 },
    { name: "Burundi", priority: 4 },
    { name: "Algeria", priority: 4 },
    { name: "Kenya", priority: 4 },
    { name: "Morocco", priority: 3 },
    { name: "Ivory Coast", priority: 4 },
  ];

  dataMain.forEach((data) => {
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
        flag: data.fixture.country_logo,
        priority: priorityAssigned,
      });
    }
  });

  countriesFixture.sort(compareByPriorty);
  //console.log(countriesFixture);

  let dataFixtureByCountry: {
    country: string;
    flag: string;
    fixture: dataMainType[];
  }[] = [];

  countriesFixture.forEach((contry) => {
    let fixtureByCountry = dataMain.filter(function (data) {
      return contry.name === data.fixture.country_name;
    });

    dataFixtureByCountry.push({
      country: contry.name,
      flag: contry.flag,
      fixture: fixtureByCountry,
    });
  });

  const leaguesByCountries: string[] = [
    "Premier League",
    "Bundesliga",
    "Serie A",
    "La Liga",
    "Süper Lig",
    "Ligue 1",
  ];

  let dataFixtureByCountrySorted: {
    country: string;
    flag: string;
    fixture: dataMainType[];
  }[] = [];

  dataFixtureByCountry.forEach((match) => {
    let target = match.fixture;
    let found: dataMainType[] = [];
    match.fixture.map((mechi) => {
      if (leaguesByCountries.includes(mechi.fixture.league_name)) {
        let index = match.fixture.indexOf(mechi);
        found.push(mechi);
        target.splice(index, 1);
      }
    });

    target = [...found, ...target];

    dataFixtureByCountrySorted.push({
      country: match.country,
      flag: match.flag,
      fixture: target,
    });
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={styles.headerTop}
        >{`Free Betting Tips For ${getTodayDate()}`}</div>
        {dataFixtureByCountrySorted.map((match) => (
          <div key={match.country}>
            <div className={styles.headerTopImage}>
              <Image
                alt=""
                src={match.flag == "" ? emptyLogo : match.flag}
                style={{ objectFit: "contain" }}
                width={25}
                height={25}
                unoptimized
                quality={1}
                priority={false}
              />
              <div className={styles.text}>{match.country}</div>
            </div>
            {match.fixture.map((data, index) => (
              <Card
                key={
                  parseInt(data.fixture.match_id) + getRandomNumber() + index
                }
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
          </div>
        ))}
      </main>
    </div>
  );
}
