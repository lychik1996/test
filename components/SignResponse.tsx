import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignResponse(
    {
        text,
        href,
    }:{
        text:string
        href:string
    }
) {
  const router = useRouter();
  
  const handlePushHref = ()=>{
      router.push(`/${href}`)
  }
  return (
    <div className=" w-full sm:w-[479px] shadow-signR px-8 sm:pb-[126px] sm:pt-[91px] sm:px-[66px] flex flex-col items-center bg-white">
      <Image
        src="/signCheckMark.svg"
        width={160}
        height={160}
        alt="CheckMark"
      />
      <h1 className="text-darkBlue20 text-base sm:text-xl font-semibold mb-2 text-center ">
        Response received
      </h1>
      <p className="max-w-[347px] text-center text-shade40 text-sm mb-[13.5px]">
        {text}
      </p>
      <Button
        onClick={handlePushHref}
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case rounded-lg h-[43px] w-full mb-4"
      >
        Done
      </Button>
    </div>
  );
}
