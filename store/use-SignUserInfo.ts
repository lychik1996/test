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
  
  setConnectStore:()=>void;
  setDisconnectStore:()=>void;
  
  
  alreadyVisitedConnectionStore:boolean;
  setAlreadyVisitedConnectionStore:()=>void;
  setClearAlreadyVisitedConnectionStore:()=>void;


  connectGmailAccount:boolean;
  setConnectGmailAccount:()=>void;
  setDisconnectGmailAccount:()=>void;
  
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
  
  setConnectStore:()=>set({connectStore:true}),
  setDisconnectStore:()=>set({connectStore:false}),
  

  alreadyVisitedConnectionStore:false,
  setAlreadyVisitedConnectionStore:()=>set({alreadyVisitedConnectionStore:true}),
  setClearAlreadyVisitedConnectionStore:()=>set({alreadyVisitedConnectionStore:false}),


  connectGmailAccount:false,
  anotherEmailAccount:false,
  setConnectGmailAccount:()=>set({connectGmailAccount:true}),
  setDisconnectGmailAccount:()=>set({connectGmailAccount:false}),
}));