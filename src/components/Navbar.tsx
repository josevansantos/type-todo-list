import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="uk-container">
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/type-todo-list/" className="uk-navbar-item uk-logo">
            <span uk-icon="icon: list; ratio: 1.5"></span>
          </Link>
        </div>
        <div className="uk-navbar-center">
          <h3 className="uk-text-uppercase uk-text-muted uk-text-middle">
            My To-Do
          </h3>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/create">
                <span
                  uk-icon="icon: plus-circle; ratio: 1.8"
                  className="uk-text-success"
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
