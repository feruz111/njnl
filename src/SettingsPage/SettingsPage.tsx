import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import ButtonPage from "../Button/ButtonPage";
import s from "./SettingsPage.module.css";

type PropsType = {
  setHandler: (a: number, b: number) => void;
  editMode: boolean
  setEditMode: (a:boolean) => void
  error: boolean
  setError: (a: boolean) => void;
  minValue: number;
  
};

function SettingsPage(props: PropsType) {
  let [maxValue, setMaxValue] = useState(5);
  let [minValue, setMinValue] = useState(0);

  
  if(minValue < 0 || maxValue < 0 || minValue === maxValue){
    props.setError(true)
  }else if (minValue > 0 || maxValue > 0 || minValue !== maxValue){
    props.setError(false)
  }

  let minDisabled = minValue < 0 || minValue === maxValue ? true : false
  let maxDisabled = maxValue < 0 || minValue === maxValue ? true : false

  let disable =
    maxValue <= minValue || minValue < 0 || maxValue < 0 ? true : false;

  let onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setEditMode(true)

    setMaxValue(parseInt(e.currentTarget.value));
    disable = false;
  };

  let onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setEditMode(true)
    setMinValue(parseInt(e.currentTarget.value));
    disable = false;
  };

  const onSetChange = () => {
    disable = true;

    props.setEditMode(false)

    props.setHandler(maxValue, minValue);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inputsWrapper}>
        <div className={s.firstInputWrapper}>
          <div className={s.maxMinWrapper}>max value:</div>
          <div className={s.inputWrapper}>
            <input
              value={maxValue}
              type="number"
              onChange={onMaxChange}
              className={maxDisabled  ? s.inputError : ""}
            />
          </div>
        </div>
        <div className={s.secondInputWrapper}>
          <div className={s.maxMinWrapper}>min value:</div>
          <div className={s.inputWrapper}>
            <input
              value={minValue}
              type="number"
              onChange={onMinChange}
              className={minDisabled ? s.inputError : ""}
            />
          </div>
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.center}>
          <ButtonPage
          content={"set"}
            disabled={disable}
            className={disable && "" ? s.setButtonDisabled : s.setButton}
            onClickHandler={onSetChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
