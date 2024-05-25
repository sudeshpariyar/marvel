import React from "react";
import { Button } from "./ui/button";

interface ICustomShowHideProps {
  list: boolean;
  setList: (arg0: boolean) => void;
  description: string;
}

const CustomShowHide = ({
  list,
  setList,
  description,
}: ICustomShowHideProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => setList(!list)}>{list ? "Hide" : "List"}</Button>
      <span className="text-xl text-gray-700">{description}.</span>
    </div>
  );
};

export default CustomShowHide;
