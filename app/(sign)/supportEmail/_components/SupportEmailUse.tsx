import SignParamsShopifyEmail from '@/components/SignParamsShopifyEmail';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const arrParametrsShopify = [
  {
    header: 'Contextual responses',
    info: 'Custom responses to any support situation from “where’s my stuff?” to “I want a refund”',
  },
  {
    header: 'Reply from anywhere',
    info: 'Respond to your customers via email or Chad chat—it’s all saved in the same thread',
  },
  {
    header: 'Categorical inbox tags',
    info: 'Tags your emails by category so you know what to expect before even opening an email',
  },
];
export default function SupportEmailUse({handleClickGmailUse}:{handleClickGmailUse:()=>void}) {
  const {setAddEmailAccountName,userInfo, setConnectGmailAccount}=useSignUserInfo();
  const router = useRouter();
  const handleConnectGmailAccount = ()=>{
    setConnectGmailAccount();
    setAddEmailAccountName(userInfo.email);
    router.push('/');
  };
  
  return (
    <>
      <div className="flex flex-col gap-4 mb-8">
        {arrParametrsShopify.map((item, i) => (
          <SignParamsShopifyEmail
            header={item.header}
            key={i}
            info={item.info}
          />
        ))}
      </div>
      <Button
      onClick={handleConnectGmailAccount}
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case  h-[50px] w-full mb-4 relative text-sm"
      >
        <Image
          src="/googlelogo.svg"
          width={48}
          height={48}
          alt="Google logo"
          className="absolute left-[1px]"
        />
        Connect Gmail account
      </Button>
      <div className='w-full flex justify-center'>
        <div className ='text-shade40 text-xs text-center cursor-pointer' onClick={handleClickGmailUse}>
        I don`t use Gmail
        </div>
        
      </div>
    </>
  );
}
