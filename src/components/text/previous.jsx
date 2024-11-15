import PropTypes from "prop-types";

function Previous({ children }) {
  return <p className="global--previous color-orange uppercase">{children}</p>;
}

Previous.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Previous;
