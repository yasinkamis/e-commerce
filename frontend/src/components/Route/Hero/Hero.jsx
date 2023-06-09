import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[37px] leading-[1.2] 800px:text-[60px] text-[#D14D72] font-[600] capitalize`}
        >
          SATIN ALMA KİRALA! <br /> 
        </h1>
        <p className="pt-5 text-[20px] font-[Poppins] font-[400] text-[#D14D72]">
        "Sana özel kiralama seçenekleriyle zamandan ve paradan tasarruf et!"
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Şimdi Kirala
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
