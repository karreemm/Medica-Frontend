"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NavbarUser from "../Components/NavbarUser";
import Requests from "./Requests";
import Appointments from "./Appointments";
import Scans from "./Scans";
import { Surgeries } from "./Surgeries";
import Footer from "../Components/Footer";

export default function Page() {
  const [userObj, setUserObj] = useState<any>(null);
  const [activeComponent, setActiveComponent] = useState<string>('Appointments');

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safely access localStorage
      const user = localStorage.getItem("User");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserObj(parsedUser);
        if (!parsedUser || parsedUser.role !== "nurse") {
          window.location.href = "/login";
        }
      } else {
        window.location.href = "/login";
      }
    }
  }, []);

  const handleSidebarOptionClick = (option: string) => {
    setActiveComponent(option);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Requests':
        return <Requests />;
      case 'Appointments':
        return <Appointments />;
      case 'Scans':
        return <Scans />;
      case 'Surgeries':
        return <Surgeries />;
      default:
        return <Appointments />;
    }
  };

  // Render nothing while userObj is null
  if (!userObj) {
    return null;
  }

  return (
    <>
      <div className="bg-[#669bbc]">
        <NavbarUser />
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start mx-5 mt-32 md:space-x-10">
          <div className="flex flex-row items-center md:basis-[12%] w-full">
            <Sidebar onOptionClick={handleSidebarOptionClick} />
          </div>
          <div className="md:basis-[70%] w-full mt-5 md:mt-0 h-[570px]">
            {renderComponent()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
