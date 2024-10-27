import SignSelect from '@/components/SignSelect';
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import { Button } from '@mui/material';
const platforms = ['one', 'two', 'three', 'four', 'five'];
export default function ShopifyDontUse({
  handleClickShopifyUse,
  setIsAnotherStore
}
  :{
    handleClickShopifyUse:()=>void,
    setIsAnotherStore:Function
  },
    
  ) {
  const {setAlreadyVisitedConnectionStore,setConnectStore}=useSignUserInfo();
  const handleSubmitAnotherStore=()=>{
    setConnectStore();
    setIsAnotherStore(true);
    setAlreadyVisitedConnectionStore();
  }
  return (
    <>
      <label className='flex flex-col gap-2 text-shade40 text-xs mb-8'>
        Platform
        <SignSelect platforms={platforms} />
      </label>
      <Button
        onClick={handleSubmitAnotherStore}
        variant="contained"
        disableElevation
        className="bg-blue-400 normal-case rounded-lg h-[43px] w-full mb-4"
      >
        Submit
      </Button>
      <div className="w-full text-shade40 text-xs flex justify-center gap-1">
            Actually use Shopify? <span className="text-blue-500 cursor-pointer" onClick={handleClickShopifyUse}>Connect</span>
      </div>
    </>
  );
}
