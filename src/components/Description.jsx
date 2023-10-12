import React from "react";
import PropTypes from "prop-types";

function Description({ text }) {
  return (
    <p className='text-transparentWhite font-lexend-deca font-normal mb-20'>
      {text}
    </p>
  );
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
