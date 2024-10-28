'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import SignReadyMobile from './SignReadyMobile';
import SignReadyDesktop from './SignReadyDesktop';

export default function AfterSign() {
  const { setCloseSign, signIn, signUp } = useSignUserInfo();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /android.+mobile|iphone|ipod/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkDevice();
  }, []);
  const shouldShow = signUp || (signIn && isMobile);

  return (
    <div className={clsx('w-full h-full absolute', !shouldShow && 'hidden')}>
      {isMobile ? (
        <SignReadyMobile setOnClose={setCloseSign} />
      ) : (
        <SignReadyDesktop setOnClose={setCloseSign} />
      )}
    </div>
  );
}
