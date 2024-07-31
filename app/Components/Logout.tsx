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
    <button 
      onClick={handleLogout}
      className="block w-full text-left px-4 py-2 text-black hover:bg-[#f2d7bc]"
    >
      <FontAwesomeIcon icon={faRightFromBracket} className="mr-2 text-xl" />
      Log Out
    </button>
  );
};

export default Logout;
