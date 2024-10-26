import { User, users } from '@/fakebase/users';
import { v4 as uuidv4 } from 'uuid';
export default async function POST(req: Request) {
  const { email, name, password } = await req.json();
  if (!email || !name || !password) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email/name/password' }),
      {
        status: 400,
      }
    );
  }
  try {
    const user: User = {
      email: email,
      name: name,
      password: password,
      isShopifyStore: null,
      isSupportEmail: null,
      id: uuidv4(),
    };
    const existUser = users.some((us) => us.id === user.id);
    if (existUser) {
      return new Response(
        JSON.stringify({ message: 'This user is already exist' }),
        {
          status: 400,
        }
      );
    }
    users.push(user);
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
}
