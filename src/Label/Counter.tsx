import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCountAC, resetCountAC, setValueAC } from "../bll/count-reducer";
import { AppStateType } from "../bll/store";
import ButtonPage from "../Button/ButtonPage";
import s from "./Counter.module.css";

function Counter() {
  const { value, minValue, maxValue, error, editMode } = useSelector(
    (state: AppStateType) => state.count
  );

  const dispatch = useDispatch();

  let disabledIncrement = value >= maxValue;

  let disabledReset = value === minValue;

  let classIncrement = !disabledIncrement ? s.buttobuttonDisabled : "";

  let classReset =
    value < minValue || value > minValue ? s.button : s.buttonDisabled;

  let countClass = value === maxValue ? s.countFive : "";

  const onClickHandlerIncrement = () => {
    if (value < maxValue) {
      dispatch(incCountAC());
    }
  };

  const onClickHandlerReset = () => {
    dispatch(resetCountAC(minValue));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.countWrapper}>
        {error ? (
          <div className={s.error}>{"Incorrect value!"}</div>
        ) : editMode ? (
          <div>{"enter values and press 'set'"}</div>
        ) : (
          <div className={countClass}>{value}</div>
        )}
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.firstButton}>
          <ButtonPage
            onClickHandler={onClickHandlerIncrement}
            content="inc"
            disabled={editMode || disabledIncrement}
            className={editMode || disabledIncrement ? s.buttonDisabled : classIncrement}
          />
        </div>
        <div className={s.secondButton}>
          <ButtonPage
            onClickHandler={onClickHandlerReset}
            content="reset"
            disabled={editMode || disabledReset}
            className={editMode ? s.buttonDisabled : classReset}
          />
        </div>
      </div>
    </div>
  );
}

export default Counter;
