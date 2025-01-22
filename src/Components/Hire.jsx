import axios from "axios";
import React, { useState } from "react";

const Hire = () => {
  const [input, setInput] = useState({
    name: "", email: "", mobile: ""
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!input.name || !input.email || !input.mobile){
      alert("Please Fill all Field")
    }
    else{
      alert("Form Submitted")
      setInput({
        name : '',
        email: '',
        mobile: ''
      })
    }

    try {
      const response = await axios.post("http://localhost:3000/api/postuser", input, {
        withCredentials: true
      });
      console.log(response)
    } catch (error) {
      console.log(error); // Log error if there's any issue with the request
    }
  };

  return (
    <div className="text-2xl">
      <div className="font-sans text-2xl font-bold py-5">
        We will Contact you Shortly
      </div>
      <div className="justify-center">
        <h1>Please Enter Your Name</h1>
        <input
          className="border-2 hover:border-blue-600 active:border-blue-600"
          value={input.name}  // Fix: Use `input` instead of `formData`
          type="text"
          name="name"
          onChange={handleOnchange}
        />
      </div>
      <div className="text-2xl items-center justify-center py-5">
        <h1>Enter your Mobile Number</h1>
        <input
          className="border-2 hover:border-blue-600 active:border-blue-600"
          type="number"
          name="mobile"
          value={input.mobile}  // Fix: Use `input` instead of `formData`
          onChange={handleOnchange}
        />
      </div>
      <div className="text-2xl items-center justify-center">
        <h1>Enter your Mail ID</h1>
        <input
          className="border-2 mx-0 hover:border-blue-600 active:border-blue-600"
          type="email"  // You can use type="email" for better validation
          name="email"
          value={input.email}  // Fix: Use `input` instead of `formData`
          onChange={handleOnchange}
        />
      </div>
      <input 
        className='bg-blue-600 text-2xl p-2 my-5 text-white' 
        type='submit' 
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Hire;
