import {useState} from 'react';

function ItemCount(){
    const [count, setCount] = useState(0);

    const handleSumar = ()=>{
        setCount(count + 1);
    }
     const handleRestar = ()=>{
        setCount(count-1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick = {handleSumar}> + </button>
            <button onClick = {handleRestar}> -</button>
        </div>

    )

}

export default ItemCount