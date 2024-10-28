import PropTypes from "prop-types";
import s from "./Description.module.css";

const Description = ({ name, text }) => {
  return (
    <div className={s.description}>
      <h1 className={s.title}>{name}</h1>
      <p className={s.text}>{text}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Description;
