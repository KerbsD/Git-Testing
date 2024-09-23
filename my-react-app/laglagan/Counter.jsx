import React, {useState} from 'react';
 
function Counter() {
    
    const [count, setCount] = useState(0)
    
    const incCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const decCount = () => {
        setCount(count - 1)
    }

    return(
        <div className='mx-auto max-w-[400px] text-center p-6'>
            <h1 className='mb-3 text-6xl font-bold'>{count}</h1>
            <div>
                <button onClick={incCount} className='m-2 border-blue-400 border-2 rounded-xl p-1 text-white bg-blue-700'>Increment</button>
                <button onClick={resetCount} className='m-2 border-blue-400 border-2 rounded-xl p-1 text-white bg-blue-700'>Reset</button>
                <button onClick={decCount} className='m-2 border-blue-400 border-2 rounded-xl p-1 text-white bg-blue-700'>Decrement</button>
            </div>
        </div>
    );
}

export default Counter