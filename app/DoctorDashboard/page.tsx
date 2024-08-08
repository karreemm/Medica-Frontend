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
  const [activeComponent, setActiveComponent] = useState<string>('Appointments');
  const [userObj, setUserObj] = useState<any>("");
  const [id, setId] = useState<any>("");

    useEffect(() => {
        const user = localStorage.getItem("User");
        if (user) {
        const userObj2 = JSON.parse(user);
        console.log("userObj from appointments", userObj2);
        setUserObj(userObj2);
        }
    }, []);

    useEffect(() => {
        console.log("userObj from state of appointments", userObj);
        setId(userObj.uid);
    }, [userObj]);

    console.log("id from Requests", id);


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

  

  return (
    <>
      <div className="bg-[#669bbc] min-h-screen">
        <NavbarUser />
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start mx-5 mt-36 md:mt-44 md:space-x-10">
          <div className="flex flex-row items-center md:basis-[12%] w-full">
            <Sidebar onOptionClick={handleSidebarOptionClick} />
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
