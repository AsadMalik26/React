import React from 'react';
const Counter = () => {
    const [count, setCount] = React.useState(7);
    const handleIncreament = () => {
        setCount(count+1);
        
        console.log(count);
        
    }
    const handleDecreament = () => {
        setCount(count - 1);
        console.log(count);
    }
    return ( 
    <div style={{padding:"2rem"}}>
        {count} <button onClick={handleDecreament}>--</button> {count} <button onClick={handleIncreament}>++</button> {count}
    </div> );
}
 
export default Counter;