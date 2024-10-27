import NavBar from "./_components/navbar/NavBar"

export default function Layout({ children }: { children: React.ReactNode }){
 return(
    <div className="w-full h-full flex flex-row">
         <NavBar/>
         <div className="flex-1 flex h-full sm:bg-[url('/doodle.svg')] bg-cover bg-no-repeat bg-center justify-center sm:items-center">{children}</div>
    </div>
 )
}