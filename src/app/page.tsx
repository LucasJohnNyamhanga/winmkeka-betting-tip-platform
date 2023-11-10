import styles from "./styles/page.module.scss";
import { getFixtures, getPrediction } from "./Engine/fetchRequest";
import Card from "./components/card";
import {
  compareByPriorty,
  emptyLogo,
  getSimpleTodayDate,
  getTodayDate,
} from "./Engine/functions";
import { dataMainType, fixtureType, predictionType } from "./Engine/type";
import Image from "next/image";

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

  countriesFixture.map((contry) => {
    let fixtureByCountry = dataMain.filter(function (data) {
      return contry.name === data.fixture.country_name;
    });

    dataFixtureByCountry.push({
      country: contry.name,
      flag: contry.flag,
      fixture: fixtureByCountry,
    });
  });

  const dataActive = dataFixtureByCountry.slice(0, 3);
  console.log(countriesFixture);

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
            <div className={styles.headerTopImage}>
              <Image
                alt=""
                src={match.flag == "" ? emptyLogo : match.flag}
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL={"/brainas.svg"}
                width={35}
                height={35}
              />
              <div className={styles.text}>{match.country}</div>
            </div>
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
