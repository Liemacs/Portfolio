import React, { useState } from "react";

// import components
import { Glitch, DynamicText, Items, Pagination } from "../components";

// import data
import Data from "../assets/data.js";

// import react-icon
import { BiMouse } from "react-icons/bi";

// import styles
import classes from "./stylePages/Home.module.scss";

const Home = () => {
  // start useState variables
  const [items] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  // end useState variables

  // Variabiles
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);
  // End variabiles

  // Functions
  const paginate = (pageNamber) => setCurrentPage(pageNamber);

  const nextPage = () =>
    setCurrentPage((prev) => (lastItemIndex < items.length ? prev + 1 : prev));
  const prevPage = () =>
    setCurrentPage((prev) => (currentPage === 1 ? prev : prev - 1));
  // End functions

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
          <div className={classes.mouse}>
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
