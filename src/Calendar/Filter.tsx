import React, { ReactNode, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Cal_event, Filter_color } from "@/interface";
import { EVENT_COLORS, FILTER_TYPE } from "./Calendar";

interface MyComponentProps {
  setCurrentFilter: React.Dispatch<React.SetStateAction<string[]>>;
  currentEvent: Cal_event[];
}

const Filter: React.FC<MyComponentProps> = ({ setCurrentFilter, currentEvent }) => {
  const [checked, setChecked] = useState<any>({});
  const [selectType, setSelectedType] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let map = selectType;
    if (map[e.target.name] > 0) {
      delete map[e.target.name];
    } else {
      map[e.target.name] = 1;
    }

    setSelectedType(map);
    setCurrentFilter(Object.keys(map));
  };

  const showFilter = (currentEvent: Cal_event[]) => {
    let set = new Set();
    let filter_color_map = []
    
    currentEvent?.map((item: Cal_event) => {
      set.add(item[FILTER_TYPE]);
    });

    filter_color_map = Array.from(set).map((item,key)=>{
        return {type:item,color:EVENT_COLORS[key]}
    })

    // setCurrentFilter(filter_color_map)

    return filter_color_map.map((item: any, key) => {
      return (
        <label key={key}>
          <input type="checkbox" onChange={(e) => handleChange(e)} name={item.type} />
          {item.type}
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
