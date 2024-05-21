import Header from "@/components/header";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-full">
      <Header />
      {children}
    </main>
  );
};

export default LandingLayout;
