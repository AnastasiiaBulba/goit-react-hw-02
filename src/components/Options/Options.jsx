import PropTypes from "prop-types";
import s from "./Options.module.css";

const Options = ({ update, reset, total }) => (
  <div className={s.box}>
    <div className={s.btnContainer}>
      <button className={s.btn} type="button" onClick={() => update("good")}>
        Good
      </button>
      <button className={s.btn} type="button" onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={s.btn} type="button" onClick={() => update("bad")}>
        Bad
      </button>

      {total > 0 && (
        <button className={s.btnReset} type="button" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  </div>
);

Options.propTypes = {
  update: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Options;
