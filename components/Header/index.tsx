import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='px-2 pb-6 pt-4'>
      <Link href='/'>
        <Image src='/logo.svg' alt='Next.js' className='h-6 w-auto' width={348} height={133} priority />
      </Link>
    </header>
  );
}
