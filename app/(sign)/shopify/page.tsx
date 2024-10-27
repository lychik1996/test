'use client';
import SignHeader from '@/components/SignHeader';
import ShopifyUse from './_components/ShopifyUse';
import ShopifyDontUse from './_components/ShopifyDontUse';
import { useEffect, useState } from 'react';
import ShopifyConnected from './_components/ShopifyConnected';
import SignResponse from '@/components/SignResponse';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { useRouter } from 'next/navigation';

export default function Shopify() {
  const {connectStore,userInfo,anotherStore,alreadyVisitedConnectionStore,setDisconnectStore,setDisconnectAnotherStore,setClearAlreadyVisitedConnectionStore}=useSignUserInfo();
  const [isShopifyUse, setIsShopifyUse] = useState(true);
  const router = useRouter();

  useEffect(()=>{
    if(userInfo.email===""){
      router.push('/sign')
    }
  },[userInfo])
  const handleClickShopifyUse = () => {
    setIsShopifyUse((prev) => !prev);
    setDisconnectStore();
    setDisconnectAnotherStore();
    setClearAlreadyVisitedConnectionStore();
  }
  

  if(connectStore){
    return <ShopifyConnected 
    header={alreadyVisitedConnectionStore?`[STORE-${userInfo.name}] already connected`:'Store Connected'}
    text={!alreadyVisitedConnectionStore && `Chad is now able to manage customer support requests for [store- ${userInfo.name}].`}
    />
  }

  if(anotherStore && !connectStore){
    return <SignResponse
    text='Thank you for your interest in Chad! We`ll be hard at work building integrations to support your platform.'
    href='supportEmail'
    />
  }
  
  
  
  return (
    <div className="sm:w-[480px] px-10 pt-4 sm:py-16 rounded-lg shadow-signR bg-white" >
      <SignHeader
        header={
          isShopifyUse ? 'Connect your Shopify store' : 'Don`t use Shopify?'
        }
        info={
          isShopifyUse
            ? 'Installs the Chad widget in your Shopify store and sets it up to display your customers&apos; order information and self-serve options.'
            : 'Chad Beta is currently only available on Shopify. We`ll send you an email when Chad becomes available on your platform.'
        }
        step={2}
        prevHref="sign"
        nextHref="supportEmail"
      />
      {isShopifyUse?<ShopifyUse handleClickShopifyUse={handleClickShopifyUse}/> : <ShopifyDontUse handleClickShopifyUse={handleClickShopifyUse}/>}
      
    </div>
  );
}
