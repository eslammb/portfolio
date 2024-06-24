import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex flex-row w-full h-16 max-h-16 items-center justify-between'>
      <Image
        src='/logo.svg'
        alt='Eslam M. Bahgat Logo'
        width={60}
        height={60}
        priority
      />

      {/* <ul className='flex flex-row gap-2'>
        <li>
          <Link href={'./'}>Home</Link>
        </li>
        <li>
          <Link href={'./about'}>About</Link>
        </li>
        <li>
          <Link href={'./projects'}>Projects</Link>
        </li>
        <li>
          <Link href={'./experience'}>Experience</Link>
        </li>
        <li>
          <Link href={'./contact'}>Contact</Link>
        </li>
      </ul> */}
    </header>
  );
};

export default Header;
