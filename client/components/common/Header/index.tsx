import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '@/constants/links';

const Header = () => {
  const navLinksContent = (
    navLinks.map((navLink) => {
      return (
        <li key={navLink.href}>
          <Link className="nav-link" href={navLink.href}>{navLink.name}</Link>
        </li>
      );
    })
  );

  return (
    <header className="py-5 border-b border-alpha-black shadow-header text-primary">
      <div className="center-container mx-auto">
        <div className="flex items-center justify-between">
          <Link className="group" href="/">
            <Image className="h-12 w-12 group-hover:drop-shadow-logo transition-all" src="/images/logo.svg" alt="Logo" width={48} height={48} />
          </Link>
          <nav>
            <ul className="flex items-center justify-end gap-2">
              {navLinksContent}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header;
