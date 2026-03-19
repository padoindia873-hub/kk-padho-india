import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-12 py-5 bg-white shadow-sm">

      {/* Logo */}
     <div className="flex items-center gap-2">
  <div className="w-8 h-8 bg-green-600 rounded-md"></div>
  <span className="text-xl font-bold text-gray-900">KK PADHO INDIA</span>
</div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#">Scholarship</Link></li>
        <li><Link href="#">Events</Link></li>
        <li><Link href="#">About</Link></li>
         <li><Link href="/">Contact Us</Link></li>
        <li><Link href="#">Committee Members</Link></li>
        <li><Link href="#">Services</Link></li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4">

        

       <button className="px-5 py-2 bg-gray-200 border border-gray-300 rounded-lg text-black">
  Sign Up
</button>

        <button className="px-5 py-2 bg-green-600 text-white rounded-lg">
          Login
        </button>

      

      </div>
    </nav>
  );
}