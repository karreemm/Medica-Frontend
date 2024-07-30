
"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';
import '../Components/Components.css';
export default function UserCard() {

    const [userObj, setUserObj] = useState<any>(null);
    const [id, setId] = useState<number>(0);
    const [role, setRole] = useState<string>('');
    const [date, setDate] = useState<Date  >(new Date());
    const [dataString, setDataString] = useState<string>('');
    const [userAge, setAge] = useState<number>(0);
    const [profileImage, setProfileImage] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [bdate, setBdate] = useState<string>('');

    useEffect(() => {
        const user = localStorage.getItem("User") || "";
        const userObj = JSON.parse(user);
        if (userObj) {
            setUserObj(userObj);
            setId(userObj.id);
            setRole(userObj.role);
            setDate(userObj.date);
            setAge(userObj.age);
            setFirstname(userObj.firstname);
            setLastname(userObj.lastname);
            setProfileImage(userObj.profileImage);
            setBdate(userObj.bdate);
        }
    }, []);

    
    useEffect(() => {
        if (date) {
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'short' });
            const year = date.getFullYear();
            setDataString(`${day} ${month} ${year}`);
        }
    }, [date]);

    useEffect(() => {
        if (bdate) {
            const age = new Date().getFullYear() - new Date(bdate).getFullYear();
            setAge(age);
        }
    }, [bdate]);

    return (
        <>
        
        <div className="relative flex flex-col rounded-lg  w-[380px] " >
            <div className="h-[130px] bg-gradient-to-r from-sky-900 to-indigo-900 w-full rounded-t-lg"></div>
            <div className="h-[250px] bg-white w-full rounded-b-lg flex flex-col items-center">

                {/* Content of the  */}
                <div className="mt-16 flex flex-col items-center" >

                    {/* Name, Role and line  */}
                    <p className="text-2xl text-slate-800 font-bold text-center" >
                        {firstname} {lastname}
                    </p>
                    <p className="text-md text-slate-800 font-bold text-center mt-2	">
                        {role} 
                    </p>
                    <hr className="w-[280px] border-indigo-900 border-2 mt-4 mb-2 " />

                    {/* Joined on and Posts */}
                    <div className="flex flex-col items-start w-[320px] mt-4">
                        <p className="">
                        <FontAwesomeIcon icon={faCalendar} className="text-slate-700 h-[16px] inline mr-1" /> 
                        <span className='text-sm text-center text-slate-700 font-bold'> Joined on :</span> 
                         <span className="text-slate-700 inline text-center text-sm font-normal"> {dataString}</span>
                        </p>
                        <p className="">
                        <FontAwesomeIcon icon={faPerson} className="text-slate-700 h-[16px] inline mr-1" /> 
                        <span className='text-sm text-center text-slate-700 font-bold'> Age :</span> 
                         <span className="text-slate-700 inline text-center text-sm font-normal"> {userAge}</span>
                        </p>
                    </div>
                    
                </div>
            </div>
            <img
                src={profileImage}
                alt="User"
                className="absolute top-[40px] left-[30%] transform -translate-x-50% w-[150px] h-[150px] rounded-full border-4 border-white bg-white"
            />
        </div>
        </>
        
    )
}