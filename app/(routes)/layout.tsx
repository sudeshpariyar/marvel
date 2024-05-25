import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-10">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default layout;
