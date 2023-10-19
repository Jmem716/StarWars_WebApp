import React from 'react';
import { useCookies } from "react-cookie";
import { useLocation } from 'react-router-dom';


export const Header = () => {
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const username = cookies.username;

  // Define a mapping of routes to their respective header text
  const headerTextMap = {
    '/login': 'Star Wars: Saga...',
    '/home': 'Welcome To An Intergalactic Adventure '+username,
  };

  // Get the header text based on the current route
  const headerText = headerTextMap[location.pathname] || 'Default Header Text';

  return (
    <div className="header">
      <h1>{headerText}</h1>
    </div>
  );
};
