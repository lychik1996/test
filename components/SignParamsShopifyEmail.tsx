
import { Check } from "@mui/icons-material";

export default function SignParamsShopifyEmail({header, info}:{header:string, info:string}){
    return(
        <div  className='flex flex-row gap-2'>
                <Check className='text-green-600 size-6'/>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-darkBlue20 text-sm font-medium'>{header}</h3>
                    <p className='text-shade40 text-xs'>{info}</p>
                </div>
            </div>
    )
}