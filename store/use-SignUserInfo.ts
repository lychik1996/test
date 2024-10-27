import { create } from "zustand";

interface useSignUserInfoProps {
  userInfo:{
    email:string,
    name:string,
    password: string,
  },
  setUserInfo: (newUserInfo: { email: string; name: string; password: string;}) => void;

  createAccount:boolean
  setCreateAccount:()=>void;
  setChangesCreateAccount:()=>void;

  alreadyVisitedSign:boolean;
  setAlreadyVisitedSign:()=>void;
  setClearAlreadyVisitedSign:()=>void;

  connectStore:boolean;
  storeName:string;
  setConnectStore:()=>void;
  setDisconnectStore:()=>void;
  setAddStoreName:(newStoreName:string)=>void;
  setRemoveStoreName:()=>void;
  
  
  alreadyVisitedConnectionStore:boolean;
  setAlreadyVisitedConnectionStore:()=>void;
  setClearAlreadyVisitedConnectionStore:()=>void;


  connectGmailAccount:boolean;
  emailAccountName:string;
  setConnectGmailAccount:()=>void;
  setDisconnectGmailAccount:()=>void;
  setAddEmailAccountName:(newAccountName:string)=>void;
  setRemoveEmailAccountName:()=>void;
  
}

export const useSignUserInfo = create<useSignUserInfoProps>((set) => ({
  userInfo:{
    email:'',
    name:'',
    password:'',
  },
  setUserInfo:(newUserInfo)=>set({userInfo:newUserInfo}),

  createAccount:false,
  setCreateAccount:()=>set({createAccount:true}),
  setChangesCreateAccount:()=>set({createAccount:false}),

  alreadyVisitedSign:false,
  setAlreadyVisitedSign:()=>set({alreadyVisitedSign:true}),
  setClearAlreadyVisitedSign:()=>set({alreadyVisitedSign:false}),

  connectStore:false,
  storeName:'',
  setConnectStore:()=>set({connectStore:true}),
  setDisconnectStore:()=>set({connectStore:false}),
  setAddStoreName:(newStoreName)=>set({storeName:newStoreName}),
  setRemoveStoreName:()=>set({storeName:''}),
  

  alreadyVisitedConnectionStore:false,
  setAlreadyVisitedConnectionStore:()=>set({alreadyVisitedConnectionStore:true}),
  setClearAlreadyVisitedConnectionStore:()=>set({alreadyVisitedConnectionStore:false}),


  connectGmailAccount:false,
  emailAccountName:'',
  setConnectGmailAccount:()=>set({connectGmailAccount:true}),
  setDisconnectGmailAccount:()=>set({connectGmailAccount:false}),
  setAddEmailAccountName:(newEmailAccountName)=>set({emailAccountName:newEmailAccountName}),
  setRemoveEmailAccountName:()=>set({emailAccountName:''})
}));