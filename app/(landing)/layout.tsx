import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-10">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default LandingLayout;
