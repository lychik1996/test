'use client';

import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function SignReadyMobile({setOnClose}:{setOnClose:()=>void}) {
    const {signIn,signUp} = useSignUserInfo();
    const router = useRouter();
    const handleRoute = ()=>{
        setOnClose();
        window.location.href = '/signIn';
    }
    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        router.push("/signIn");
    };
  return (
    <div className="w-full h-full flex justify-center sm:items-center  bg-shade0/70">
      <div className=" w-full sm:w-[479px] sm:rounded-lg sm:shadow-signR px-8 pt-20 sm:pb-[126px] sm:pt-[91px] sm:px-[66px] flex flex-col items-center bg-white ">
      <Image
        src="/signCheckMark.svg"
        width={160}
        height={160}
        alt="CheckMark"
      />
      <h1 className="text-darkBlue20 text-base sm:text-xl font-semibold mb-2 text-center ">
        {signIn && "Use your desktop to access Chad"}
        {signUp && "You`re ready to go!"}
      </h1>
      <p className="max-w-[347px] text-center text-shade40 text-sm mb-[13.5px]">
        Chad doesn`t support mobile browsers. To access your dashboard, login from your laptop or desktop computer.
      </p>
      <Button
        onClick={handleRoute}
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case rounded-lg h-[43px] w-full mb-4"
      >
        Ok
      </Button>
      {signIn && 
      <div className="text-shade40 text-xs flex items-center justify-center gap-1">
      Not ? {' '}
      <div  onClick={handleLogout} className="text-chadBlue">
        Logout
      </div>
    </div>
      }
    </div>
    </div>
  );
}
