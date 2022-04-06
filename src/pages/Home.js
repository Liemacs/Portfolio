import React, { useState} from "react";
import Glitch from "../components/Glitch";
import DynamicText from "../components/DynamicText";
import Items from "../components/Items";
import Pagination from "../components/Pagination";

import Data from "../assets/data.js";

import { BiMouse } from "react-icons/bi";
import classes from "./stylePages/Home.module.scss";

const Home = () => {
  const [items] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNamber) => setCurrentPage(pageNamber);

  const nextPage = () =>
    setCurrentPage((prev) => (lastItemIndex < items.length ? prev + 1 : prev));
  const prevPage = () =>
    setCurrentPage((prev) => (currentPage === 1 ? prev : prev - 1));
    
  return (
    <main className={classes.main}>
      <div className={classes.main__content}>
        <Glitch type="text">i'm ciubari maxim</Glitch>
        <span className={classes.main__content__typeWriter}>
          <DynamicText>
            {["Freelancer and Web Developer", "UI Designer and Front-end"]}
          </DynamicText>
        </span>
        <div className={classes.main__content__arrowDown}>
          <div className={classes.mouse} >
            <BiMouse />
          </div>
        </div>
      </div>
      <Items items={currentItem} />

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        next={nextPage}
        prev={prevPage}
      />
    </main>
  );
};

export default Home;
