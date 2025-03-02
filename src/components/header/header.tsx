import Styles from "./headerStyles.module.scss";
import moon from "../../assets/loopay.mp4";
import { useState, Ref, FC } from "react";

interface HeaderProps {
  aboutRef: Ref<HTMLDivElement>;
}
interface HeaderProps {
  homeRef: Ref<HTMLDivElement>;
}
interface HeaderProps {
  servicesRef: Ref<HTMLDivElement>;
}
interface HeaderProps {
  worksRef: Ref<HTMLDivElement>;
}
interface HeaderProps {
  mediumRef: Ref<HTMLDivElement>;
}
interface HeaderProps {
  contactRef: Ref<HTMLDivElement>;
}

const Header: FC<HeaderProps> = ({ aboutRef, homeRef, servicesRef, worksRef, mediumRef, contactRef}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className={Styles.mainContainer}>
      <video
        src={moon}
        className={Styles.video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <ul className={Styles.navMenu}>
        <li className={Styles.navItem}>
          <p
            onClick={() => {
              setMenu("home");
              homeRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            style={
              menu === "home"
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            HOME
          </p>
        </li>
        <li className={Styles.navItem}>
          <p
            onClick={() => {
              setMenu("about");
              aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            style={
              menu === "about"
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            ABOUT
          </p>
        </li>
        <li className={Styles.navItem}>
          <p
            onClick={() => {
              setMenu("services");
              servicesRef?.current?.scrollIntoView();
            }}
            style={
              menu === "services"
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            SERVICES
          </p>
        </li>
        <li className={Styles.navItem}>
          <p
            onClick={() => {
              setMenu("works");
              worksRef?.current?.scrollIntoView();
            }}
            style={
              menu === "works"
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            WORKS
          </p>
        </li>
        <li className={Styles.navItem}>
          <p
            onClick={() => {
              setMenu("medium");
              mediumRef?.current?.scrollIntoView();
            }}
            style={
              menu === "medium"
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            MEDIUM
          </p>
        </li>
      </ul>

      <div className={Styles.navItemConnect} onClick={() => { 
        contactRef?.current.scrollIntoView();
      }}>
        Connect
        </div>
    </div>
  );
};

export default Header;
