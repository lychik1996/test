import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ShopifyConnected({
    header,
    text
}:{
    header:string,
    text:string | boolean,
}) {
  const {setDisconnectStore, setAlreadyVisitedConnectionStore,setClearAlreadyVisitedConnectionStore,setDisconnectAnotherStore} = useSignUserInfo();
  const router = useRouter();
  const handleDisconnectStore = ()=>{
    setClearAlreadyVisitedConnectionStore();
    setDisconnectStore();
    setDisconnectAnotherStore();
  }
  
  const handlePushSupportEmail=()=>{
    setAlreadyVisitedConnectionStore();
    router.push('/supportEmail');
  }
  
  return (
    <div className=" w-full sm:w-[479px] shadow-signR px-8 pt-[108px] sm:py-[126px] sm:px-[66px] flex flex-col items-center bg-white">
      <div className="relative size-fit">
        <Image
          src="/shopifyConnected.svg"
          className="relative"
          width={80}
          height={80}
          alt="Shopify"
        />
        <Image
          src="/shopifyConnectedCheck.svg"
          className="absolute top-0 right-0"
          width={24}
          height={24}
          alt="ShopifyCheck"
        />
      </div>
      <h1 className={clsx(
        'text-darkBlue20 text-base sm:text-xl font-semibold mb-2  text-center mt-8',
        !text && 'sm:max-w-[190px]'
      )}>{header}</h1>
       {text && <p className='max-w-[347px] text-center text-shade40 text-sm mb-[13.5px]'>{text}</p>}
      <Button
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case rounded-lg h-[43px] w-full mb-4"
        onClick={handlePushSupportEmail}
      >
        Continue
      </Button>
      <div className="text-shade40 text-xs flex items-center justify-center gap-1">
        Not your store?{' '}
        <div className="text-chadBlue cursor-pointer" onClick={handleDisconnectStore}>
          Connecting another one
        </div>
      </div>
    </div>
  );
}
