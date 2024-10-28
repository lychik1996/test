import path from 'path';
import fs from 'fs';
import { User } from '@/fakebase/inteface';
const usersFilePath = path.join(process.cwd(), 'fakebase', 'users.json');

export const POST=async(req: Request)=>{
  const { email} = await req.json();
  
  if (!email) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email' }),
      {
        status: 400,
      }
    );
  }
  try {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    const users: User[] = JSON.parse(data);
    const user = users.some((us) => us.email === email);
    
    if(user){
        return new Response(JSON.stringify({message:'This email already exist'}),{status:400})
    }
    return new Response(
      JSON.stringify({ message: 'This email is valid',email}),
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