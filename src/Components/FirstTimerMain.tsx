import React, {useEffect, useState} from "react";

export const Test = () => {
    const [timer, setTimer] = useState<number>(0);
    const [color, setColor] = useState<number>(111);
    let changeEvery = 20;

    useEffect(() => {
        if (timer % changeEvery === 0) setColor(Math.floor(Math.random() * (999 - 111) + 111))

        setTimeout(() => {
            setTimer(timer + 1)
        }, 1000)
    }, [timer, changeEvery])


    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{fontSize: 50}}>{timer}</div>
        <div style={{width: 300, height: 300, background: `#${color}`}}/>
    </div>
}