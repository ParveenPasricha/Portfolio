// import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"


// export async function fetchData(){
//     try {
//         const userData = await axios.get('http://localhost:3000/api/getuser')
//         console.log(userData)
//     } catch (error) {
//         console.log("error aya hai fetchdata jo ki get method hai", error)
//     }

// }
// export function Connect(){
//     const [data, setData]= useState(null)
//     useEffect(()=>{
//         fetch('http://localhost:5000/api/getuser')
//         .then(response => response.json())
//             .then(data => setData(data.message))
//             .catch(error => console.error('Error fetching data:', error));
//    fetchData
//         },[])
//     return(
//         <div><h1>{data ? data: 'Loading...'}</h1></div>
//     )
// }

// export async function fetchData1(name, email, mobile){
//     try {
//         const userData1 = await axios.post('http://localhost:3000/api/postuser',{
//         name, email, mobile})
//         console.log(userData1)
//     } catch (error) {
//         console.log("error aa gya ha jo ki post method hai", error)        
//     }
// }



import axios from "axios";
import { useState, useEffect } from "react";

// GET request function using axios
export async function fetchData() {
    try {
        const userData = await axios.get('http://localhost:3000');
        console.log(userData);
    } catch (error) {
        console.log("Error in fetchData (GET method):", error);
    }
}

// Connect component to fetch data and display
export function Connect() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/getuser');
                const data = await response.json();
                setData(data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchDataFromAPI(); // Call async function
    }, []); // Empty dependency array to run only once when component mounts

    return (
        <>
            <h1>Wait</h1>
        </>
    );
}

// POST request function using axios
export async function fetchData1(name, email, mobile) {
    try {
        const userData1 = await axios.post('http://localhost:5000/api/postuser', {
            name, email, mobile
        });
        console.log(userData1);
    } catch (error) {
        console.log("Error in fetchData1 (POST method):", error);
    }
}
