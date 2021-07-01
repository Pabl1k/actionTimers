import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";

type PropsType = {
    isRunning: boolean
    setIsRunning: Dispatch<SetStateAction<boolean>>
}
export const SecondTimer: React.FC<PropsType> = React.memo(({isRunning, setIsRunning}) => {
    const [timer, setTimer] = useState<number>(10);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setTimer(timer === 0 ? 10 : timer - 1)
                setIsRunning(timer !== 1)
            }, 1000)

            return () => clearInterval(id)
        }
    }, [isRunning, timer, setIsRunning])

    const pauseHandler = useCallback(() => {
        timeoutId && clearTimeout(timeoutId)
        setTimeoutId(setTimeout(() => {
                setIsRunning(state => !state)
            }, 400)
        )
    }, [setIsRunning, timeoutId])
    useEffect(() => {
        window.addEventListener("keypress", pauseHandler)
        return () => window.removeEventListener("keypress", pauseHandler)
    }, [pauseHandler])

    return <div style={{border: 'solid black', height: 150, padding: 30, fontSize: 30}}
                onMouseMove={pauseHandler}
                onMouseDown={() => setIsRunning(!isRunning)}>
        {timer === 0
            ? ''
            : `This text will be hide in ${timer} seconds`}
    </div>
})