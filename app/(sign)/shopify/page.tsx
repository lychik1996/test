'use client';
import SignHeader from '@/components/SignHeader';
import ShopifyUse from './_components/ShopifyUse';
import ShopifyDontUse from './_components/ShopifyDontUse';
import { useState } from 'react';

export default function Shopify() {
  const [isShopifyUse, setIsShopifyUse] = useState(true);
  const handleClickShopifyUse = () => setIsShopifyUse((prev) => !prev);
  return (
    <div className="sm:w-[380px] md:w-[480px] px-10 pt-4 sm:py-16">
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
      {isShopifyUse?<ShopifyUse handleClick={handleClickShopifyUse}/> : <ShopifyDontUse handleClick={handleClickShopifyUse}/>}
      
    </div>
  );
}
