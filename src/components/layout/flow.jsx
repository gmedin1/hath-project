import PropTypes from "prop-types";

function Flow({ children }) {
  return <div className="flow inline-box">{children}</div>;
}

Flow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flow;
