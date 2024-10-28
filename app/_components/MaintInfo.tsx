'use client';

import { useEffect, useState } from "react";


export default function MainInfo(){
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);
            setUserName(userInfo.name || ''); 
        }
    }, []);
    const handleLogout = ()=>{
        localStorage.removeItem('userInfo');
        window.location.href = '/signIn';
    }
    return(
        <div className="flex justify-center w-full">
        <div className="flex flex-col w-[200px] sm:w-[400px] p-4 rounded m-2 shadow-signR">
        {userName.length>0 && <h1 className="text-darkBlue20 text-base sm:text-xl font-semibold mb-2 font-eudoxus" >hello: {userName}</h1>}
        
        <button
        onClick={handleLogout}
          className="bg-blue-400 normal-case rounded-lg h-[43px] w-full text-white"
        >{userName.length>0? 'LogOut':'Login'}</button>
        </div>
        </div>
    )
}