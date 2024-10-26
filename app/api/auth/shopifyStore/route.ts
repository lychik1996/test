import { users } from '@/fakebase/users';

export default async function Post(req: Request) {
  const { id, isShopifyStore } = await req.json();
  if (!id || isShopifyStore === null) {
    return new Response(
      JSON.stringify({ message: 'Failed to get id/isShopifyStore' }),
      {
        status: 400,
      }
    );
  }
  try {
    const userIndex = users.findIndex((us) => us.id === id);

    if (userIndex === -1) {
      return new Response(JSON.stringify({ message: 'Failed to get user' }), {
        status: 404,
      });
    }

    users[userIndex].isShopifyStore = isShopifyStore;

    return new Response(JSON.stringify(users[userIndex].isShopifyStore), {
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
}
