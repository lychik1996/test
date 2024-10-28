import { User } from '@/fakebase/interface';
import path from 'path';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const usersFilePath = path.join(process.cwd(), 'fakebase', 'users.json');
export const POST = async (req: Request) => {
  const {
    email,
    name,
    password,
    storeName,
    emailAccountName,
    connectStore,
    connectGmailAccount,
  } = await req.json();
  
  if (!email || !name || !password) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email/name/password' }),
      {
        status: 400,
      }
    );
  }
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8'); 
    const users: User[] = JSON.parse(data);
    const user: User = {
      email: email,
      name: name,
      password: password,
      connectStore: connectStore,
      storeName: storeName,
      connectGmailAccount: connectGmailAccount,
      emailAccountName: emailAccountName,
      id: uuidv4(),
    };
    
    users.push(user);
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
    
    return new Response(
      JSON.stringify({ message: 'User registered successfully', user }),
      {
        status: 201,
      }
    );
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
};
