import { useEffect, useState } from 'react';
import NavbarUser from "../Components/NavbarUser";
import Navbar from "../Components/Navbar";

const ClientNavbar: React.FC = () => {
  const [NavbarComponent, setNavbarComponent] = useState<React.ElementType>(() => Navbar); // Default to Navbar

  useEffect(() => {
      const user = localStorage.getItem("User");
      if (user) {
        const userObj = JSON.parse(user);
        if (userObj) {
          setNavbarComponent(() => NavbarUser); // Use NavbarUser if user exists
      }
    }
  }, []); // Empty dependency array means this runs once on component mount

  return <NavbarComponent />;
}

export default ClientNavbar;
