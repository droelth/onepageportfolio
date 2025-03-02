import Styles from "./ServicesStyles.module.scss";
import Services_Data from "../../assets/services";
import { FC,Ref } from "react";

interface servicesProps{
  servicesRef: Ref<HTMLDivElement>
}

const Services: FC<servicesProps> = ({servicesRef}) => {

  return (
    <div ref={servicesRef} className={Styles.services}>
      <div className={Styles.servicesTitle}>
        <h1>Services</h1>
      </div>
      <div className={Styles.servicesContainer}>
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className={Styles.servicesFormat}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
