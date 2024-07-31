"use client";
import { useEffect, useState } from "react";
import Usercard from "../UserProfile/Usercard";
import NavbarUser from "../Components/NavbarUser";
import Activity from "./Activity";
import UserInfo from "./UserInfo";
import Footer from "../Components/Footer";

export default function Page() {

  const [user, setUser] = useState<string | null>(null);
  const [userObj, setUserObj] = useState<any>(null);
  const [role, setRole] = useState<string>('');

  useEffect(() => {
    const user2 = localStorage.getItem("User");
    setUser(user2);
    if (user2) {
      const userObj2 = JSON.parse(user2);
      console.log("userObj from page", userObj2);
      setUserObj(userObj2);
    }
  }, []);

  useEffect(() => {
    console.log("userObj from state of page", userObj);
    console.log("user from page", user);
  }, [userObj]);

  useEffect(() => {
    if (user === null) {
      // Do nothing if user is not set yet
      return;
    }

    if (userObj === null) {
      window.location.href = '/LoginPage';
    } else {
      setRole(userObj.role);
    }
  }, [user, userObj]);


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
