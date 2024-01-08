import React, { useState } from "react";
import {
  CategoryFilter,
  Pagination,
  PriceRange,
  ProductsList,
  QuickView,
  SortBy,
  BrandFilter
} from "../components";

import { Link } from "react-router-dom";


const Products = () => {


  const [quickViewData, setQuickViewData] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const handleQuickViewModal = (data) => {
    setQuickViewData(null);

    setQuickViewData(data);
    setActiveImage(0);
  };

  return (
    <main className="page-wrapper">
      <QuickView
        data={quickViewData}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />

      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Shop Page</h1>
            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
              <Link to="/">
                <li className="breadcrumb-item text-nowrap active">
                  Back To Homepage
                </li>
              </Link>
            </ol>
          </div>
        </div>
      </div>

      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <aside className="col-lg-4">
            <div
              className="offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
              id="shop-sidebar"
              style={{ maxWidth: "22rem" }}
            >
              <div className="offcanvas-header align-items-center shadow-sm">
                <h2 className="h5 mb-0">Filters</h2>
                <button
                  className="btn-close ms-auto"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
                <CategoryFilter />
                <PriceRange />
                <BrandFilter />
              </div>
            </div>
          </aside>
          <section className="col-lg-8">
            <SortBy />
            <ProductsList handleQuickViewModal={handleQuickViewModal} />
            <hr className="my-3" />
            <Pagination />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Products;
