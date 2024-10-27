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
  const {
    connectStore,
    userInfo,
    storeName,
    alreadyVisitedConnectionStore
  } = useSignUserInfo();
  const [isShopifyUse, setIsShopifyUse] = useState(true);
  const [isAnotherStore, setIsAnotherStore] = useState(false);
  const [isConnectedStore, setIsConnectedStore] = useState(false);
  const [isNextHref, setIsNextHref] = useState(false);
  const [newStoreName, setNewStoreName] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (userInfo.email === '') {
      router.push('/sign');
    }
    if (connectStore) {
      setIsNextHref(true);
    }
  }, [userInfo, router, connectStore]);
  
  const handleClickShopifyUse = () => {
    setIsShopifyUse((prev) => !prev);
  };

  if (isAnotherStore) {
    return (
      <SignResponse
        text="Thank you for your interest in Chad! We`ll be hard at work building integrations to support your platform."
        href="supportEmail"
      />
    );
  }
  if (isConnectedStore) {
    return (
      <ShopifyConnected
        header={
          connectStore &&  alreadyVisitedConnectionStore
            ? `[STORE-${storeName}] already connected`
            : 'Store Connected'
        }
        setIsConnectedStore={setIsConnectedStore}
        text={
          connectStore && !alreadyVisitedConnectionStore &&
          `Chad is now able to manage customer support requests for [store- ${newStoreName}].`
        }
      />
    );
  }

  return (
    <div className="sm:w-[480px] px-10 pt-4 sm:py-16 sm:rounded-lg sm:shadow-signR bg-white">
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
        {...(isNextHref && { nextHref: 'supportEmail' })}
      />
      {isShopifyUse ? (
        <ShopifyUse
          setNewStoreName={setNewStoreName}
          setIsConnectedStore={setIsConnectedStore}
          handleClickShopifyUse={handleClickShopifyUse}
        />
      ) : (
        <ShopifyDontUse
          setIsAnotherStore={setIsAnotherStore}
          handleClickShopifyUse={handleClickShopifyUse}
        />
      )}
    </div>
  );
}
