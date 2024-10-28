import s from "./Options.module.css";

const Options = ({ update, reset, total }) => (
  <div className={s.box}>
    <div>
      <button className={s.btn} type="button" onClick={() => update("good")}>
        Good
      </button>
      <button className={s.btn} type="button" onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={s.btn} type="button" onClick={() => update("bad")}>
        Bad
      </button>
    </div>
    {total > 0 && (
      <button className={s.btnReset} type="button" onClick={reset}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
