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
  return (
    <div className="flex flex-col w-[364px] h-[353px] mb-[172px]">
      <div className="h-full flex flex-col gap-[43px] mb-[43px]">
        {navArr.map((item, i) => (
          <div key={i} className="flex flex-row items-center font-medium">
            <div className="flex flex-row items-end">
              <div
                className={clsx(
                  'rounded-full size-8 border-2 flex justify-center items-center z-10 relative',
                  path === item.pathName
                    ? 'border-chadBlue0'
                    : 'border-darkBlue60',
                  item.pathName === '/sign' &&
                    createAccount &&
                    'bg-chadBlue0 border-none'
                )}
              >
                {item.pathName === '/sign' && createAccount && (
                  <Check className={clsx('text-white size-4')} />
                )}
                {item.pathName === path &&
                  item.pathName === '/sign' &&
                  createAccount && (
                    <div className="size-[42px] rounded-full border-2 border-chadBlue0 absolute"></div>
                  )}
              </div>
              <div
                className={clsx(
                  'w-12 h-[2px] -ml-5 ',
                  item.pathName === '/sign' && createAccount
                    ? 'bg-chadBlue0'
                    : 'bg-darkBlue60'
                )}
              ></div>
            </div>
            <p
              className={clsx(
                'text-darkBlue60 -ml-5',
                path === item.pathName && 'text-white',
                item.pathName === '/sign' && createAccount && 'text-white'
              )}
            >
              {item.text}
            </p>
          </div>
        ))}
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
