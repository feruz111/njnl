import React, { useState } from "react";
import Button from "../Button/Button";
import s from "./Label.module.css"

function Label() {
  let [count, setCount] = useState(0);

  let disabledIncrement = count === 5;

  let disabledReset = count === 0;

  let classIncrement = count >= 0 && count < 5 ? s.button : s.buttonDisabled;

  let classReset = count > 0 ? s.button : s.buttonDisabled;

  let countClass = count === 5 ? s.countFive : "";

  const onClickHandlerIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const onClickHandlerReset = () => {
      setCount(0);
  };

  return (
    <div>
      <div className={s.countWrapper}>
        <div className={countClass}>{count}</div>
      </div>
      <div className={s.buttonWrapper}>
      <div>
      <Button
        onClickHandler={onClickHandlerIncrement}
        content="inc"
        disabled={disabledIncrement}
        className={classIncrement}
      />
      </div>
      <div>
      <Button
        onClickHandler={onClickHandlerReset}
        content="reset"
        disabled={disabledReset}
        className={classReset}
      />
       </div>
       </div>
    </div>
  );
}

export default Label;