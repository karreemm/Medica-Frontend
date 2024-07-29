import React, { useEffect } from 'react';

export default function Logout() {
  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      localStorage.removeItem('token');
      localStorage.removeItem('User');

      window.location.href = '/';
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render nothing
  return null;
}
