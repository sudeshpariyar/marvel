import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-10 min-h-screen justify-between">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default layout;
