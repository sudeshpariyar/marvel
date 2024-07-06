import React, { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ICustomTotalFormWrapper {
  children: ReactNode;
  totalResult?: number;
  setDisplayGrid: (value: string) => void;
}

const CustomTotalFormDropDownWrapper = ({
  children,
  totalResult,
  setDisplayGrid,
}: ICustomTotalFormWrapper) => {
  const handleStyleChange = (style: string) => {
    if (style) setDisplayGrid(style);
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2">
        <Select onValueChange={handleStyleChange} defaultValue="grid">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select view type.." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Styles</SelectLabel>
              <SelectItem value="grid">Grid</SelectItem>
              <SelectItem value="table">Table</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className="border border-gray-300 p-2 rounded-lg">
          Total results {totalResult}.
        </span>
      </div>
      <div className="flex mt-2 justify-between sm:mt-0 gap-2">{children}</div>
    </div>
  );
};

export default CustomTotalFormDropDownWrapper;
