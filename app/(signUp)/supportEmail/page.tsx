'use client';
import SignHeader from '@/components/SignHeader';

import SupportEmailUse from './_components/SupportEmailUse';
import { useEffect, useState } from 'react';
import SupportEmailDontUse from './_components/SupportEmailDontUse';
import SignResponse from '@/components/SignResponse';
import { useRouter } from 'next/navigation';
import { useSignUserInfo } from '@/store/use-SignUserInfo';

export default function SupportEmail() {
  const [isGmailUse, setIsGmailUse] = useState(true);
  const { userInfo,setAddStoreName,connectGmailAccount,connectStore,setAlreadyVisitedConnectionStore } = useSignUserInfo();
  const [isAnotherEmail, setIsAnotherEmail] = useState(false);
  const router = useRouter();
  const [isNextHref, setIsNextHref] = useState(false);
  useEffect(() => {
    if (userInfo.email === '') {
      router.push('/sign');
    }
    if (connectGmailAccount) {
      setIsNextHref(true);
    }
    if(connectStore){
      setAlreadyVisitedConnectionStore()
    }
  }, [userInfo, router,setAddStoreName, connectGmailAccount,connectStore,setAlreadyVisitedConnectionStore]);

  const handleClickGmailUse = () => setIsGmailUse((prev) => !prev);
  
  if (isAnotherEmail) {
    return (
      <SignResponse
        text="Thank you for your interest in Chad! We`ll be hard at work building integrations to support your email client."
        href="/"
      />
    );
  }
  
  return (
    <div className="sm:w-[480px] px-10 pt-4 sm:py-16 sm:rounded-lg sm:shadow-signR bg-white">
      <SignHeader
        header={
          isGmailUse
            ? 'Connect your customer support email'
            : 'Don`t use Gmail?'
        }
        info={
          isGmailUse
            ? 'Allows Chad to send automated responses on your behalf from your usual support mailbox'
            : 'Chad Beta is currently only integrated with Gmail. We`ll send you an email when Chad becomes compatible with your support ticket platform.'
        }
        step={3}
        prevHref="shopify"
        {...isNextHref && {nextHref:'/'}}
      />
      {isGmailUse ? (
        <SupportEmailUse handleClickGmailUse={handleClickGmailUse} />
      ) : (
        <SupportEmailDontUse setIsAnotherEmail={setIsAnotherEmail} handleClickGmailUse={handleClickGmailUse} />
      )}
    </div>
  );
}
