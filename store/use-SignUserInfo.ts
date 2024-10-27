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
  anotherStore:boolean;
  setConnectStore:()=>void;
  setDisconnectStore:()=>void;
  setConnectAnotherStore:()=>void;
  setDisconnectAnotherStore:()=>void;
  
  alreadyVisitedConnectionStore:boolean;
  setAlreadyVisitedConnectionStore:()=>void;
  setClearAlreadyVisitedConnectionStore:()=>void;


  connectGmailAccount:boolean;
  anotherEmailAccount:boolean;
  setConnectGmailAccount:()=>void;
  setDisconnectGmailAccount:()=>void;
  setConnectAnotherEmailAcoount:()=>void;
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
  anotherStore:false,
  setConnectStore:()=>set({connectStore:true}),
  setDisconnectStore:()=>set({connectStore:false}),
  setConnectAnotherStore:()=>set({anotherStore:true}),
  setDisconnectAnotherStore:()=>set({anotherStore:false}),

  alreadyVisitedConnectionStore:false,
  setAlreadyVisitedConnectionStore:()=>set({alreadyVisitedConnectionStore:true}),
  setClearAlreadyVisitedConnectionStore:()=>set({alreadyVisitedConnectionStore:false}),


  connectGmailAccount:false,
  anotherEmailAccount:false,
  setConnectGmailAccount:()=>set({connectGmailAccount:true}),
  setDisconnectGmailAccount:()=>set({connectGmailAccount:false}),
  setConnectAnotherEmailAcoount:()=>set({anotherEmailAccount:true}),
}));