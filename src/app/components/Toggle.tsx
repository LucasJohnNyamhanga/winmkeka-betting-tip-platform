"use client";
type dataType = {
  name: string;
  list: { name: string; link: string }[];
  action: (action: string) => void;
  setActiveName: (name: string) => void;
  activeName: string;
};

import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../styles/toggle.module.scss";

const Toggle = ({
  name,
  list,
  action,
  setActiveName,
  activeName,
}: dataType) => {
  const [submenu, setSubmenu] = useState(false);

  const handleMenu = () => {
    setSubmenu(!submenu);
  };

  useEffect(() => {
    if (activeName == name) {
      setSubmenu(true);
    } else {
      setSubmenu(false);
    }
  }, [name, activeName]);
  return (
    <div className={Styles.container}>
      <div
        className={
          activeName == name
            ? `${Styles.toggle} ${Styles.active}`
            : Styles.toggle
        }
        onClick={() => {
          //handleMenu();
          setActiveName(name);
        }}
      >
        {name}
      </div>
      {submenu && activeName == name && (
        <div className={Styles.innerContainer}>
          {list.map((item, index) => (
            <div className={Styles.itemHolder} key={index}>
              <Link href={item.link}>
                <div className={Styles.anchor}>
                  <div
                    className={Styles.item}
                    onClick={(e) => {
                      action(name);
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toggle;
