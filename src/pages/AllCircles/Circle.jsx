import React from 'react'

export default function Circle({ circle,getAllCircle }) {

    const deleteCircle = async (e) => {
        e.preventDefault()
        const response = await fetch('https://greenroad-gr.onrender.com/app/p1/delete-circle', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "circleId": circle.circleId }),
        });

        if (response.ok) {
            alert('Circle deleted successfully');
            getAllCircle()
        }
        else {
            alert('Error deleteing in circle');
        }
    }
    const startCircle = async (e) => {
        e.preventDefault()

        circle.signalIds.map(async (signalId, index) => {
           const response = await fetch(`https://greenroad-gr.onrender.com/app/p1/on-signal/${signalId}`, {
                method: 'GET',
            });
            if(signalId===circle.signalIds[circle.signalIds.length-1]){
                if (response.ok) {
                    alert('Circle started successfully');
                }
                else{
                    alert('Error deleteing in circle');
                }
            }
            else{
                if (!response.ok) {
                    alert('Error deleteing in circle');
                }
                else{
                }
            }
        })
    }

    const stopCircle = async (e) => {
        e.preventDefault()
        let response=0;
        circle.signalIds.map(async (signalId, index) => {
                 response = await fetch(`https://greenroad-gr.onrender.com/app/p1/off-signal/${signalId}`, {
                    method: 'GET',
                  });

                  if(signalId===circle.signalIds[circle.signalIds.length-1]){
                    if (response.ok) {
                        alert('Circle stopped successfully');
                    }
                    else{
                        alert('Error deleteing in circle');
                    }
                }
                else{
                    if (!response.ok) {
                        alert('Error deleteing in circle');
                    }
                    else{
                    }
                }
        })
       
    }


    return (
        <>
            <div className='bg-slate-300 p-5 rounded-md flex '>
                <div className='border-2 w-1/2'>
                    <div className=' flex '>
                        <p className='text-2xl font-semibold mr-5'>Circle Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     :</p>
                        <p className='text-2xl font-medium'>{circle.circleId}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-2xl font-semibold mr-5'>Circle Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</p>
                        <p className='text-2xl font-medium'>{circle.address.circleName}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-2xl font-semibold mr-5'>Number Of Signals &nbsp;&nbsp;: </p>
                        <p className='text-2xl font-medium'>{circle.numberOfSignals}</p>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <button className='bg-slate-800 text-white w-32 rounded-md font-semibold text-2xl mr-5 p-2 border-slate-500' onClick={startCircle}>Start</button>
                    <button className='bg-slate-800 text-white w-32 rounded-md font-semibold text-2xl mr-5 p-2 border-slate-500' onClick={stopCircle}>Stop</button>
                    <button className='bg-slate-800 text-white w-32 rounded-md font-semibold text-2xl mr-5 p-2 border-slate-500' onClick={deleteCircle}>Delete</button>
                    {/* <button className='bg-slate-800 text-white w-32 rounded-md font-semibold text-2xl mr-5 p-2 border-slate-500'>fajfjas</button> */}
                </div>
            </div>
            <br />
        </>
    )
}
