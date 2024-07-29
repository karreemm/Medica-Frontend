"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import AddDoctor from "./AddDoctor";
import AddNurse from "./AddNurse";
import AllDoctors from "./AllDoctors";
import AllNurses from "./AllNusrses";
import AllPatients from "./AllPatients";
import Footer from "../Components/Footer";

export default function Page() {
  const [userObj, setUserObj] = useState(null);
  const [activeComponent, setActiveComponent] = useState('Doctors');

  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("User");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserObj(parsedUser);
        if (!parsedUser || parsedUser.role !== 'admin') {
          window.location.href = '/';
        }
      } else {
        window.location.href = '/';
      }
    }
  }, []);

  const handleSidebarOptionClick = (option: string) => {
    setActiveComponent(option);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Add Doctor':
        return <AddDoctor />;
      case 'Add Nurse':
        return <AddNurse />;
      case 'Doctors':
        return <AllDoctors />;
      case 'Nurses':
        return <AllNurses />;
      case 'Patients':
        return <AllPatients />;
      default:
        return <AllDoctors />;
    }
  };

  if (userObj === null) {
    return null;
  }

  return (
    <>
      <div className="bg-[#669bbc] min-h-screen ">
        <NavbarUser />
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <Sidebar onOptionClick={handleSidebarOptionClick} />
          {renderComponent()}
        </div>
      </div>
      <Footer />
    </>
  );
}
