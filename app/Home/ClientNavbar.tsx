import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Dynamic import from Next.js


// Use dynamic import for NavbarUser and Navbar
const DynamicNavbar = dynamic(() => import('../Components/Navbar'), { ssr: false });
const DynamicNavbarUser = dynamic(() => import('../Components/NavbarUser'), { ssr: false });

const ClientNavbar: React.FC = () => {
  const [NavbarComponent, setNavbarComponent] = useState<React.ElementType>(() => DynamicNavbar); // Default to Navbar

  useEffect(() => {
    // This code will only run on the client side
    const user = localStorage.getItem("User");
    if (user) {
      const userObj = JSON.parse(user);
      if (userObj) {
        setNavbarComponent(() => DynamicNavbarUser); // Use NavbarUser if user exists
      }
    }
  }, []); // Empty dependency array means this runs once on component mount

  // Render a fallback if NavbarComponent is not set properly
  const ComponentToRender = NavbarComponent || DynamicNavbar;

  return <ComponentToRender />;
};

export default ClientNavbar;
