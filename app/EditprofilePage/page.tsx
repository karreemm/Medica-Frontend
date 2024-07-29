"use client";
import { useEffect, useState } from "react";
import Editprofile from "../EditprofilePage/Editprofile";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page() {
  const [userObj, setUserObj] = useState<any>(null);
  const [NavbarComponent, setNavbarComponent] = useState(() => Navbar);

  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("User");
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserObj(parsedUser);
        if (parsedUser) {
          setNavbarComponent(NavbarUser);
        } else {
          setNavbarComponent(Navbar);
        }
      } else {
        window.location.href = '/LoginPage';
      }
    }
  }, []);

  // Render nothing while waiting for userObj to be set
  if (userObj === null) {
    return null;
  }

  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <div className="p-8 flex justify-start bg-[#669bbc] min-h-screen mt-8">
        <Editprofile />
      </div>
      <Footer />
    </>
  );
}
