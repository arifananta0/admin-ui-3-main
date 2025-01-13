import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { NotifContext } from "../../context/notifContext";
//import CustomizedSnackbars from "../Elements/Snackbar";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { theme, setTheme } = useContext(ThemeContext);
  const { setIsLoggedIn, setName, name } = useContext(AuthContext);
  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  
  const navigate = useNavigate();

  const refreshToken = localStorage.getItem("refreshToken");

  const Logout = async () => {
    setIsLoading(true);
    try {
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout",{
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      
      setIsLoading(false);
      setOpen(true);
      setMsg({ severity: "success", desc: "Logout Success" });

      console.log("Logout Snackbar:", { severity: "success", desc: "Logout Success" });

      setIsLoggedIn(false);
      setName("");
      localStorage.removeItem("refreshToken");

      navigate("/login");
    } catch (error){
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });      
      }
      // alert("Logout failed. Please try again.");
      // console.log(error);
    }

    setIsLoggedIn(false);
    setName("");
    setIsLoading(false);

    localStorage.removeItem("refreshToken");
    navigate("/login");
  };


  const menus = [
    { id: "overview", link: "/", icon: <Icon.Overview />, label: "Overview" },
    { id: "balance", link: "/balance", icon: <Icon.Balance />, label: "Balance" },
    { id: "transaction", link: "/transaction", icon: <Icon.Transaction />, label: "Transaction" },
    { id: "bill", link: "/bill", icon: <Icon.Bill />, label: "Bill" },
    { id: "expenses", link: "/expenses", icon: <Icon.Expencces />, label: "Expenses" },
    { id: "goals", link: "/goals", icon: <Icon.Goals />, label: "Goals" },
    { id: "settings", link: "/settings", icon: <Icon.Settings />, label: "Settings" },
  ];

  // const log = [
  //   { id: "logout", link: "/logout", icon: <Icon.Logout />, label: "Logout" },
  // ];

  return (
    <div className="bg-defaultBlack">
      <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Logo variant="text-primary text-sm sm:text-2xl" />
        </div>

        {/* Navigation Menus */}
        <div>
          {menus.map((menu) => (
            <NavLink
              to={menu.link}
              key={menu.id}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white px-4 py-3 rounded-md zoom-in"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md zoom-in"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>

          
        {/* Theme Selector */}
        <div className="mb-8">
          <div className="text-white mb-2">Themes</div>
          <div className="md:flex md:gap-2">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2 zoom-in`}
                onClick={() => setTheme(t)}
              ></div>
            ))}
          </div>
        </div>


        {/* Footer Section */}
        <div className="sticky bottom-12">
        <NavLink
            className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white zoom-in"
            onClick={Logout}
          >
            <div className="mx-auto sm:mx-0 text-primary">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </NavLink>
          
          <div className="border-b my-10 border-b-special-bg"></div>
          <div className="flex justify-between">
            <div className="mx-auto sm:mx-0">
              <img src="/images/profile-1.png" alt="Profile" />
            </div>

            <div className="hidden sm:block">
              <div className="text-white font-bold">{name}</div>
              <div className="text-sx">View Profile</div>
            </div>
            <div className="hidden sm:block self-center justify-self-end">
              <Icon.ThreeMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;