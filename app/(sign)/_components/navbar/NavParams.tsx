import { Check, ChevronLeft, ChevronRight } from '@mui/icons-material';
import clsx from 'clsx';

const navArr = [
  {
    text: 'Welcome',
  },
  {
    text: 'Connect your Shopify store',
  },
  {
    text: 'Connect your customer support email',
  },
  {
    text: 'Done',
  },
];

export default function NavParams() {
  return (
    <div className="flex flex-col w-[364px] h-[353px] mb-[172px]">
      <div className="h-full flex flex-col gap-[43px] mb-[43px]">
        {navArr.map((item, i) => (
          <div key={i} className="flex flex-row items-center font-medium ">
            <div className='flex flex-row items-end'>
              <div
                className={clsx(
                  'rounded-full size-[42px] border-chadBlue0 border-2 flex justify-center items-center z-10'
                )}
              >
                <div className={clsx('flex items-center justify-center size-8 rounded-full bg-chadBlue0')}>
                    <Check className={clsx(
                        "text-white size-4" 
                    )}/>
                </div>
              </div>
              <div className='w-12 h-[2px] bg-darkBlue60 -ml-5 '></div>
            </div>
            <p className={clsx("text-white -ml-5")}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-row justify-between cursor-pointer'>
        <div className={clsx(
            'flex flex-row items-center gap-2 text-darkBlue60 cursor-pointer px-3 py-[6px]'
        )}>
            <ChevronLeft className="size-5"/> Back
        </div>
        <div className={clsx(
            'flex flex-row items-center gap-2 text-darkBlue80 cursor-pointer px-3 py-[6px] bg-darkBlue20 rounded-[4px]'
        )}>
             Next <ChevronRight className="size-5"/>
        </div>
      </div>
    </div>
  );
}
