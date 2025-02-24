import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()


    // another way is also there for api fetch
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch("https://api.github.com/users/surakshya-adhikari")
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    
    <div className='text-3xl text-end bg-gray-600 text-centerp-4 text-white p-52 m-4'>Github Followers {data.followers}
    <img  src= {data.avatar_url} alt="GitHub Image" width={300} />
    </div>
  )
}

export default Github

// this is an another way

export const gitLoader = async() => {
    const response = await fetch("https://api.github.com/users/surakshya-adhikari")
    return  response.json();
}