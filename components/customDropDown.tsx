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
}

const CustomDropDown = ({ resultLimit, setResultLimit }: IDropDownProps) => {
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
        <DropdownMenuItem onClick={() => setResultLimit(10)}>
          10
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setResultLimit(20)}>
          20
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setResultLimit(30)}>
          30
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setResultLimit(40)}>
          40
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setResultLimit(50)}>
          50
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropDown;
