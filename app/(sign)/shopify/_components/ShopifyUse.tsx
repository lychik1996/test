import SignParamsShopifyEmail from "@/components/SignParamsShopifyEmail";
import { Button } from "@mui/material";
const arrParametrsShopify = [
    {
      header: 'Track orders and shipping',
      info: 'Global coverage with 600+ couriers supported',
    },
    {
      header: 'Manage orders',
      info: 'Allow customers to track, return, exchange, or report problems with their orders',
    },
    {
      header: 'Process returns and exchanges',
      info: 'Automatically checks your store policy and existing inventory before resolving or escalating each request',
    },
  ];
export default function ShopifyUse({handleClick}:{handleClick:()=>void}){
    return(
        <>
        <div className="flex flex-col gap-4 mb-8">
        {arrParametrsShopify.map((item, i) => (
          <SignParamsShopifyEmail
            header={item.header}
            key={i}
            info={item.info}
          />
        ))}
      </div>
      <Button
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case rounded-lg h-[43px] w-full mb-4"
      >
        Connect store
      </Button>
      <div className='w-full flex justify-center'>
        <div className ='text-shade40 text-xs text-center cursor-pointer' onClick={handleClick}>
        I don&apos;t use Shopify
        </div>
        
      </div>
      </>
    )
}