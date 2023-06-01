import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState(localStorage.theme);
  const themeColor = theme === "dark" ? "light" : "dark";
  const darken = theme === "dark" ? true : false;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(themeColor);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [themeColor, theme]);

  const toggleLight = () => {
    const root = window.document.documentElement;
    root.classList.remove(themeColor);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    setTheme(themeColor);
  };

  return (
    <div className="sticky top-0 z-50 dark:text-blue-500">
      <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between bg-white dark:bg-[#212936]">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="grow flex justify-between items-center p-2">
            <Link to="/" className="flex justify-center items-center space-x-3">
              <img
                src={process.env.PUBLIC_URL + "/ChaseGPT Logo Only.svg"}
                className="w-10 h-10"
                alt="ChaseGPT Logo"
              />
              <span className="invisible md:visible dark:text-gray-300">
                ChaseGPT DAO
              </span>
            </Link>
            <div className="flex justify-center items-center space-x-5">
              {darken ? (
                <MdLightMode
                  onClick={toggleLight}
                  className="cursor-pointer"
                  size={25}
                />
              ) : (
                <FaMoon
                  onClick={toggleLight}
                  className="cursor-pointer"
                  size={25}
                />
              )}

              <button className="px-4 py-2.5 bg-blue-600 font-medium text-sm text-white leading-tight uppercase rounded-full shadow-md shadow-gray-400 hover:bg-blue-700 hover:shadow-lg focus:outline-none active:bg-blue-800 dark:shadow-transparent transition duration-150 ease-in-out dark:text-blue-500 dark:border dark:border-blue-500 dark:bg-transparent">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
