import React, { ReactNode, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Cal_event } from "@/interface";

interface MyComponentProps {
  setCurrentFilter: React.Dispatch<React.SetStateAction<string[]>>;
  currentEvent: Cal_event[];
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

  const showFilter = (currentEvent:Cal_event[]) => {
    let set = new Set();
    currentEvent?.map((item:Cal_event) => {
      set.add(item["event-loc"]);
    });

    return Array.from(set).map((item:any,key) => {
      return (
        <label key={key}>
          <input type="checkbox" onChange={handleChange} name={item} />
          {item}
        </label>
      );
    });

  };

  return (
    <div>
      <div>{showFilter(currentEvent)}</div>
    </div>
  );
};

export default Filter;
