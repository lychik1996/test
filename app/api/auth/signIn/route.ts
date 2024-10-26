import { users } from '@/fakebase/users';

export default async function Post(req: Request) {
  const { email, name, password, id } = await req.json();
  if (!email || !name || !password || !id) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email/name/password/id' }),
      {
        status: 400,
      }
    );
  }
  try {
    const user = users.find((us) => us.id === id);
    if (!user) {
      return new Response(JSON.stringify({ message: 'Failed to get user' }), {
        status: 400,
      });
    }
    const isEmail = user.email === email;
    if (!isEmail) {
      return new Response(
        JSON.stringify({ message: 'This email is not valid' }),
        {
          status: 400,
        }
      );
    }
    const isName = user.name === name;
    if (!isName) {
      return new Response(
        JSON.stringify({ message: 'This name is not valid' }),
        {
          status: 400,
        }
      );
    }
    const isPassword = user.password === password;
    if (!isPassword) {
      return new Response(
        JSON.stringify({ message: 'This password is not valid' }),
        {
          status: 400,
        }
      );
    }
    return new Response(
      JSON.stringify({ message: 'User signIn successfully', user }),
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
