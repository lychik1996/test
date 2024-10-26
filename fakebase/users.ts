interface User {
    name:string;
    email:string;
    password:string;
    isShopifyStore:null| boolean;
    isSupportEmail: null| boolean;
}
export const users:User[] = [];