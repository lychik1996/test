'use client';
import { createPortal } from "react-dom"; 
import clsx from "clsx";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSignUserInfo } from "@/store/use-SignUserInfo";

const SignReadyDesktop = dynamic(()=>import("./SignReadyDesktop"));
const SignReadyMobile =dynamic(()=>import("./SignReadyMobile"));
export default function AfterSign() {
    const {setCloseSign,signIn,signUp}=useSignUserInfo();
    const [isMobile, setIsMobile] = useState(false);
    

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = navigator.userAgent;
            const isMobileDevice = /android.+mobile|iphone|ipod/i.test(userAgent);
            setIsMobile(isMobileDevice);
        };

        checkDevice(); 
    }, []); 
    const shouldShow = signUp || (signIn && isMobile)
    const portalContent = (
        <div className={clsx(
            "w-full h-full absolute",
            !shouldShow && "hidden",

        )}>
            {isMobile ? <SignReadyMobile  setOnClose={setCloseSign}/> : <SignReadyDesktop  setOnClose={setCloseSign}/>}
        </div>
    );
    return createPortal(portalContent, document.body);
}