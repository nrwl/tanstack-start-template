import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultNotFoundComponent: () => (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>404 - Page not found</h2>
        <a href="/">Go home</a>
      </div>
    ),
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
