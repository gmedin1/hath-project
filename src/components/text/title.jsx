import PropTypes from "prop-types";

function Title({ children, className, Tag }) {
  return <Tag className={`global--${Tag} ${className}`}>{children}</Tag>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  Tag: PropTypes.oneOf(["h1", "h2", "h3", "h4"]).isRequired,
};

export default Title;
