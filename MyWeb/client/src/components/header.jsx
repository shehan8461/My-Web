import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './header.css';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="navbardetails">
        <Link to="/">
          <h1 className="twebpagename">Shehan's Freelancing Hub</h1>
        </Link>
        <h3 id="h3">Delivering Excellence in Web Development and Design</h3>
        {/* Menu button for smaller screens */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Conditional rendering of menu links */}
        <ul className={`other-topics ${menuOpen ? 'open' : ''}`}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="Profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
