import React, {useEffect, useState} from "react";
import "./App.css";
import Counter from "./Label/Counter";
import SettingsPage from "./SettingsPage/SettingsPage";

function App() {
    let [minValue, setCountMin] = useState(0);
    let [maxValue, setCountMax] = useState(5);
    let [count, setCount] = useState(minValue);
    let [editMode, setEditMode] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {
        let asString = localStorage.getItem("countValue");
        if (asString) {
            let newValue = JSON.parse(asString);
            setCount(newValue);
        }
    }, []);



    useEffect(() => {
        localStorage.setItem("countValue", JSON.stringify(count));
    }, [count]);




    const setHandler = (max: number, min: number) => {
        setCountMax(max);
        setCountMin(min);
    };

    return (
        <div className="App">
            <SettingsPage
                minValue={minValue}
                setError={setError}
                error={error}
                setEditMode={setEditMode}
                editMode={editMode}
                setHandler={setHandler}
            />
            <Counter
                setError={setError}
                error={error}
                editMode={editMode}
                setCount={setCount}
                setCountMin={setCountMin}
                count={count}
                maxValue={maxValue}
                minValue={minValue}
            />
        </div>
    );
}

export default App;
