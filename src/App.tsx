import React, {useState} from "react";
import {FirstTimerMain} from "./Components/FirstTimerMain";
import {SecondTimer} from "./Components/SecondTimer";

export const App = () => {
    const [isRunning, setIsRunning] = useState<boolean>(true); // for SecondTimer

    return <>
        <FirstTimerMain/>
        <hr/>
        <SecondTimer isRunning={isRunning} setIsRunning={setIsRunning}/>
    </>
}