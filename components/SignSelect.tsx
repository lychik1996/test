
import { useSignUserInfo } from '@/store/use-SignUserInfo';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';


export default function SignSelect({
  platforms,
  setAnotherName,
}:{
  platforms:string[],
  setAnotherName:Function
}) {
  const [platform, setPlatform] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAnotherName(event.target.value);
    setPlatform(event.target.value);
  };
  return (
    <div>
        <Select
          value={platform}
          onChange={handleChange}
          displayEmpty
          className='w-full'
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            backgroundColor: 'rgb(248, 249, 252)',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            color: platform === '' ? 'rgb(195, 202, 213)' : 'inherit',
          }}
        >
           <MenuItem value="" disabled sx={{ display: 'none' }}>
            Select platform
          </MenuItem>
          {platforms.map((platform, i)=>(
            <MenuItem key={i} value={platform}>{platform}</MenuItem>
          ))}
        </Select>
    </div>
  );
}