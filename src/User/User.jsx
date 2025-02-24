import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams()
  return (
    <div className=' bg-slate-500 text-black 
     text-5xl p-52 text-center'>User: {userId}</div>
  )
}

export default User