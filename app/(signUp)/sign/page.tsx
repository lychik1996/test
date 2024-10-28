'use client';

import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import SignHeader from '@/components/SignHeader';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { useRouter } from 'next/navigation';
import SignPasswordInput from '@/components/SignPasswordInput';
import SignEmailInput from '@/components/SignEmailInput';

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

export default function Sign() {
  const [isNextHref,setIsNextHref] = useState(false);
  const {
    setUserInfo,
    userInfo,
    createAccount,
    connectStore,
    setAddStoreName,
    storeName,
    setChangesCreateAccount,
    setCreateAccount,
    setAlreadyVisitedSign,
    setClearAlreadyVisitedSign,
    setDisconnectStore,
    setAlreadyVisitedConnectionStore,
    setClearAlreadyVisitedConnectionStore,
    setDisconnectGmailAccount,
    setRemoveEmailAccountName,
    setRemoveStoreName,
  } = useSignUserInfo();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: userInfo.email,
    name: userInfo.name,
    password: userInfo.password,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(formData);
    setCreateAccount();
    setAlreadyVisitedSign();
    setIsNextHref(true);
    router.push('/shopify');
  };
  const handleContinue = () => router.push('/shopify');

  useEffect(() => {
    if (
      formData.email !== userInfo.email ||
      formData.name !== userInfo.name ||
      formData.password !== userInfo.password
    ) {
      setClearAlreadyVisitedSign();
      setClearAlreadyVisitedConnectionStore();
      setChangesCreateAccount();
      setDisconnectStore();
      setRemoveEmailAccountName();
      setRemoveStoreName();
      setDisconnectGmailAccount();
      setIsNextHref(false);
    }
  }, [
    formData,
    userInfo,
    setUserInfo,
    setClearAlreadyVisitedConnectionStore,
    setChangesCreateAccount,
    setDisconnectStore,
    setDisconnectGmailAccount,
    setClearAlreadyVisitedSign,
    setRemoveEmailAccountName,
    setRemoveStoreName,
  ]);

  useEffect(() => {
    if (connectStore) {
      setAlreadyVisitedConnectionStore();
      if (storeName === "") {
        setAddStoreName('shopify');
      }
    }
    const isEmail = formData.email.length>0 && userInfo.email===formData.email;
    const isName = formData.name.length>0 && userInfo.name ===formData.name;
    const isPass = formData.password.length>0 && userInfo.password===formData.password;
    if( isEmail && isName && isPass && createAccount){
      setIsNextHref(true);
    }
  }, [setAlreadyVisitedConnectionStore,storeName, connectStore,formData,userInfo,createAccount,setAddStoreName]);
  
  return (
    <div className="sm:w-[480px] px-10 pt-4 sm:py-16 sm:rounded-lg sm:shadow-signR bg-white">
      <SignHeader
        header="Welcome to Chad"
        info="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
        step={1}
        {...(isNextHref && { nextHref: 'shopify' })}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-4">
        <SignEmailInput
        formData={formData}
        setFormData={setFormData}
        textSxParams={textSxParams}
        sign="signUp"
        />
        <label className="flex flex-col text-shade40 text-xs font-medium gap-2">
          Your Name
          <TextField
            type="text"
            size="small"
            placeholder="Mega Chad"
            required
            sx={textSxParams}
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
        <SignPasswordInput
        formData={formData}
        setFormData={setFormData}
        textSxParams={textSxParams}
        
        />
        {!createAccount ? (
          <Button
            type="submit"
            variant="contained"
            disableElevation
            className="bg-blue-400 normal-case rounded-lg h-[43px]"
          >
            {' '}
            Create account
          </Button>
        ) : (
          <Button
            onClick={handleContinue}
            type="button"
            variant="contained"
            disableElevation
            className="bg-blue-400 normal-case rounded-lg h-[43px]"
          >
            {' '}
            Continue
          </Button>
        )}
      </form>
      <div className="text-shade40 text-xs flex items-center justify-center gap-1">
        Already have an account?{' '}
        <Link href="/signIn" className="text-chadBlue">
          Login
        </Link>
      </div>
    </div>
  );
}
