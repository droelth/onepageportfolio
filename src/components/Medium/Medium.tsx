import Styles from "./MediumStyles.module.scss"
import mediumData from "../../assets/mediumData.tsx"
import { FC, Ref } from "react";

interface mediumProps{
  mediumRef: Ref<HTMLDivElement>
}

const Medium: FC<mediumProps> = ({mediumRef}) => {

    return (
      <div ref={mediumRef} className={Styles.fullContainer}>
        <div className={Styles.Container}>
          <div className={Styles.mediumTitle}>Medium Articles</div>
        </div>
        <div className={Styles.mediumContainer}>
          {mediumData.map((medium, _) => (
            <div key={medium.id} className={Styles.mediumItem}>
              <img src={medium.imageString} alt={medium.title} className={Styles.imageString}/>
              <h3>{medium.title}</h3>
              <p>{medium.desc}</p>
              <a href={medium.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Medium;