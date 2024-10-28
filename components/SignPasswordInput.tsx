import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
type FormDataWithName = {
    email: string;
    password: string;
    name: string; 
};

type FormDataWithoutName = {
    email: string;
    password: string;
};

type FormData = FormDataWithName | FormDataWithoutName;
export default function SignPasswordInput(
    {
        formData,
        setFormData,
        textSxParams,
    }:{
        formData:FormData,
        setFormData:Function,
        textSxParams:any
    }
){
    const [showPassword,setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return(
        <label className="flex flex-col text-shade40 text-xs font-medium gap-2">
          Password
          <TextField
            type={showPassword ? 'text' : 'password'}
            size="small"
            placeholder="Enter password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData((prev:FormData) => ({ ...prev, password: e.target.value }))
            }
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
    )
}