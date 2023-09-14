import React from "react";
import Navbar from "../Components/Page/Navbar";
import Footer from "../Components/Page/Footer";
import { Head } from "@inertiajs/react";

const MainLayout = ({ title, children }) => {
  return (
    <main className="flex flex-col justify-between h-full ">
      <Head title={title} />
      <Navbar />
      <div className="flex flex-auto bg-slate-50">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
