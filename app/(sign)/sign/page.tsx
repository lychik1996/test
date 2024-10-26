'use client';

import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';

import SignHeader from '@/components/SignHeader';

const textSxParams = {
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
};

export default function Sign() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="sm:w-[380px] md:w-[480px] px-10 pt-4 sm:py-16">
      <SignHeader
        header="Welcome to Chad"
        info="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
        step={1}
        nextHref='shopify'
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-6 mb-4"
      >
        <label className="flex flex-col text-shade40 text-xs font-medium gap-2">
          Email
          <TextField
            type="email"
            size="small"
            placeholder="megachad@trychad.com"
            required
            sx={textSxParams}
          />
        </label>
        <label className="flex flex-col text-shade40 text-xs font-medium gap-2">
          Your Name
          <TextField
            type="text"
            size="small"
            placeholder="Mega Chad"
            required
            sx={textSxParams}
          />
        </label>
        <label className="flex flex-col text-shade40 text-xs font-medium gap-2">
          Password
          <TextField
            type={showPassword ? 'text' : 'password'}
            size="small"
            placeholder="Enter password"
            required
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              },
            }}
            sx={textSxParams}
          />
        </label>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          className="bg-blue-400 normal-case rounded-lg h-[43px]"
        >
          {' '}
          Create account
        </Button>
      </form>
      <div className="text-shade40 text-xs flex items-center justify-center gap-1">
        Already have an account?{' '}
        <Link href="/sign" className="text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
}
