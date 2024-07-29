"use client";
import { useState, useEffect } from "react";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import AllSurgeries from "./AllSurgeries";
import Footer from "../Components/Footer";
import Schedule from "./schedule "; 
import Sidebar from "./Sidebar";

export default function Page() {
  const [userObj, setUserObj] = useState<any>(null);
  const [activeComponent, setActiveComponent] = useState<string>('Surgeries'); // Default to 'Surgeries'
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    // Ensure localStorage is accessed only on the client side
    if (typeof window !== "undefined") {
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
      setLoading(false); // Set loading to false after checking user
    }
  }, []);

  const handleSidebarOptionClick = (option: string) => {
    setActiveComponent(option);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Surgeries':
        return <AllSurgeries />;
      case 'Schedule':
        return <Schedule />;
      default:
        return <Schedule />;
    }
  };

  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <>
      <div className="bg-[#669bbc] min-h-screen">
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
