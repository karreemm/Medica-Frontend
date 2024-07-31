"use client";
import { useEffect, useState } from "react";
import Editprofile from "../EditprofilePage/Editprofile";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) {
      const userObj = JSON.parse(user);
      if (userObj) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
        window.location.href = '/LoginPage';
      }
    } else {
      setIsUserLoggedIn(false);
      window.location.href = '/LoginPage';
    }
  }, []);

  return (
    <>
      <div>
        {isUserLoggedIn ? <NavbarUser /> : <Navbar />}
      </div>
      <div className="p-8 flex justify-start bg-[#669bbc] min-h-screen mt-8">
        <Editprofile />
      </div>
      <Footer />
    </>
  );
}
