import "./navbar.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".nav");
      if (window.scrollY >= 120) {
        nav.classList.add("scrolled");
        return;
      }
      nav.classList.remove("scrolled");
    });
  });
  return (
    <header>
      <nav className="nav">
        <div className="nav-content inline-box">
          <div>
            <img src="./images/logo.png" alt="" width={150} />
          </div>
          <ul className="text-light flex global--link nav-list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
