import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Check, ChevronLeft, ChevronRight } from '@mui/icons-material';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

const navArr = [
  {
    text: 'Welcome',
    pathName: '/sign',
  },
  {
    text: 'Connect your Shopify store',
    pathName: '/shopify',
  },
  {
    text: 'Connect your customer support email',
    pathName: '/supportEmail',
  },
  {
    text: 'Done',
    pathName: '/',
  },
];

type PathName = typeof navArr[number]['pathName'];



export default function NavParams() {
  const path = usePathname();
  const route = useRouter();
  const { createAccount, connectStore, connectGmailAccount } =
    useSignUserInfo();
  const handleClickBack = () => {
    if (path === '/shopify') {
      route.push('/sign');
    }
    if (path === '/supportEmail') {
      route.push('/shopify');
    }
  };
  const handleClicForward = () => {
    if (path === '/sign' && createAccount) {
      route.push('/shopify');
    }
    if (path === '/shopify' && connectStore) {
      route.push('/supportEmail');
    }
    if (path === '/supportEmail' && connectGmailAccount) {
      route.push('/');
    }
  };
  const checkConditions: Record<PathName, boolean> = {
    '/sign': createAccount,
    '/shopify': connectStore,
    '/supportEmail': connectGmailAccount,
    '/': false, 
  };
  return (
    <div className="flex flex-col w-[364px] h-[353px] pt-12">
      <div className="h-full flex flex-col gap-[43px] mb-[43px]">
        {navArr.map((item, i) =>{
        const isActive = path === item.pathName;
        const isCompleted = checkConditions[item.pathName];
        const isCurrentSignWithStore = path === '/sign' && connectStore && item.pathName === '/shopify';
        const isCurrentOrNextSignWithGmail = (path === '/sign' || path === '/shopify') && connectGmailAccount && item.pathName === '/supportEmail';
        return(
          <div key={i} className="flex flex-row items-center font-medium">
            <div className="flex flex-row items-end">
              <div
                className={clsx(
                  'rounded-full size-8 border-2 flex justify-center items-center relative z-10 box-border',
                  isActive
                    ? 'border-chadBlue0'
                    : 'border-darkBlue60',
                  isCompleted && 'bg-chadBlue0 border-none',
                  (isCurrentSignWithStore || isCurrentOrNextSignWithGmail) && 'bg-darkBlue60'
                )}
              >
                {isCompleted && <Check className="text-white size-4" />}

                {isActive && isCompleted && (
                    <div className="size-[42px] rounded-full border-2 border-chadBlue0 absolute z-10"></div>
                  )}
                <div
                  className={clsx(
                    'w-12 h-[1px] absolute -bottom-[1px] left-[15px] z-0',
                    isCompleted ? 'bg-chadBlue0' : 'bg-darkBlue60',
                    isActive && isCompleted && '-bottom-[5px]',
                    (isCurrentSignWithStore || isCurrentOrNextSignWithGmail) && 'bg-darkBlue60'
                  )}
                ></div>
              </div>
            </div>
            <p
              className={clsx(
                'text-darkBlue60 ml-5',
                path === item.pathName && 'text-white',
                item.pathName === '/sign' && createAccount && 'text-white',
                item.pathName === '/shopify' && connectStore && path !=='/sign' && 'text-white'

              )}
            >
              {item.text}
            </p>
          </div>
        )})}
      </div>
      <div
        className={clsx(
          ' flex-row justify-between cursor-pointer',
          createAccount ? 'flex' : 'hidden'
        )}
      >
        <div
          onClick={handleClickBack}
          className={clsx(
            'flex flex-row items-center gap-2 cursor-default text-darkBlue60  px-3 py-[6px] ',
            path === '/shopify' &&
              'text-darkBlue80 bg-darkBlue20 cursor-pointer active:scale-105',
            path === '/supportEmail' &&
              'text-darkBlue80 bg-darkBlue20 cursor-pointer active:scale-105'
          )}
        >
          <ChevronLeft className="size-5" /> Back
        </div>
        <div
          onClick={handleClicForward}
          className={clsx(
            'flex flex-row items-center gap-2 cursor-default text-darkBlue60 px-3 py-[6px]  rounded-[4px] ',
            path === '/sign' &&
              createAccount &&
              'text-darkBlue80 bg-darkBlue20 cursor-pointer active:scale-105',
            path === '/shopify' &&
              connectStore &&
              'text-darkBlue80 bg-darkBlue20 cursor-pointer active:scale-105',
            path === '/supportEmail' &&
              connectGmailAccount &&
              'text-darkBlue80 bg-darkBlue20 cursor-pointer active:scale-105'
          )}
        >
          Next <ChevronRight className="size-5" />
        </div>
      </div>
    </div>
  );
}
