import React, { FC } from "react";

interface MySelectedProps {
  value: string;
  defaultValue: string;
  onChange: any;
}

const MySelected: FC<MySelectedProps> = ({ value, defaultValue, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      <option value="name">По названию</option>
      <option value="price">По стоимости</option>
      <option value="rating">По рейтингу</option>
    </select>
  );
};

export default MySelected;
