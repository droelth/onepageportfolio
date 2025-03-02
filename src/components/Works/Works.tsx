import Styles from "./WorksStyles.module.scss";
import works_data from "../../assets/works";
import { Ref, FC } from "react";

interface worksProps {
    worksRef: Ref<HTMLDivElement>
}

const Works: FC<worksProps> = ({worksRef}) => {

  return (
    <section ref= {worksRef}>
    <div className={Styles.worksContainers}>
      <div className={Styles.worksTitle}>
        <h1>My latest works</h1>
      </div>
      <div className={Styles.worksContainer}>
        {works_data.map((work, index) => (
          <a href={work.w_link}>
          <img key={index} src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Works;
