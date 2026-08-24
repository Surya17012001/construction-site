import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  CalendarDays,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Service"],
  ["/team", "Team"],
  ["/projects", "Projects"],
  ["/post", "Post Page"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-inner">

          <Link to="/" className="logo">
            <img
              src="/img/flomatexs.png"
              alt="Flomatexs Construction Limited"
            />
          </Link>

          <div className="top-info">

            <div className="top-item">
              <CalendarDays />

              <div>
                <strong>Opening Hour</strong>
                <span>Mon - Sat, 8:00 - 9:00</span>
              </div>
            </div>

            <div className="top-item">
              <Phone />

              <div>
                <strong>Call Us</strong>

                <a href="tel:+254722158950">
                  +254 722 158950
                </a>

                <a href="tel:+254723049800">
                  +254 723 049800
                </a>
              </div>
            </div>

            <div className="top-item">
              <Mail />

              <div>
                <strong>Email Us</strong>

                <a href="mailto:Flomatexsbuildingconstractor@gmail.com">
                  Click Here
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-inner">

          <Link to="/" className="brand">
            FLOMATEXS
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}