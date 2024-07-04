import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface IDropDownProps {
  resultLimit: number;
  setResultLimit: (value: number) => void;
  setCurrentPage: (value: number) => void;
}

const CustomDropDown = ({
  resultLimit,
  setResultLimit,
  setCurrentPage,
}: IDropDownProps) => {
  const handleResultLimitCurrentPage = (value: number) => {
    setResultLimit(value);
    setCurrentPage(0);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Results ({resultLimit}) <ChevronDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose Results Number</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleResultLimitCurrentPage(10)}>
          10
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleResultLimitCurrentPage(20)}>
          20
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleResultLimitCurrentPage(30)}>
          30
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleResultLimitCurrentPage(40)}>
          40
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleResultLimitCurrentPage(50)}>
          50
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropDown;
