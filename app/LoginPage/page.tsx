"use client";
import { useEffect, useState } from 'react';
import Login from "./Login";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page() {
  const [NavbarComponent, setNavbarComponent] = useState(() => Navbar); // Default to Navbar
  const [redirect, setRedirect] = useState(false); // State to handle redirection

  useEffect(() => {
    // Ensure localStorage is accessed only on the client side
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("User");
      if (user) {
        const userObj = JSON.parse(user);
        if (userObj) {
          setRedirect(true); // Set redirect to true if user exists
        }
      }
    }
  }, []);

  if (redirect) {
    if (typeof window !== "undefined") {
      window.location.href = '/UserProfile';
    }
    return null; // Render nothing while redirecting
  }

  return (
    <>
      <div>
        <NavbarComponent />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 mt-8 space-y-5 bg-[#669bbc]">
        <div className="">
          <Login />
        </div>
      </main>
      <Footer />
    </>
  );
}
