"use client";
import  Request  from "./Request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import GetAllAppointments from "./GetAllAppointments";
import { useEffect, useState } from "react";
function Requests() {
    const [requestElements, setRequestElements] = useState();

    const [userObj, setUserObj] = useState<any>("");
    const [id, setId] = useState<any>("");

    useEffect(() => {
        const user = localStorage.getItem("User");
        if (user) {
        const userObj2 = JSON.parse(user);
        console.log("userObj from appointments", userObj2);
        setUserObj(userObj2);
        }
    }, []);

    useEffect(() => {
        console.log("userObj from state of appointments", userObj);
        setId(userObj.uid);
    }, [userObj]);

    console.log("id from Requests", id);

    useEffect(()=>{
        GetAllAppointments(id)
        .then(async res => {
            if(res.status === 200){
                const ap = await res.json();
                console.log(ap);
                setRequestElements(ap.map((app: any, index: number) => {
                    if (app.accept === true) {
                        return null;
                    }
                    return (
                        <Request
                            key={index}
                            did={app.did} 
                            name={app.docFirstName +" "+ app.docLastName}
                            image={app.docProfileImage}
                            date={app.apdate}
                            apid={app.apid}
                        />
                    );
                }));
            }
            else {

            }
        })
        .catch(error => {
            console.error(error);
        });
        },[id]);

    return (
        <>
        
            <div className="h-full shadow-lg rounded-2xl px-6 py-4 bg-gradient-to-r from-sky-900 to-indigo-900
                            w-full">
                <div className="mb-5 flex flex-row items-center gap-x-2 felx-nowrap">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-[#fdf0d5]" /> 
                    <h1 className="ml-2 pacifico-font text-2xl text-[#fdf0d5]">Requests</h1>
                </div>
                <div className="h-[90%] overflow-y-scroll no-scrollbar space-y-5">
                    {requestElements}
                </div>
            </div>
        </>
    );
}

export default Requests;