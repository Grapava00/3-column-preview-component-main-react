import React from "react";
import PropTypes from "prop-types";

function Title({ title }) {
  return (
    <h1 className='text-veryLightGray mt-5 mb-4 font-big-shoulders-display font-bold'>
      {title}
    </h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
