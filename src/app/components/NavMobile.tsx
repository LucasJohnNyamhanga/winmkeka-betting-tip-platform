"use client";
import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/NavMobile.module.scss";
import Image from "next/image";
import Link from "next/link";
import DrawerMobile from "./DrawerMobileMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

export const NavMobile = () => {
  const [limt, setLimit] = useState(0);
  const matches300 = useMediaQuery("(max-width:325px)");

  let handleSignIn = () => {};

  let handleRegister = () => {};

  let handleLogOut = () => {};

  let handleMobileMenu = (linkValue: string) => {
    //setNavActive(linkValue);
  };

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
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
