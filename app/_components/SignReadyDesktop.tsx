'use client';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { useEffect } from 'react';
import { toast } from 'sonner';
export default function SignReadyDesktop({
  setOnClose,
}: {
  setOnClose: () => void;
}) {
  const { setCloseSign } = useSignUserInfo();
  const handleOnClose = () => {
    setCloseSign();
    setOnClose();
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
      const storeName = userInfo?.storeName && userInfo.storeName;
      const emailAccountName =
        userInfo?.emailAccountName && userInfo.emailAccountName;
      storeName &&
        storeName.length > 0 &&
        toast.success(`Shopify account connected ${storeName}`);
      emailAccountName &&
        emailAccountName.length > 0 &&
        toast.success(`Customer support account connected ${emailAccountName}`);
    }
  }, []);
  return (
    <div className="w-full h-full min-h-fit flex justify-center sm:items-center  bg-shade0/70">
      <div className=" w-full sm:w-[434px] sm:rounded-lg sm:shadow-signR px-[39px] pt-6 pb-[46px]  flex flex-col  bg-white ">
        <div className="w-full text-end">
          <CloseIcon onClick={handleOnClose} className="cursor-pointer" />
        </div>
        <h1 className="text-darkBlue20 text-base sm:text-xl font-semibold mb-2 font-eudoxus">
          You`re ready to go! 🚀
        </h1>
        <div className="flex flex-col gap-3 max-w-[356px]  text-shade40 text-sm mb-4">
          <p>
            A fully loaded self-service portal is now ready to deploy on your
            Shopify store.
          </p>
          <p>
            We`ve programmed it to follow industry best practices for shipping,
            return & exchange, and payment policy.
          </p>
          <p>
            You can customize these settings to fit your store policy anytime.
          </p>
          <p>
            Lastly,{' '}
            <span className="font-semibold">
              nothing is live until you hit “Go Live”!
            </span>
          </p>
        </div>
        <Button
          onClick={handleOnClose}
          variant="contained"
          disableElevation
          className="bg-blue-400 normal-case rounded-lg h-[43px] w-full"
        >
          Start customizing
        </Button>
      </div>
    </div>
  );
}
