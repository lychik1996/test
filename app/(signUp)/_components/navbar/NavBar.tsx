'use client';
import NavParams from './NavParams';
import NavSlider from './NavSlider';

export default function NavBar() {
  return (
    <div
      className=" min-h-full hidden xl:flex flex-col w-2/5 items-center justify-around"
      style={{
        background: `linear-gradient(-43.88deg, rgb(13, 50, 81) 0%,rgb(25, 71, 108) 103.055%)`,
      }}
    >
      <NavParams />
      <NavSlider />
    </div>
  );
}
