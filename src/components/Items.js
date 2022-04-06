import React, { useState, useEffect } from "react";
import classes from "./styles/Items.module.scss";

import Popup from "./Popup";

import Card from "./Card";

const Items = ({ items }) => {
  const [itemData, setItemData] = useState(items[1]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active === true) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [active]);

  const list = items.map((item, index) => (
    <Card
      item={item}
      setItemData={setItemData}
      setActive={setActive}
      key={`${item.id}_${index}`}
    />
  ));

  return (
    <div className={classes.items}>
      {active && (
        <Popup setActive={setActive} active={active} item={itemData} />
      )}
      <h2>Portfolio</h2>
      <div className={classes.delimiter}></div>
      <div className={classes.items__content}>{list}</div>
    </div>
  );
};

export default Items;
