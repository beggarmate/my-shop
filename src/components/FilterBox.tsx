import React from "react";
import MySelected from "./MySelected";

interface FilterBoxProps {
  selectedSort: string;
  sortProducts: any;
  createHandler: any;
}

const FilterBox = ({
  selectedSort,
  sortProducts,
  createHandler,
}: FilterBoxProps) => {
  return (
    <div className="filter-box">
      <MySelected
        value={selectedSort}
        onChange={(sort: string) => sortProducts(sort)}
        defaultValue="Сортировка"
      />
    </div>
  );
};

export default FilterBox;
