"use client";

import Styles from "../styles/NavMobile.module.scss";
import Image from "next/image";
import Link from "next/link";
import DrawerMobile from "./DrawerMobileMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { countryOptionsType, countryType } from "../Engine/type";

export const NavMobile = ({ countries }: countryType) => {
  let handleSignIn = () => {};

  let handleRegister = () => {};

  let handleLogOut = () => {};

  let handleMobileMenu = (linkValue: string) => {
    //setNavActive(linkValue);
  };

  const betOptions = [
    { name: "Over 2.5 Goals", link: "/#" },
    { name: "Under 2.5 Goals", link: "/#" },
    { name: "Over 3.5 Goals", link: "/#" },
    { name: "Under 3.5 Goals", link: "/#" },
    { name: "Win", link: "/#" },
    { name: "Win or Draw", link: "/#" },
  ];

  let countryOptions: countryOptionsType = [];

  countries.forEach((country) => {
    countryOptions.push({ name: country, link: `/${country}` });
  });

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>Free betting tips with high odds.</p>
          </div>
        </div>
        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <Link passHref href="/">
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
                <div className={Styles.shule}>SureBetTip</div>
              </div>
            </Link>
            <div className={Styles.links}></div>
            <DrawerMobile
              handleMenu={handleMobileMenu}
              navActive={"navActive"}
              handleSignOut={handleLogOut}
              handleSighIn={handleSignIn}
              handleJisajili={handleRegister}
              betOptions={betOptions}
              countries={countryOptions}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
