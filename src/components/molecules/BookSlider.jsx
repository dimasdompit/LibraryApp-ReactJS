import React from "react";
import { Link } from "react-router-dom";

import Styles from "../../styles/pages/Home/Home.module.css";

const Books = ({ id, image, title, author, className }) => {
  const imageStyle = {
    width: "100%",
    height: "350px",
    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(http://localhost:3000/images/${image}) no-repeat center`,
    backgroundSize: "cover",
    borderRadius: "30px",
  };
  return (
    <>
      <Link to={`details/${id}`}>
        <section className={Styles.sliderArea}>
          <div className={Styles.homeSliderImage} style={imageStyle}>
            <div className={Styles.sliderHeadings}>
              <h3>{title}</h3>
              <h5>{author}</h5>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Books;
