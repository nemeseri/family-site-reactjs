import { Link, useRouterState } from "@tanstack/react-router";

type LayoutProps = {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouterState();

  return (
    <div id="Layout" className={router.location.href.slice(1) || 'home'}>
      <header id="SiteHeader">
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/street-photography">Street Photography</Link>
              <Link to="/family-photos">Family Photos</Link>
              <Link to="/contact">Contact</Link>
          </nav>
      </header>
      <main>
          {children}
      </main>
      {/*<footer id="SiteFooter">
          
      </footer>*/}
    </div>
  );
}