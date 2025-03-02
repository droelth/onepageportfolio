import Styles from "./WorksStyles.module.scss";
import works_data from "../../assets/works";
import { useRef } from "react";

const Works = () => {

  const worksRef = useRef(null);
  return (
    <section ref= {worksRef}>
    <div className={Styles.worksContainers}>
      <div className={Styles.worksTitle}>
        <h1>My latest works</h1>
      </div>
      <div className={Styles.worksContainer}>
        {works_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={work.w_name} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Works;
