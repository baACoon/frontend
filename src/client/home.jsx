import React from "react";
import { useNavigate } from "react-router-dom";


function Home (){
    const navigate = useNavigate();
    const navigatehome = () =>{
        navigate('/Home')
    }
}

export default Home;
