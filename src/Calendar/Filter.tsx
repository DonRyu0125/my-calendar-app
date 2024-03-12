import React from "react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
// import '../style.css'

const filter_types = ["Delhi", "PortDover", "Port", "Rowan", "Simcoe", "Waterford", "All"];

interface MyComponentProps {
  setCurrentFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: React.FC<MyComponentProps> = ({setCurrentFilter}) => {

  const handleChange = ()=>{

  }

  return (
    <div>
      <div>
      <h1 className="text-3xl font-bold underline">asd</h1>
      </div>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        Accept terms and conditions.
      </label>
      <div>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[0]}
        </label>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[1]}
        </label>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[2]}
        </label>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[3]}
        </label>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[4]}
        </label>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[5]}
        </label>
        <label>
          <input
            type="checkbox"
            //   checked={checked}
            //   onChange={handleChange}
          />
          {filter_types[6]}
        </label>
      </div>
    </div>
  );
};

export default Filter;
