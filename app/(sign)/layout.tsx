import NavBar from "./_components/navbar/NavBar"

export default function Layout({ children }: { children: React.ReactNode }){
 return(
    <div className="w-full h-full flex sm:items-center flex-row">
         <NavBar/>
         <div className="flex-1 flex justify-center sm:items-center">{children}</div>
    </div>
 )
}