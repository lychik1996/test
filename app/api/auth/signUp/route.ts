
import { prisma } from '@/lib/prisma';


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
    const existingUser = await prisma.user.findUnique({
      where: { email:email },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: 'User with this email already exists' }),
        { status: 409 }
      );
    }
    const newUser = await prisma.user.create({
      data:{
        email,
        name,
        password,
        connectStore,
        storeName,
        connectGmailAccount,
        emailAccountName
      }
    })
     
    return new Response(
      JSON.stringify({ message: 'User registered successfully', newUser }),
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
