'use client';

import { useEffect, useState } from "react";
import Collaboration from "./Collaboration";
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Brands from "./Brands";

export default function Page() {

  const [userObj, setUserObj] = useState<any | null>(null);
  const [NavbarComponent, setNavbarComponent] = useState(() => Navbar);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem("User");
            if (user) {
                const parsedUser = JSON.parse(user);
                setUserObj(parsedUser);
                if (parsedUser) {
                    setNavbarComponent(() => NavbarUser);
                }
            }
        }
    }, []);

    return (
        <>
        <div>
            <NavbarComponent />
        </div>
        <div className="bg-[#669bbc] flex flex-col mt-44">
            <Brands />
            <Collaboration /> 
        </div>
        <Footer />
        </>
    );
}