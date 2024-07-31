"use client";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logout = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
    window.location.href = '/';
  };

  return (
    <li className="p-4 border-b rounded-xl cursor-pointer border-gray-600 hover:bg-[#f2d7bc] hover:text-black flex items-center text-white ">
        <button onClick={handleLogout} className=" ">
            <span>
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2 text-xl " />
                    Log Out
            </span>
         </button>
    </li>
  );
};

export default Logout;
