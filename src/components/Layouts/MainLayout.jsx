import React from "react";
import Header from "../Fragments/Header";
import Navbar from "..Fragments/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NotifContext } from "../../context/notifContext";

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = 
  useContext(NotifContext);
  
    return (
    // div pembuka 1
    <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}
      <div className="w-screen">
         {isLoading && (
            <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
          )}
          {msg && (
            <CustomizedSnackbars 
              severity={msg.severity}
              message={msg.desc}
              open={open}
              setOpen={setOpen}
            />
          )}
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