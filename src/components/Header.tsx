import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className=" w-full py-5 flex items-center justify-between bg-gray-700 border-b border-gray-600 p-8 lg:justify-center">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
