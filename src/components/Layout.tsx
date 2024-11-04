import { Link, useRouterState } from '@tanstack/react-router';
import EmailLink from './EmailLink';
import { useEffect, useState } from 'react';

type LayoutProps = {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouterState();
  const [attribVisible, setAttribVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAttribVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <>
      <div id='Layout' className={router.location.href.slice(1) || 'home'}>
        <header id='SiteHeader'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/street-photography'>Street Photography</Link><br className='display-under-620' />
                <Link to='/family-photos'>Family Photos</Link>
                {/* todo: add email form */}
                <EmailLink>Contact</EmailLink>
            </nav>
        </header>
        <main>
            {children}
        </main>
      </div>
      {!router.location.href.slice(1) && attribVisible && 
        <a href='https://vecteezy.com' target='_blank' id='Attribution' title='Background image downloaded from Vecteezy.com'>Vecteezy.com</a>}
    </>
  );
}