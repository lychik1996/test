'use client';
import SignEmailInput from '@/components/SignEmailInput';
import SignPasswordInput from '@/components/SignPasswordInput';
import { useSignUserInfo } from '@/store/use-SignUserInfo';

import { Button} from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const textSxParams = {
  backgroundColor: 'rgb(248, 249, 252)',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const route= useRouter();
  const {setSignIn} = useSignUserInfo();
  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    const sign=async()=>{
        axios.post('/api/auth/signIn',{
            email:formData.email,
            password:formData.password
        })
        .then((res)=>{
            const userInfo= res.data.user;
            toast.success('Sign');
            setSignIn();
            localStorage.setItem('userInfo', JSON.stringify({
                isLogin: true,
                name: userInfo.name,
                connectStore:userInfo.connectStore,
                storeName:userInfo.storeName,
                emailAccountName:userInfo.emailAccountName,
                connectGmailAccount:userInfo.connectGmailAccount,}))
            route.push('/')
        })
        .catch((error)=>{
            toast.error(`${error.response?.data?.message}`)
        })
    }
    sign();
  }
  return (
    <div className="w-full h-full min-h-fit flex justify-center sm:items-center">
      <div className=" w-full sm:w-[480px] px-10 pt-4 sm:py-16 sm:rounded-lg sm:shadow-signR bg-white">
        <div className="flex flex-row items-center gap-1 mb-6">
          <Image
            src="/chadlogo.svg"
            width={28.4}
            height={23.4}
            alt="Chad Logo"
          />
          <h1 className="text-darkBlue20 font-eudoxus text-2xl font-bold">
            Chad
          </h1>
        </div>
        <h1 className="text-darkBlue20 text-xl font-semibold mb-2 font-eudoxus">
          Welcome back
        </h1>
        <p className="max-w-[356px]  text-shade40 text-sm mb-4">
          Feeling ready to take on the day? Chad is too!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-4">
        <SignEmailInput
        formData={formData}
        setFormData={setFormData}
        textSxParams={textSxParams}
        sign="signIn"
        />
          <SignPasswordInput
            formData={formData}
            setFormData={setFormData}
            textSxParams={textSxParams}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            className="bg-blue-400 normal-case rounded-lg h-[43px]"
          >
            Login
          </Button>
        </form>
        <div className="text-shade40 text-xs flex items-center justify-center gap-1">
          Don`t have an account?
          <Link href="/sign" className="text-chadBlue">
            Join the waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
