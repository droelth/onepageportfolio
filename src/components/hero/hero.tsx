import Styles from "./heroStyles.module.scss";
import profilePicture from "../../assets/profile.jpeg";
import { FC, Ref } from "react";

interface heroProps {
  homeRef: Ref<HTMLDivElement>
}


const Hero: FC<heroProps> = ({ homeRef }) => {
  
  return (
    <div ref={homeRef} className={Styles.hero}>
      <img src={profilePicture} alt="" className={Styles.heroImg} />
      <h1>
        <span>Hi, I'm Berkay Sütlü,</span> iOS developer based in Istanbul
      </h1>
      <p>
        I am an iOS developer from Istanbul, Turkey with almost 3 years of
        SwiftUI development.
      </p>
      <div className={Styles.heroAction}>
        <div className={Styles.heroConnect}>Connect with me</div>
        <div className={Styles.heroResume}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
