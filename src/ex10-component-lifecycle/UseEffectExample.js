import React, { useState } from 'react';
import { useEffect } from 'react';

const UseEffectExample = () => {

    const [dateTime, setDateTime] = useState('Default value');
    const[reload, setReload] = useState(false);

    const updateDate = () => {
        setReload(!reload);
    }

    useEffect(() => {
        console.log("useEffect executed");
        const currentDate = new Date();
        setDateTime(currentDate.toString());
}, [reload])

    return (
        <div className='container'>
            UseEffect Executed!
            <div className='alert alert-info'>{dateTime}</div>
            <div className = 'row' >
            <div className = 'col' >
                <button type='button' className='btn btn-primary' onClick={updateDate}> update date</button>

</div>

            </div>
        </div>
    );
};

export default UseEffectExample;