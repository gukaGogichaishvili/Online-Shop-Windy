import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { useFetchContext } from "../context/FetchContext";

const BrandFilter = () => {
  const { setBrandFilter } = useFilterContext();
  const { allProducts } = useFetchContext();

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const uniqueBrands = new Set(allProducts.map((product) => product.brand));
    setBrands([...uniqueBrands]);
  }, [allProducts]);

  const handleBrandChange = (brand, isChecked) => {
    setBrandFilter(brand, isChecked);
  };

  return (
    <div className="widget widget-filter mb-4 pb-4 border-bottom">
      <div className="accordion mt-n1" id="brand-filter">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              href="#brands"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="brands"
            >
              <h3 className="widget-title">Brands</h3>
            </button>
          </h3>
          <div
            className="accordion-collapse collapse"
            id="brands"
            data-bs-parent="#brand-filter"
          >
            <div className="accordion-body">
              <ul
                className="widget-list widget-filter-list list-unstyled pt-1"
                style={{ maxHeight: "12rem" }}
                data-simplebar
                data-simplebar-auto-hide="false"
              >
                {brands.map((brand, index) => (
                  <li
                    key={index}
                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                  >
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={brand}
                        onChange={(e) =>
                          handleBrandChange(brand, e.target.checked)
                        }
                      />
                      <label
                        className="form-check-label widget-filter-item-text"
                        htmlFor={brand}
                      >
                        {brand}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
