"use client";
import { useEffect, useState } from "react";
import Usercard from "../UserProfile/Usercard";
import NavbarUser from "../Components/NavbarUser";
import Activity from "./Activity";
import UserInfo from "./UserInfo";
import Footer from "../Components/Footer";

export default function Page() {
  const [userObj, setUserObj] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserObj(parsedUser);
      if (!parsedUser || parsedUser.role !== 'admin') {
        window.location.href = '/LoginPage';
      } else {
        setRole(parsedUser.role);
      }
    } else {
      window.location.href = '/LoginPage';
    }
  }, []);


  return (
    <>
      <div className="mb-32">
        <NavbarUser />
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        <div className="basis-[30%]">
          <Usercard />
        </div>
        <div className="basis-[95%] min-[1050px]:basis-[60%] max-[1050px]:mt-5 space-y-8 mx-5 gap-x-4">
          <UserInfo />
          {role !== "admin" && 
            <div className="h-[450px]">
              <Activity />
            </div>}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
