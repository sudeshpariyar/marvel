import React from "react";

const CustomBreakPoint = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-4 md:px-32 2xl:px-64">{children}</div>;
};

export default CustomBreakPoint;
