import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";


const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bill",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expencces />,
      label: "Expenses",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "settings",
      link: "/settings",
      icon: <Icon.Settings />,
      label: "Settings",
    },
  ];

  const log = [
    {
      id: "logout",
      link: "/logout",
      icon: <Icon.Logout />,
      label: "Logout",
    },
  ];

  return (
    <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-10">
          <Logo variant="text-white text-sm sm:text-2xl"/>
          </div>
        {menus.map((menu) => (
          <NavLink
          to={menu.link} 
          key={menu.id}
          className={({ isActive }) => 
            isActive ? "flex bg-primary text-white px-4 py-3 rounded-md" : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
          }
          >
  
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            
          </NavLink>
        ))}
      </div>

      <div className="sticky bottom-12">
        {log.map((item) => (
          <NavLink 
          to={item.link} 
          key={item.id}
          className={({ isActive }) => 
            isActive ? "flex bg-primary text-white px-4 py-3 rounded-md" : "flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white"
          }
          >
          
            <div className="mx-auto sm:mx-0">{item.icon}</div>
            <div className="ms-3 hidden sm:block">{item.label}</div>
          
        </NavLink>
        ))}
        
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0">
          <img src="/images/profile-1.png" />
          </div>

          <div className="hidden sm:block">
            <div className="text-white font-bold">
              Username
            </div>
            <div className="text-sx">
              View Profile
            </div>
          </div>
          <div className="hidden sm:block self-center justify-self-end">
            <Icon.ThreeMenu />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;