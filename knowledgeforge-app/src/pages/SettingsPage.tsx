// SettingsPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Paths from "../resources/paths";
import * as AuthService from "../services/auth-service";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to update the theme (e.g., using context or localStorage)
  };
  const { t } = useTranslation("common");

  const handleLogout = async () => {
    // Add logout logic (e.g., clearing authentication tokens)
    const response = await AuthService.logout();
    console.log(response);
    if (response !== null) {
      navigate(Paths.loginPath);
    }
  };

  const handleDeleteAccount = () => {
    // Add logic to delete the user's account
    // This is a sensitive operation and should be handled with caution
    // It might involve asking for confirmation, password verification, etc.
    // For this example, we'll just navigate to the login page

    // AuthService.deleteAccount({"email":"sid@gmail.com"});
    navigate(Paths.loginPath);
  };

  const takeToLoginPage = () => {
    navigate(Paths.loginPath);
  };

  const goToUserAccountDetails = () => {
    navigate(Paths.userDetailsPath);
  };

  const goToInstructorAccountDetails = () => {
    navigate(Paths.instructorDetailsPath);
  };

  return (
    <div>
      <div className="container mx-auto p-8 bg-zinc-100 h-full">
      <h1 className="text-3xl font-bold mb-6">{t("Settings")}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{t("Account Details")}</h2>
          {currentUser ? (
            currentUser.userType === "user" ? (
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={() => goToUserAccountDetails()}
              >
                {t("View Account Details")}
              </button>
            ) : (
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={() => goToInstructorAccountDetails()}
              >
                {t("View Account Details")}
              </button>
            )
          ) : (
            <div>
              Please{" "}
              <button
                onClick={takeToLoginPage}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Login
              </button>{" "}
              to get your account details
            </div>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{t("Theme")}</h2>
          <div className="flex items-center">
            <span className="mr-2">{t("Dark Mode")}</span>
            <button
              className={`${
                darkMode ? "bg-blue-500" : "bg-gray-300"
              } text-white py-1 px-3 rounded-md transition duration-300 focus:outline-none`}
              onClick={toggleDarkMode}
            >
              {darkMode ? t("Turn off") : t("Turn on")}
            </button>
          </div>
        </div>

        {currentUser ? (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{t("Actions")}</h2>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
              onClick={handleLogout}
            >
              {t("Logout")}
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={handleDeleteAccount}
            >
              {t("Delete Account")}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  
    </div>
  );
};

export default SettingsPage;
