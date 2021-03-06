import React from "react";

// import styles
import classes from "./styles/Pagination.module.scss";

// import react-icon
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ itemsPerPage, totalItems, paginate, next, prev }) => {
  const pageNumbers = [];

  // render the page numbers
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.pagination}>
      <ul className={classes.pagination__bar}>
        <button onClick={prev}>
          <IoIosArrowBack />
        </button>
        {pageNumbers.map((number) => (
          <li
            className="pagination__pageItem"
            key={number}
            onClick={(e) => (paginate(number), e.preventDefault())}
          >
            <span>{number}</span>
          </li>
        ))}
        <button onClick={next}>
          <IoIosArrowForward />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
