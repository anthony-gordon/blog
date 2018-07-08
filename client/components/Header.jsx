import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <div id="titlebox" className="v-title">
        <Link to="/">
          <div id="homegallery">Thoughts on things</div>
        </Link>
        <div id="byanthonygordon">A blog by Anthony Gordon</div>
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
