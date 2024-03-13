import React, { ReactNode, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Cal_event } from "@/interface";

interface MyComponentProps {
  setCurrentFilter: React.Dispatch<React.SetStateAction<string[]>>;
  currentEvent: any;
}

const Filter: React.FC<MyComponentProps> = ({ setCurrentFilter, currentEvent }) => {
  const [checked, setChecked] = useState<any>({});

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let map = checked;
    if (map[e.target.name]) {
      map[e.target.name] += 1;
    }
    if (map[e.target.name] > 1) {
      delete map[e.target.name];
    } else {
      map[e.target.name] = 1;
    }
    setChecked(map);
    setCurrentFilter(Object.keys(map));
  };

  return (
    <div>
      <div>
        {currentEvent?.map((item: Cal_event, key: number) => {
          return (
            <label key={key}>
              <input type="checkbox" onChange={handleChange} name={item["event-loc"]} />
              {item["event-loc"]}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
