import PropTypes from "prop-types";

export default function Icon({ svgELement }) {
  return svgELement;
}

Icon.propTypes = {
  svgELement: PropTypes.element.isRequired,
};
