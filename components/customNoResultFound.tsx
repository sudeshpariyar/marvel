import { SearchX } from "lucide-react";
import React from "react";

const CustomNoResultFound = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-sm">
      <SearchX size={48} className="text-gray-400" />
      <div className="text-gray-400">No Result Found.</div>
    </div>
  );
};

export default CustomNoResultFound;
