import Styles from "./FooterStyles.module.scss"
import moon from "../../assets/moonay.png"

const Footer = () => {
  return (
    <div className={Styles.mainContainer}>
        <div className={Styles.leftContainer}>
            <img src={moon} alt="" />
        </div>
        <div className={Styles.socials}>
            <ul>
                <li>
                    <a href="">Github</a>
                    <a href="">Medium</a>
                    <a href="">Instagram</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer