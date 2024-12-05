import React from "react";
import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";

const MainLayout = (props) => {
    const { children } = props;
  return (
    // div pembuka 1
    <div className="flex bg-special-mainBg w-screen min-h-screen max-w-full lg:flex-row flex-col">
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}

      {/* div pembuka 2 */}
      <div className="w-screen">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* content start */}
        <main className="px-6 py-4">
            {children}
        </main>
        {/* content end */}
      </div>
      {/* div penutup 2 */}
    </div>
    // div penutup 1
  );
};

export default MainLayout;
