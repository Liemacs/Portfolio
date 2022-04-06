import React from "react";
import classes from "./styles/Card.module.scss";

import { AiOutlineEye } from "react-icons/ai";

const Card = ({ item, setItemData, setActive }) => {
  return (
    <div href=""
      onClick={(e) => {
        e.preventDefault();
        setItemData(item);
        setActive(true);
      }}
      className={classes.cart}
    >
      <div className={classes.cart__content}>
        <img src={item.img} alt="item" />
        <div className={classes.cart__content__more}>
          <AiOutlineEye size="30" className={classes.iconStyle} />
          <p>Preview</p>
        </div>
      </div>
      <p>{item.title}</p>
    </div>
  );
};

export default Card;
