import NavParams from "./NavParams";
import NavSlider from "./NavSlider";

export default function NavBar(){
    return(
        <div className=" min-h-screen hidden sm:flex px-2 lg:px-0 flex-col w-2/5 sm:justify-center lg:justify-around items-center  pt-24" style={{background: `linear-gradient(-43.88deg, rgb(13, 50, 81) 0%,rgb(25, 71, 108) 103.055%)`}}>
            <NavParams/>
            <NavSlider/>
        </div>
    )
}