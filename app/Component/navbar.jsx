import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/Image2.jpg';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="text-white ml-3 text-lg">My Next.js App</span>
      </div>
      <div>
        <Link href="/" className="text-white mx-2">
          Home
        </Link>
        <Link href="/About" className="text-white mx-2">
          About
        </Link>
        <Link href="/Contact" className="text-white mx-2">
          Contact
        </Link>
      </div>
    </nav>
  );
}