
import { useDebounce } from '@/hooks/useDebounce';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'sonner';
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
export default function SignEmailInput({
  formData,
  setFormData,
  textSxParams,
  sign,
}: {
  formData: FormData;
  setFormData: Function;
  textSxParams: any;
  sign: 'signUp' | 'signIn';
}) {
  const validEmail = useDebounce(formData.email, 500);
  
  useEffect(() => {
    const checkEmail = async () => {
      await axios
        .post('/api/auth/checkEmail', { email: validEmail })
        .catch(() => toast.error('This email adress already exist'));
    };
    const isValidEmail = validEmail.includes('@') && validEmail.includes('.');
    if (sign === 'signUp' && isValidEmail) {
        checkEmail();
      }
  }, [validEmail,sign]);
  return (
    <label className="flex flex-col text-shade40 text-xs font-medium gap-2">
      Email
      <TextField
        type="email"
        size="small"
        placeholder="megachad@trychad.com"
        required
        sx={textSxParams}
        value={formData.email}
        onChange={(e) =>
          setFormData((prev: FormData) => ({ ...prev, email: e.target.value }))
        }
      />
    </label>
  );
}
