import React, { useState } from 'react'

const Hire = () => {
    const [name, setName]= useState('')
    const [mobile, setMobile]= useState('')
    const [email, setEmail]= useState('')

    const handleSubmit=()=>{
        if(mobile.length === 10){
        alert('Information Submitted Sucessfully')
        setName('')
        setMobile('')
        setEmail('')
        }
        else{
            alert("Please Enter Value Number")
        }
        
    }
  return (
    <div className='text-2xl'>
        <div className='font-sans text-2xl font-bold py-5'>We will Contact you Shortly</div>
        <div className=' justify-center'>
            <h1>Please Enter Your Name</h1>
            <input className='border-2 hover:border-blue-600  active:border-blue-600' value={name} type='text' onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className='text-2xl items-center justify-center py-5'>
            <h1>Enter your Mobile Number</h1>
            <input className='border-2 hover:border-blue-600  active:border-blue-600' type='number' value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
        </div>
        <div className='text-2xl items-center justify-center'>
            <h1>Enter your Mail ID</h1>
            <input className='border-2 mx-0 hover:border-blue-600  active:border-blue-600' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <input className='bg-blue-600 text-2xl p-2 my-5 text-white' type='submit' onClick={handleSubmit}/>
    </div>
  )
}

export default Hire;
