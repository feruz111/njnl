import React, { ChangeEvent, useState } from "react";
import ButtonPage from "../Button/ButtonPage";
import s from "./Label.module.css";

type PropsType = {
  setCount: (a: number) => void;
  count: number;
  maxValue: number;
  minValue: number;
  setCountMin: (a: number) => void;
  setError: (a: boolean) => void;
  editMode: boolean
  error: boolean

};

function Label(props: PropsType) {
  let disabledIncrement = props.count >= props.maxValue;

  let disabledReset = props.count === props.minValue;

  let classIncrement = !disabledIncrement ? s.button : s.buttonDisabled;

  let classReset =
    props.count < props.minValue || props.count > props.minValue
      ? s.button
      : s.buttonDisabled;

  let countClass = props.count === props.maxValue ? s.countFive : "";

  const onClickHandlerIncrement = () => {
    if (props.count < props.maxValue) {
      props.setCount(props.count + 1);
    }
  };

  const onClickHandlerReset = () => {
    props.setCount(props.minValue);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.countWrapper}>{
        props.error? <div className={s.error}>{"Incorrect value!"}</div> :
        (props.editMode? <div>{"enter values and press 'set'"}</div>: <div className={countClass}>{props.count}</div>)
        }
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.firstButton}>
          <ButtonPage
            onClickHandler={onClickHandlerIncrement}
            content="inc"
            disabled={props.editMode || disabledIncrement}
            className={props.editMode ? s.buttonDisabled: classIncrement}
          />
        </div>
        <div className={s.secondButton}>
          <ButtonPage
            onClickHandler={onClickHandlerReset}
            content="reset"
            disabled={props.editMode || disabledReset}
            className={props.editMode ? s.buttonDisabled: classReset}
          />
        </div>
      </div>
    </div>
  );
}

export default Label;
