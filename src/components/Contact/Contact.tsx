import Styles from "./ContactStyles.module.scss";
import Github from "../../assets/Github.png";
import Linkedin from "../../assets/Linkedin.png";
import Mail from "../../assets/Mail.png";
import Instagram from "../../assets/Instagram.png";
import { useRef } from "react";

const Contact = () => {

  const contactRef = useRef(null);


  return (
    <div ref={contactRef} className={Styles.contact}>
      <div className={Styles.contactTitle}>
        <h1>Get in touch</h1>
      </div>

      <div className={Styles.contactSection}>
        <div className={Styles.contactLeft}>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take new projects, so feel free to send
            me a message.
          </p>
          <div className={Styles.contactDetails}>
            <div className={Styles.contactDetail}>
              <img src={Mail} className={Styles.iconImg} alt="" />{" "}
              <p>berkaysutlu94@gmail.com</p>
            </div>
            <div className={Styles.contactDetail}>
              <img src={Linkedin} className={Styles.iconImg} alt="LinkedIn" />
              <a
                href="https://linkedin.com/in/berkaysütlü"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.link}
              >
                linkedin.com/in/berkaysütlü
              </a>
            </div>
            <div className={Styles.contactDetail}>
              <img src={Github} className={Styles.iconImg} alt="" />
              <a
                href="github.com/droelth"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.link}
              >
                github.com/droelth
              </a>
            </div>
            <div className={Styles.contactDetail}>
              <img src={Instagram} className={Styles.iconImg} alt="" />{" "}
              <a
                href="www.instagram.com/beerkays"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.link}
              >
                instagram.com/beerkays
              </a>
            </div>
          </div>
        </div>
        <form className={Styles.contactRight}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here </label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className={Styles.contactSubmit}>
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
