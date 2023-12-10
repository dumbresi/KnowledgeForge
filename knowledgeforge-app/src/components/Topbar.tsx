import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import { logout } from "../services/auth-service";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially set to false

  // Simulating a login action when the component mounts
  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, []);

  const handleLogin = () => {
    return <Link to="/user/login" />;
  };
  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      // Handle successful logout actions, if needed
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle logout failure
      // For example, display an error message to the user
    }
  };

  function searchHandler(query: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="max-w-screen-x1 w-3/4">
            <SearchBox onSearch={searchHandler} />
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <h5 className="text-sm text-gray-500 dark:text-white">
              Your Name
            </h5>
            {isLoggedIn ? (
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              ) : (
                <button onClick={handleLogin} className="text-blue-500">
                  Login
                </button>
              )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
