import SignSelect from '@/components/SignSelect';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
const platforms = ['one', 'two', 'three', 'four', 'five'];
export default function SupportEmailDontUse({
  handleClickGmailUse,
  setIsAnotherEmail,
}: {
  handleClickGmailUse: () => void;
  setIsAnotherEmail: Function;
}) {
  const { setRemoveEmailAccountName,setDisconnectGmailAccount,setUseAnotherEmailAccount,userInfo,storeName,connectStore} = useSignUserInfo();
  const [anotherEmailName,setAnotherEmailName]= useState('');
  const route = useRouter();
  const handleisAnotherConnectionEmail = () => {
    if(anotherEmailName.length>0){
    setRemoveEmailAccountName();
    setIsAnotherEmail(true);
    setDisconnectGmailAccount();
    setUseAnotherEmailAccount();
    }
  };
  const handleCreateAccount =()=>{
    handleisAnotherConnectionEmail();
    const signUp = async()=>{
        axios.post('/api/auth/signUp',{
          email:userInfo.email,
          password:userInfo.password,
          name:userInfo.name,
          storeName:storeName,
          emailAccountName:'',
          connectStore:connectStore,
          connectGmailAccount:false,
        })
        .then(()=>{
          toast.success('Create account');
          localStorage.setItem('userInfo', JSON.stringify({
            isLogin: true,
            name: userInfo.name,
            connectStore:connectStore,
            storeName:storeName,
            emailAccountName:userInfo.email,
            connectGmailAccount:true,
        }));
        })
        .catch(()=>{
          toast.error("Failed to create account")
        })
    }
    signUp();
  }
  return (
    <>
      <label className="flex flex-col gap-2 text-shade40 text-xs mb-8">
        Platform
        <SignSelect
        setAnotherName={setAnotherEmailName}
        platforms={platforms} />
      </label>
      <Button
        onClick={handleCreateAccount}
        disabled={anotherEmailName.length===0}
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case rounded-lg h-[43px] w-full mb-4"
      >
        Submit
      </Button>
      <div className="w-full text-shade40 text-xs flex justify-center gap-1">
        Actually use Gmail?{' '}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={handleClickGmailUse}
        >
          Connect
        </span>
      </div>
    </>
  );
}
