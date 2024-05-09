
import React from 'react'
import Logo from "../../assets/images/Logo.png";
import "./Frontpage.css";
import { useNavigate} from 'react-router-dom';



export default function Frontpage() {
  const navigate = useNavigate();
  const handleLoginButton=()=>{
    navigate("/whoareyou");
  }
  return (
    <div class="container3">
         <button onClick={handleLoginButton} class="overlay-btn" >Login →</button>
    
    </div>
  )
}
