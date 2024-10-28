
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function SignHeader({
  header,
  info,
  step,
  prevHref,
  nextHref,
}: {
  header: string;
  info: string;
  step: number;
  prevHref?: string;
  nextHref?: string;
}) {
  return (
    <>
      <div className="flex flex-row items-center gap-1 mb-6">
        <Image src="chadlogo.svg" width={28.4} height={23.4} alt="Chad Logo" />
        <h1 className="text-darkBlue20 font-eudoxus text-2xl font-bold">
          Chad
        </h1>
      </div>
      <div className="flex flex-col sm:hidden gap-2 mb-8">
        <p>Step {step} of 4</p>
        <div className="h-2 w-full rounded border-darkBlue95 border">
          <div
            className=" bg-darkBlue95 h-2 rounded"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
        <div className="flex flex-row justify-between">
          {prevHref ? (
            <Link
              href={`/${prevHref}`}
              className={clsx(
                'flex flex-row items-center gap-1 text-xs text-shade40 cursor-pointer'
              )}
            >
              <ChevronLeft className="size-4" /> Prev
            </Link>
          ) : (
            <span className="flex flex-row items-center gap-1 text-xs text-shade80 cursor-default">
              <ChevronLeft className="size-4" /> Prev
            </span>
          )}
          {nextHref ? (
            <Link
              href={`/${nextHref}`}
              className={clsx(
                'flex flex-row items-center gap-1 text-xs text-shade40 cursor-pointer'
              )}
            >
              Next <ChevronRight className="size-4" />
            </Link>
          ) : (
            <span className="flex flex-row items-center gap-1 text-xs text-shade80 cursor-default">
              Next <ChevronRight className="size-4" />
            </span>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-darkBlue20 text-2xl font-semibold mb-4">
          {header}
        </h2>
        <p className="text-shade40 text-sm mb-8">{info}</p>
      </div>
    </>
  );
}
