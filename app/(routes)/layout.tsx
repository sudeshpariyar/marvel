import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-dvh flex flex-col ">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
