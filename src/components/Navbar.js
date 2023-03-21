import { useState } from "react";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  function handleAuth() {
    if (user) auth.signOut();
  }
  console.log(user);
  return (
    <nav className="bg-[#131921] py-3 m">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 container">
        <div className="flex items-center">
          <button
            className="text-white mr-4 p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
          <Link to="/" className="text-white flex w-fit items-center">
            <img
              className="h-10 md:h-12 object-contain pt-3 mt-2 -ml-4 "
              src="https://links.papareact.com/f90"
              alt="Amazon Logo"
            />
            .in
          </Link>
        </div>

        {/*                   Address                                          */}
        <Link to="/SelectAddress">
          <div className="text-white ml-1 w-fit hidden md:block p-2">
            <p className="pl-5 text-xs">Hello</p>
            <p className="font-bold text-sm flex gap-1">
              <FiMapPin /> Select your address
            </p>
          </div>
        </Link>

        {/*                    Search bar                                 */}
        <div className="hidden md:flex items-center px-2 flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 flex-grow rounded-l-md p-2"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 rounded-r-md p-3">
            <FaSearch className="text-gray-600" />
          </button>
        </div>

        <div className="flex items-center">
          {/*                           SignIn                                          */}
          <Link to={!user && "/Login"}>
            <div
              className="text-white  hidden md:block p-2"
              onClick={handleAuth}
            >
              <p className="text-xs">Hello, {user ? user.email : "Guest"} </p>
              <p className="font-bold text-sm">
                {user ? "Sign out" : "Sign In"}
              </p>
            </div>
          </Link>

          {/*                           Return & orders                                          */}
          <Link to="/Return&orders">
            <div className="text-white hidden md:block p-2">
              <p className="text-xs">Returns</p>
              <p className="font-bold text-sm">& Orders</p>
            </div>
          </Link>

          {/*                           Cart                                          */}
          <Link to="/checkout">
            <div className="relative p-2">
              <span className="absolute pb-5 top-1 left-7 md:-mr-6 h-4 w-4 bg-red-500 text-center rounded-full font-bold text-black">
                {basket?.length}
              </span>
              <button className="bg-yellow-400 hover:bg-yellow-500 rounded-md p-2">
                <FaShoppingCart className="text-gray-600" />
              </button>
            </div>
          </Link>
        </div>
      </div>

      {isOpen && ( //
        <div className="mx-auto transition-all delay-1000 max-w-screen-xl px-6 py-3 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 rounded-md w-full p-2 outline-none"
          />
          <button className="bg-yellow-400 right-0 hover:bg-yellow-500 absolute rounded-r-md p-3">
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
