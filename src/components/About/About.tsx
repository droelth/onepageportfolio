import Styles from "./AboutStyles.module.scss";
import { useRef } from "react";
import profileImg from "../../assets/profile.jpeg";
const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  
  return (
    <div ref={aboutRef} className={Styles.about}>
      <div className={Styles.aboutTitle}>
        <h1>About Me</h1>
      </div>

      <div className={Styles.aboutSections}>
        <div className={Styles.aboutLeft}>
          <img src={profileImg} alt="" className={Styles.profileImg} />
        </div>

        <div className={Styles.aboutRight}>
          <div className={Styles.aboutPara}>
            <p>I am an iOS developer experienced in mainly SwiftUI.</p>
            <p>
              My passion is to reach the high levels to be able to make better
              applications
            </p>
          </div>

          <div className={Styles.aboutSkills}>
            <div className={Styles.aboutSkill}>
              <p>SwiftUI </p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className={Styles.aboutSkill}>
              <p>UIKit </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className={Styles.aboutSkill}>
              <p>React JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className={Styles.aboutSkill}>
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.aboutAchievements}>
        <div className={Styles.aboutAchievement}>
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className={Styles.aboutAchievement}>
          <h1>2</h1>
          <p>Community Membership</p>
          <div className={Styles.communities}>
            <a
              href="https://www.instagram.com/meetingchallenge"
              className={Styles.communityLink}
            >
              Meeting Challenge
            </a>
            <a
              href="https://www.instagram.com/icommunitycomtr/"
              className={Styles.communityLink}
            >
              iCommunity
            </a>
          </div>
        </div>
        <hr />
        <div className={Styles.aboutAchievement}>
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
