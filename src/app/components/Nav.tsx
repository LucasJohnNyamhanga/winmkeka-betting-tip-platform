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
    { name: "Juu magoli 2", link: "/#" },
    { name: "Chini magoli 2", link: "/#" },
    { name: "Juu magoli 3", link: "/#" },
    { name: "Chini magoli 3", link: "/#" },
    { name: "Ushindi", link: "/#" },
    { name: "Ashinde sale", link: "/#" },
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>Tunakupatia Odd Bora Kukuhakikishia Maokoto Yako.</p>
          </div>
        </div>

        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <div className={Styles.logo}>
              <div className={Styles.icon}>
                <Image
                  alt=""
                  src={"/brainas.svg"}
                  objectFit={"contain"}
                  placeholder="blur"
                  blurDataURL={"/brainas.svg"}
                  width={40}
                  height={40}
                />
              </div>
              <div className={Styles.kkkt}>WinMkeka</div>
            </div>
            <div className={Styles.links}>
              <ul>
                <div>
                  <li>
                    Utabili Leo
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
                      Maokoto VIP
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
