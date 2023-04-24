import React from "react";
import classes from "./control.module.scss";

function Control({ image, name, num }) {
  return (
    <div>
      <div className={classes.container__box}>
        <div className={classes.content__container}>
          <div>
            <img className={classes.image__container} src={image} alt={`${name} icon`} />
          </div>
          <div>
            <h3 className={classes.update__content}>{name}</h3>
            <h2 className={classes.update__content}>{num}.</h2>
          </div>
        </div>
        <div className={classes.update__content}>UPDATE 5s</div>
      </div>
    </div>
  );
}

export default Control;
