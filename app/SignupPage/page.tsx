"use client";

import { useEffect, useState } from "react";
import Signup from "./Signup";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page() {

  const [NavbarComponent, setNavbarComponent] = useState<React.ElementType>(() => Navbar); // Default to Navbar
  useEffect(() => {
    // This code will only run on the client side
    const user = localStorage.getItem("User");
    if (user) {
      const userObj = JSON.parse(user);
      if (userObj) {
        window.location.href = '/UserProfile';
      }
    }
  },[]);

  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 mt-8 space-y-5 bg-[#669bbc]">
        <div className="">
          <Signup />
        </div>
      </main>
      <Footer />
    </>
  );
}
