import React from "react";
import { useFilterContext } from "../context/FilterContext";

const PriceRange = () => {
  const { setPriceRange, priceRange } = useFilterContext();

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: +value,
    }));
  };

  return (
    <div className="widget mb-4 pb-4 border-bottom">
      <h3 className="widget-title">Price Range</h3>

      <div className="d-flex pb-1">
        <div className="w-50 pe-2 me-2">
          <div className="input-group input-group-sm">
            <span className="input-group-text">$</span>
            <input
              className="form-control range-slider-value-min"
              type="number"
              name="min"
              value={priceRange.min}
              placeholder=""
              onChange={handlePriceRangeChange}
            />
          </div>
        </div>
        <div className="w-50 ps-2">
          <div className="input-group input-group-sm">
            <span className="input-group-text">$</span>
            <input
              className="form-control range-slider-value-max"
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceRangeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
