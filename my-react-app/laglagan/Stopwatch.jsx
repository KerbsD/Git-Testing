import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapseTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapseTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapseTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapseTime / (1000) % 10);
        let milliseconds = Math.floor((elapseTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");
        
        return `${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <div className='w-[250px] flex items-center justify-center flex-col mx-auto p-3 border-black border-4 rounded-lg'>
            <div className='flex flex-row justify-center items-center mx-auto text-4xl pb-2'>{formatTime()}</div>
            <div>
                <button className='m-1 border-green-700 border-2 p-1 rounded-lg bg-green-500 text-white shadow-lg' onClick={start}>Start</button>
                <button className='m-1 border-red-700 border-2 p-1 rounded-lg bg-red-500 text-white shadow-lg' onClick={stop}>Stop</button>
                <button className='m-1 border-slate-700 border-2 p-1 rounded-lg bg-slate-500 text-white shadow-lg' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch