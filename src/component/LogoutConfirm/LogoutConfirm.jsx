import React from "react";
import "../LogoutConfirm/LogoutConfirm.css";

import profileimg from "../../assets/profile-img.png";
import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m2.png";
import survimg from "../../assets/surv-img.png";

import myadvertisements from "../../assets/myadvertisements.png";
import addadvertisements from "../../assets/addadvertisements.png";
import logoutimg from "../../assets/logout-img.png";

import { Link, useNavigate } from "react-router-dom";

export default function LogoutConfirm() {
  const navigate = useNavigate();
  return (
    <div className="logout-wrapper container" >

      {/* ==== SIDEBAR ==== */}
    
           <div className="logoutmarketing-sidebar ">
             <button className="side-btn " style={{alignItem:"center"}}>
                <img src={profileimg} alt="" />
               حسابي الشخصي
             </button>
    
             <button className="side-btn">
               <img src={accountimg} alt="" />
               <Link to='/bankaccount' className="text-dark text-decoration-none"> الحساب البنكي</Link>
             </button>
    
    <Link to='/marketing' className="text-dark text-decoration-none">
      <button className="side-btn">
        <img src={marketingimg} alt="" />
        التسويق
      </button>
    </Link>
    
             <button className="side-btn">
                           <img src={survimg} alt="" /> 
    
                <Link to='/contractpage' className="text-dark text-decoration-none"> 
               التقييم والعقود
                </Link>
             </button>
    
             <button className="side-btn logout">
               <img src={logoutimg} alt="" /> 
                 <Link to='/logoutconfirm' className="text-white text-decoration-none"> 
              تسجيل الخروج
                </Link>
             </button>
           </div>

      {/* ==== LOGOUT CONTENT ==== */}
      <div className="logout-content">
        <h2 className="logout-title">هل تريد تسجيل الخروج ؟</h2>

   <button
      className="logout-main-btn2"
      onClick={() => navigate("/accounttype")}
    >
      تسجيل الخروج
    </button>
      </div>

    </div>
  );
}
