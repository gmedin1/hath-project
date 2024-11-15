import PropTypes from "prop-types";

function Grid({ children }) {
  return <div className="auto-grid">{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
