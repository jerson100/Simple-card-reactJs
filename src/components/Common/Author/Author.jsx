import React from "react";
import PropTypes from "prop-types";
import "./author.scss";

const Author = ({ name, align }) => {
  return (
    <div className="author">
      <p className={`author__description author__description--align-${align}`}>
        {name}
      </p>
    </div>
  );
};

Author.propTypes = {
  name: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["center", "left", "right"]),
};

Author.defaultProps = {
  align: "left",
};

export default Author;
