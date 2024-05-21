import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
};

export default layout;
