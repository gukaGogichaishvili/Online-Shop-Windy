import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const CategoryFilter = () => {
  const [catUrlFetch] = useState(`https://dummyjson.com/products/categories`);
  const [catData, setCatData] = useState([]);

  const { setQueryCategory, handlePageChange,clearAllFilter } = useFilterContext();

  const goGetCategories = async () => {
    let response = await fetch(catUrlFetch);
    let data = await response.json();
    setCatData(data);
  };

  useEffect(() => {
    goGetCategories();
  }, []);

  return (
    <div className="widget widget-filter mb-4 pb-4 border-bottom">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <h3 className="btn btn-outline-primary btn-sm" onClick={clearAllFilter}>
          CLEAR ALL
        </h3>
      </div>
      <h3 className="widget-title">Filters</h3>
      <div className="accordion mt-n1" id="shop-categories">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              href="#categories"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="categories"
            >
              <h3 className="widget-title">Categories</h3>
            </button>
          </h3>
          <div
            className="accordion-collapse collapse"
            id="categories"
            data-bs-parent="#shop-categories"
          >
            <div className="accordion-body">
              <div className="widget widget-links widget-filter">
                <ul
                  className="widget-list widget-filter-list pt-1"
                  style={{ height: "12rem" }}
                  data-simplebar
                  data-simplebar-auto-hide="false"
                >
                  <li
                    onClick={() => setQueryCategory("")}
                    className="widget-list-item widget-filter-item"
                  >
                    <p className="widget-list-link d-flex justify-content-between align-items-center">
                      <span className="widget-filter-item-text">View all</span>
                    </p>
                  </li>
                  {catData.map((singleCat) => (
                    <li
                      key={singleCat}
                      onClick={() => {
                        setQueryCategory(singleCat);
                        handlePageChange(0);
                      }}
                      className="widget-list-item widget-filter-item"
                    >
                      <p className="widget-list-link d-flex justify-content-between align-items-center">
                        <span className="widget-filter-item-text">
                          {singleCat}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
