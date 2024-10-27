import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-bold">🍃Garden Haven🍃</h1>
      <nav className="space-x-4">
        <Link href="/" target="_parent" className="text-lg md:text-xl hover:text-yellow-400 transition duration-200">Home</Link>
        <Link href="/about" target="_parent" className="text-lg md:text-xl hover:text-yellow-400 transition duration-200">About</Link>
        <Link href="/contact" target="_parent" className="text-lg md:text-xl hover:text-yellow-400 transition duration-200">Contact</Link>
      </nav>
    </header>
  );
}
