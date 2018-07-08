import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <div className="v-title">
        <Link to="/">
          <div id="homegallery">thoughts on things</div>
        </Link>
        <div id="byanthonygordon">by anthony gordon</div>
      </div>

      <a href="https://github.com/anthony-gordon">
        <img
          className="github"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        />
      </a>
    </div>
  );
};

export default Header;
