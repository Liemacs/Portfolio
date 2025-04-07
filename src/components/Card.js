import React from "react";

// import styles
import classes from "./styles/Card.module.scss";

// import react-icon
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ item, setItemData, setActive }) => {
  return (
    <Link
      to={item.href}
      onClick={(e) => {
        e.preventDefault(); 

        window.open(item.href, "_blank", "noopener,noreferrer");

        setItemData(item);
        setActive(true);
      }}
      className={classes.cart}
    >
      <div className={classes.cart__content}>
        <img src={item.img} alt="item" />
        <div className={classes.cart__content__more}>
          <AiOutlineEye size="30" className={classes.iconStyle} />
          <p>Demo</p>
        </div>
      </div>
      <p>{item.title}</p>
    </Link>
  );
};

export default Card;
