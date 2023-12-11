import React, { useEffect, useState } from 'react'
import Navbar from '../Form/components/Navbar'
import CircleList from './CircleList'

export default function AllCircles() {


    const [AllCircles, setAllCircles] = useState({})

    const getAllCircle = async () => {
        const response = await fetch('https://greenroad-gr.onrender.com/app/p1/get-circle', {
            method: 'GET',
        });
        const data = await response.json()
        setAllCircles(data.circle)

    }

    useEffect(() => {
        getAllCircle()
    }, [])
    return (
        <div>
            {/* {console.log(AllCircles)} */}
            <Navbar getAllCircle={getAllCircle} />
            <CircleList AllCircles={AllCircles} getAllCircle={getAllCircle} />
        </div>
    )
}
