"use client";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  let handleSignIn = () => {};

  let handleSomaBiblia = () => {};

  let handleLogOut = () => {};

  let handleHover = (neno: string) => {};

  const betOptions = [
    { name: "Over 2.5 Goals", link: "/#" },
    { name: "Under 2.5 Goals", link: "/#" },
    { name: "Over 3.5 Goals", link: "/#" },
    { name: "Under 3.5 Goals", link: "/#" },
    { name: "Win", link: "/#" },
    { name: "Win or Draw", link: "/#" },
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>
              Get free betting tips with high odds to maximize your returns.
            </p>
          </div>
        </div>

        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <div className={Styles.logo}>
              <div className={Styles.icon}>
                <Image
                  alt=""
                  src={"/brainas.svg"}
                  style={{ objectFit: "contain" }}
                  placeholder="blur"
                  blurDataURL={"/brainas.svg"}
                  width={40}
                  height={40}
                />
              </div>
              <div className={Styles.kkkt}>SureBetTip</div>
            </div>
            <div className={Styles.links}>
              <ul>
                <div>
                  <li>
                    {`Today's Tips`}
                    <ul>
                      {betOptions.map((value, index) => (
                        <Link href={value.link} key={value.name}>
                          <li>{value.name}</li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                </div>

                <Link href="#">
                  <div
                  // onClick={() => {
                  //   setNavActive("Biblia");
                  // }}
                  >
                    <li
                    // className={
                    //   "Biblia" == navActive ? Styles.active : Styles.links
                    // }
                    >
                      VIP Sure Bets
                    </li>
                  </div>
                </Link>
              </ul>
            </div>
            <div className={Styles.buttonsNav}>user</div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
