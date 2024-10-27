'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const arrSlider = [
  {
    text: 'Acquiring a new customer is 5x more costly than making an unhappycustomer happy',
    header: '5x',
  },
  {
    text: 'Acquiring a new customer is 5x more costly than making an unhappycustomer happy',
    header: '5x',
  },
  {
    text: 'Acquiring a new customer is 5x more costly than making an unhappycustomer happy',
    header: '5x',
  },
  {
    text: 'Acquiring a new customer is 5x more costly than making an unhappycustomer happy',
    header: '5x',
  },
  {
    text: 'Acquiring a new customer is 5x more costly than making an unhappycustomer happy',
    header: '5x',
  },
];
export default function NavSlider() {
  const [count, setCount] = useState(0);
  const [skipAnimation, setSkipAnimation] = useState(false);
  useEffect(() => {
    let intervalTime = count === arrSlider.length ? 700 : 3000;

    const timer = setTimeout(() => {
      setSkipAnimation(false);
      setCount((prevCount) => {
        if (prevCount === arrSlider.length) {
          setSkipAnimation(true);
          return 0;
        }
        return prevCount + 1;
      });
    }, intervalTime);

    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div className="w-[364px] flex flex-col items-center gap-4">
      <div className="w-full overflow-hidden relative h-[92px]">
        <div
          className={clsx(
            'flex flex-row absolute gap-2 ',
            !skipAnimation && 'transition-all duration-700 ease-in-out'
          )}
          style={{ transform: `translateX(${-count * 372}px)` }}
        >
          {[...arrSlider, arrSlider[0]].map((item, i) => (
            <div
              key={i}
              className="flex flex-row p-4 items-center gap-4 rounded-lg bg-darkBlue20 w-[364px]"
            >
              <h3 className="font-eudoxus text-[32px] font-bold text-chadBlue30">
                {item.header}
              </h3>
              <p className="text-sm text-chadBlue30">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-around gap-3">
        {arrSlider.map((_, i) => (
          <div
            key={i}
            className={clsx(
              'size-2 rounded-full',
              count % arrSlider.length === i ? 'bg-chadBlue30' : 'bg-darkBlue20'
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
