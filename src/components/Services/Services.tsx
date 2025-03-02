import Styles from "./ServicesStyles.module.scss";
import Services_Data from "../../assets/services";
import { useRef } from "react";

const Services = () => {

  const servicesRef = useRef(null);
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
              <div className={Styles.servicesReadmore}>
                <p>Read More</p>
                <img src="" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
