import React, { ReactNode } from "react";

interface ICustomTotalFormWrapper {
  children: ReactNode;
  totalResult?: number;
}

const CustomTotalFormDropDownWrapper = ({
  children,
  totalResult,
}: ICustomTotalFormWrapper) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <span> Total results {totalResult}.</span>
      <div className="flex mt-2 justify-between sm:mt-0 gap-2">{children}</div>
    </div>
  );
};

export default CustomTotalFormDropDownWrapper;
