import { prisma } from "@/lib/prisma";



export const POST=async(req: Request)=>{
  const {email} = await req.json();
  if (!email) {
    return new Response(
      JSON.stringify({ message: 'Failed to get email' }),
      {
        status: 400,
      }
    );
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: email }
    });
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