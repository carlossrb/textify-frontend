import { useAuth } from 'hooks/useAuth';
import Login from 'pages/login';
import NotFoundPage from 'pages/notFound';
import Welcome from 'pages/welcome';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const maptRoutes = [
  { page: Welcome, auth: false, path: '/home' },
  { page: NotFoundPage, auth: false, path: '*' },
  { page: Login, auth: false, path: '/' },
];

const ProtectedRoute: React.FC<{ children: React.ReactNode; auth: boolean }> = ({
  auth,
  children,
}) => {
  return <>{auth ? children : <Navigate to='/' replace />}</>;
};

export default function AppRoutes() {
  const { signed } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {maptRoutes.map(({ page: Page, auth, path }, i) => {
          const condition =
            (signed && auth) || (signed && !auth) || (!signed && !auth) || path === '/';
          return (
            <Route
              path={path}
              key={i}
              element={
                <ProtectedRoute auth={condition}>
                  <Page />
                </ProtectedRoute>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
// Regras
// ta logado e pagina precisa logar => pagina
// ta logado e pagina nao precisa logar => Pagina
// ta deslogado e pagina precisa logar => login
// ta deslogado e pagina nao precisa logar => pagina
