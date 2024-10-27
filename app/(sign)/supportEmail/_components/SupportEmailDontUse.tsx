import SignSelect from '@/components/SignSelect';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
import { useState } from 'react';
const platforms = ['one', 'two', 'three', 'four', 'five'];
export default function SupportEmailDontUse({
  handleClickGmailUse,
  setIsAnotherEmail,
}: {
  handleClickGmailUse: () => void;
  setIsAnotherEmail: Function;
}) {
  const { setRemoveEmailAccountName,setDisconnectGmailAccount,setUseAnotherEmailAccount} = useSignUserInfo();
  const [anotherEmailName,setAnotherEmailName]= useState('');
  const handleisAnotherConnectionEmail = () => {
    if(anotherEmailName.length>0){
    setRemoveEmailAccountName();
    setIsAnotherEmail(true);
    setDisconnectGmailAccount();
    setUseAnotherEmailAccount();
    setIsAnotherEmail(true);
    }
  };
  return (
    <>
      <label className="flex flex-col gap-2 text-shade40 text-xs mb-8">
        Platform
        <SignSelect
        setAnotherName={setAnotherEmailName}
        platforms={platforms} />
      </label>
      <Button
        onClick={handleisAnotherConnectionEmail}
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
