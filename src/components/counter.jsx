import React from 'react';
const Counter = () => {
    return ( 
    <div style={{padding:"2rem"}}>
        {count} <button onClick={handleDecreament}>--</button> {count} <button onClick={handleIncreament}>++</button> {count}
    </div> );
}
 
export default Counter;