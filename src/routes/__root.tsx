import { createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from '../components/Layout';
import '../assets/main.css';

export const Route = createRootRoute({
  component: () => (
    <Root />
  ),
});


function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
