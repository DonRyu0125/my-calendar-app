import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const filter_types = ["Delhi", "PortDover", "Port", "Rowan", "Simcoe", "Waterford", "All"];

interface MyComponentProps {
  setCurrentFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: React.FC<MyComponentProps> = ({ setCurrentFilter }) => {
  const handleChange = (e) => {
    console.log("e", e.target.name);
  };

  return (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={handleChange} 
          name={"Delhi"} />
          {filter_types[0]}
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} name={"PortDover"} />
          {filter_types[1]}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name={"Port"}
          />
          {filter_types[2]}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name={"Rowan"}
          />
          {filter_types[3]}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name={"Simcoe"}
          />
          {filter_types[4]}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name={"Waterford"}
          />
          {filter_types[5]}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name={"All"}
          />
          {filter_types[6]}
        </label>
      </div>
    </div>
  );
};

export default Filter;
