import React, { useState } from "react";
import { Search } from "lucide-react";
import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    switch (query) {
      case "home":
        navigate("/");
        break;
      case "about":
        navigate("/about");
        break;
      case "blogs":
        navigate("/blogs");
        break;
      case "sterilization":
        navigate("/sterilization");
        break;
      case "donation":
        navigate("/donation");
        break;
      case "contact":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header">
      {/* Logo */}
      <NavLink to="/">
        <img src="/logo.png" alt="logo" className="logo" />
      </NavLink>

      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/" className="active">
          Home
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/blogs" end>
          Blogs
        </NavLink>
        <NavLink to="/sterilization" end>
          Sterilization
        </NavLink>
        <NavLink to="/donation" end>
          Donation
        </NavLink>
        <NavLink to="/contact" end>
          Contact
        </NavLink>
      </nav>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={() => document.querySelector(".search-form").classList.toggle("active")}>
          <Search size={24} /> {/* Lucide Search Icon */}
        </button>
      </div>
      <div>
        {/* Search Form */}
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            id="search-box"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>
            <FaSearch size={24} /> {/* React-Icons FaSearch Icon */}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;