import path from 'path';
import { promises as fs } from 'fs';
import { User } from '@/fakebase/interface';


const usersFilePath = path.join(process.cwd(), 'fakebase', 'users.json');
export const POST=async(req: Request)=>{
  const { email, password} = await req.json();
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email/password' }),
      {
        status: 400,
      }
    );
  }
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    const users: User[] = JSON.parse(data);
    const isEmail = users.find((us) => us.email === email);
    if (!isEmail) {
      return new Response(
        JSON.stringify({ message: 'Email is not valid' }),
        {
          status: 400,
        }
      );
    }
    const isPassword = users.find((us)=>us.email ===email && us.password ===password)
    if (!isPassword) {
      return new Response(
        JSON.stringify({ message: 'This password is not valid' }),
        {
          status: 400,
        }
      );
    };
    const user = users.find((us)=>us.email===email);
    
    return new Response(
      JSON.stringify({ message: 'User signIn successfully',user}),
      {
        status: 201,
      }
    );
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
}
