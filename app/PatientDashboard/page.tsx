"use client";
import Sidebar from "./Sidebar";
import NavbarUser from "../Components/NavbarUser";
import Requests  from "./Requests";
import { useState } from "react";
import  Booking  from "./Booking";
import Scans  from "./Scans";
import { Surgeries } from "./Surgeries";
import Appointments from "./Appointments";
import Footer from "../Components/Footer";
export default function Page() {

  
  const [activeComponent, setActiveComponent] = useState('Appointments');
  const handleSidebarOptionClick = (option: string) => {
    setActiveComponent(option);
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Requests':
        return <Requests />;
      case 'Booking':
        return <Booking />;
      case 'Scans':
        return <Scans />;
      case 'Surgeries':
        return <Surgeries />;
      case 'Appointments':
        return <Appointments />;
    }
  };

  return (
    <>
      <div className="bg-[#669bbc]">
        {/* <NavbarComponent /> */}
        <NavbarUser />
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start mx-5 mt-36 md:mt-44 md:space-x-10">
          <div className="flex flex-row items-center md:basis-[12%] w-full">
            <Sidebar  onOptionClick={handleSidebarOptionClick}/>
          </div>
          <div className="flex justify-center w-full md:basis-[90%]">
          <div className="md:basis-[60%]  w-[90%] mt-5 md:mt-0 h-[570px]">
          {renderComponent()}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
