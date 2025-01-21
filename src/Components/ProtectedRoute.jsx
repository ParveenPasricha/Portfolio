import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute=()=>{
    const [isAuthenticated, setIsAuthenticated]= useState(false)

return isAuthenticated ? <Outlet/> : <Navigate to={"/hire"}/>
}

export default ProtectedRoute;