import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const navLinks = [
      {
        title: "Home",
        path: "/"
      },
      {
        title: "About",
        path: "/about"
      },
      {
        title: "Services",
        path: "/services"
      },
      {
        title: "Contacts",
        path: "/contacts"
      }
    ]

  return (
    <div className="navbar container mx-auto">
      <div className="navbar bg-slate-100 text-slate-900">
        <div className="navbar-start">
          {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}

          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
         <div className="flex items-center space-x-6">
            {
                navLinks.map((item) => (
                  <Link className="font-semibold hover:text-primary duration-300"
                   key={item.path} href={item.path}>
                  </Link>
                ))
  
            }
         </div>
        </div>
        <div className="navbar-end">
       <div className="flex space-x-3 items-center">
       <IoCartOutline  className="text-2xl" />
        <IoSearchSharp className="text-2xl" />
          <a className="btn btn-outline btn-primary  px-8">Appoinment</a>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
