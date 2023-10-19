"use client";
import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

const Nav = () => {
  const segment = useSelectedLayoutSegment();

  console.log(segment);
  const router = useRouter();

  const handleNavigation = (nav: string) => {
    router.push(nav);
  };

  return (
    <div className={Styles.container} id={"top"}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>Zingatia Maokoto</p>
          </div>
        </div>
        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <div
              className={Styles.logo}
              onClick={(e) => {
                if (segment != null) {
                  handleNavigation("/");
                } else {
                  handleNavigation("#home");
                }
              }}
            >
              <div className={Styles.datasoft}>
                <div className={Styles.icon}>
                  <Image
                    alt=""
                    src={`/brainas.svg`}
                    placeholder="blur"
                    blurDataURL={`/brainas.svg`}
                    style={{
                      objectFit: "cover",
                      objectPosition: "right",
                    }}
                    quality={100}
                    priority
                    unoptimized={true}
                    width={50}
                    height={50}
                  />
                </div>
                <div className={Styles.name}>WinMkeka</div>
              </div>
            </div>
            <div className={Styles.link}>
              <Link href="/" className={Styles.links}>
                Utabili Leo
              </Link>
              <Link href="/" className={Styles.links}>
                Maokoto VIP
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
