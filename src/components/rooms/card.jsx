import PropTypes from "prop-types";
import Title from "../text/title";
import "./card.css";

function Card({ title, price }) {
  const pricing = `${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)} / Night`;
  return (
    <article className="card">
      <div className="card-content">
        <div>
          <p className="global--tiny uppercase">{pricing}</p>
          <Title Tag="h3">{title}</Title>
        </div>
        <span className="card-tag global--tiny uppercase">Book</span>
      </div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
