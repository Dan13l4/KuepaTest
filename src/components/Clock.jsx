import React, {useState, useEffect} from 'react';


function Clock() {

    const [clock, setClock] = useState()

    useEffect(()=>{
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    }, [])

  return (
    <div className='card'>
        <div className='card-body clock'>
            {clock}
        </div>
    </div>
  );
}

export default Clock;