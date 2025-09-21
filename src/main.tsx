import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './app/routes/router';
import { useEffect } from 'react';

const MainApp = () => {
  useEffect(() => {
    // leer preferencia guardada
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <MainApp />
)
