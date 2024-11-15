import PropTypes from "prop-types";

function Section({ children }) {
  return (
    <section className="bg-dark text-light">
      <div className="container">{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
