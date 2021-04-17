import React, { ChangeEvent, useEffect } from "react";
import {
  maxValueSetAC,
  minValueSetAC,
  setEditModeAC,
  setErrorAC,
  setValueAC,
} from "../bll/count-reducer";
import ButtonPage from "../Button/ButtonPage";
import s from "./SettingsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../bll/store";

function SettingsPage() {
  const { minValue, maxValue,error } = useSelector(
    (state: AppStateType) => state.count
  );

  const dispatch = useDispatch();

  let minDisabled =
    minValue < 0 || minValue === maxValue || maxValue <= minValue;
  let maxDisabled =
    maxValue < 0 || minValue === maxValue || maxValue <= minValue;

  let disable = maxValue <= minValue || minValue < 0 || maxValue < 0;
  
  let onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEditModeAC(true));
    dispatch(maxValueSetAC(parseInt(e.currentTarget.value)));

    disable = false;
  };

  let onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEditModeAC(true));
    dispatch(minValueSetAC(parseInt(e.currentTarget.value)));

    disable = false;
  };

  const onSetChange = () => {
    dispatch(setEditModeAC(false));
    dispatch(setValueAC(minValue));
    disable = true;
  };

  useEffect(() => {
    if (minDisabled || maxDisabled) {
      dispatch(setErrorAC(true));
    } else dispatch(setErrorAC(false));
  }, [minValue, maxValue]);

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
              className={maxDisabled ? s.inputError : ""}
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
            className={error || disable && "" ? s.setButtonDisabled : s.setButton}
            onClickHandler={onSetChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
