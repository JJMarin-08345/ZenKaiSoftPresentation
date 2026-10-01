import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './app/routes/router';
import { ThemeInitializer } from './app/components/ThemeInitializer';

const root = document.getElementById('root')!;
const app = (
  <>
    <ThemeInitializer />
    <RouterProvider router={routes} />
  </>
);

if (root.innerHTML.trim()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
