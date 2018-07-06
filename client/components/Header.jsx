import React from "react";

const Header = props => {
  return (
    <div>
      <div className="v-title">
        <div id="homegallery">home gallery</div>
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
