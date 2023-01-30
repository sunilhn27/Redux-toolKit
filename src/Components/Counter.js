import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addByTen, adduserValue } from '../features/count';

function Counter() {

    const con = useSelector((state) => state.counter.value)
    const [count, setcount] = useState(con);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter Reducer : {con}</h1>
            <input placeholder='number' onChange={(e) => setcount(e.target.value)} />
            <button onClick={()=>dispatch(adduserValue(count))}>AdduserValue</button>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(addByTen())}>AddByTen</button>
        </div>
    )
}


export default Counter
