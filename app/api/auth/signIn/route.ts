import { prisma } from "@/lib/prisma";


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
    
    const user = await prisma.user.findUnique({
      where: { email: email }
    });
    
    if (!user) {
      return new Response(
        JSON.stringify({ message: "User with this email does not exist" }),
        {
          status: 404,
        }
      );
    }
    const isPassWord = user.password ===password;
    
    if (!isPassWord) {
      return new Response(
        JSON.stringify({ message: 'This password is not valid' }),
        {
          status: 400,
        }
      );
    };
    
    
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
