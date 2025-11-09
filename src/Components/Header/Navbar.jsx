import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar md:w-10/12 mx-auto flex">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a >Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">
          <span className="text-amber-500">Hk</span> Robin
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a >Work</a>
          </li>
          <li>
            <a >Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a href='https://www.linkedin.com/in/hk-robin/' className="cursor-pointer"><FontAwesomeIcon icon={faSquareLinkedin} /></a>
        <a href='https://x.com/HkRobin8' className="cursor-pointer"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href='https://www.facebook.com/mdhk.robin.5'  className='cursor-pointer'><FontAwesomeIcon icon={faSquareFacebook} /></a>
      </div>
    </div>
  );
};

export default Navbar;
