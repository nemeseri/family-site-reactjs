import { createRootRoute, Outlet, useMatches } from '@tanstack/react-router';
import { useEffect, ReactNode } from 'react';
import Layout from '../components/Layout';
import '../assets/main.css';

const TITLE = 'Andras Nemeseri - Web Developer';

export const Route = createRootRoute({
  meta: () => [
    {
      title: TITLE,
    },
  ],
  component: () => (
    <Root />
  ),
});


function Root() {
  return (
    <Meta>
      <Layout>
        <Outlet />
      </Layout>
    </Meta>
  );
}


function Meta({ children }: { children: ReactNode }) {
  const matches = useMatches();
  const meta = matches.at(-1)?.meta?.find((meta) => meta.title);

  useEffect(() => {
    document.title = [meta?.title, TITLE].filter(Boolean).join(' · ');
  }, [meta]);

  return children;
}
