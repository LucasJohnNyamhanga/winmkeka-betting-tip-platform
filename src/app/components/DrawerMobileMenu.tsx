import { Drawer, Box, List, ListItemText, Divider } from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Styles from "../styles/drawerMobile.module.scss";
import Toggle from "./Toggle";

type dataType = {
  handleMenu: (linkValue: string) => void;
  handleSignOut: () => void;
  handleSighIn: () => void;
  handleJisajili: () => void;
  navActive: string;
};

export const MuiDrawer = ({
  handleMenu,
  navActive,
  handleSignOut,
  handleSighIn,
  handleJisajili,
}: dataType) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const humberger = useRef<HTMLDivElement>(null!);
  const [activeName, setactiveName] = useState("");

  useEffect(() => {}, [navActive]);

  const handleSetActiveName = (name: string) => {
    setactiveName(name);
  };

  let handleMenuClick = (linkValue: string) => {
    humberger.current.classList.toggle(Styles.isActive);

    setIsDrawerOpen(!isDrawerOpen);
    if (linkValue != "") {
      handleMenu(linkValue);
    }

    setactiveName("");
  };

  let handleClose = () => {
    setIsDrawerOpen(!isDrawerOpen);
    humberger.current.classList.toggle(Styles.isActive);
    setactiveName("");
  };

  const betOptions = [
    { name: "Over 2.5 Goals", link: "/#" },
    { name: "Under 2.5 Goals", link: "/#" },
    { name: "Over 3.5 Goals", link: "/#" },
    { name: "Under 3.5 Goals", link: "/#" },
    { name: "Win", link: "/#" },
    { name: "Win or Draw", link: "/#" },
  ];

  return (
    <>
      <div
        ref={humberger}
        onClick={() => {
          handleMenuClick("");
        }}
        className={`${Styles.buttonsNav}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleClose}>
        <div className={Styles.main}> </div>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          {/* <ListItemText primary={`WINMKEKA`} /> */}

          <List>
            <Toggle
              list={betOptions}
              name={`Today's Tips`}
              action={handleMenuClick}
              activeName={activeName}
              setActiveName={handleSetActiveName}
            />
            <Divider />
            {/* <Divider /> */}
            <Link href={"/"}>
              <div
                className={
                  "Mwanzo" == navActive ? Styles.active : Styles.setCenter
                }
                onClick={() => {
                  handleMenuClick("Mwanzo");
                }}
              >
                VIP Sure Bets
              </div>
            </Link>
            <Divider />
          </List>
          <ListItemText primary={`ACCOUNT`} />
          <Divider />
          <List>
            {false ? (
              <>
                <Link href={"/Admin"}>
                  <div
                    onClick={() => {
                      handleMenuClick("");
                    }}
                    className={Styles.setCenter}
                  >
                    My Account
                  </div>
                </Link>
                <Divider />
                <div
                  className={Styles.activeCredential}
                  onClick={() => {
                    handleSignOut();
                    handleMenuClick("");
                  }}
                >
                  Sign Out
                </div>
                <Divider />
              </>
            ) : (
              <>
                {/* <div
                  className={Styles.activeCredential}
                  onClick={() => {
                    handleJisajili();
                    handleMenuClick("");
                  }}
                >
                  Jisajili
                </div>
                <Divider /> */}
                <div
                  className={Styles.activeCredential}
                  onClick={() => {
                    handleSighIn();
                    handleMenuClick("");
                  }}
                >
                  Register
                </div>
                <Divider />
              </>
            )}
            <Divider />
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
