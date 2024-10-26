'use client';
import SignHeader from '@/components/SignHeader';

import SupportEmailUse from './_components/SupportEmailUse';
import { useState } from 'react';
import SupportEmailDontUse from './_components/SupportEmailDontUse';

export default function SupportEmail() {
  const [isGmailUse, setIsGmailUse] = useState(true);
  const handleClickGmailUse = () => setIsGmailUse((prev) => !prev);
  return (
    <div className="sm:w-[380px] md:w-[480px] px-10 pt-4 sm:py-16">
      <SignHeader
        header={
          isGmailUse
            ? 'Connect your customer support email'
            : 'Don’t use Gmail?'
        }
        info={
          isGmailUse
            ? 'Allows Chad to send automated responses on your behalf from your usual support mailbox'
            : 'Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform.'
        }
        step={3}
        prevHref="shopify"
      />
      {isGmailUse ? (
        <SupportEmailUse handleClick={handleClickGmailUse} />
      ) : (
        <SupportEmailDontUse handleClick={handleClickGmailUse} />
      )}
    </div>
  );
}
