import { AppRoutes } from '@/routes';
import { ErrorBoundary } from '@/shared/components';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <AppRoutes />
      </ErrorBoundary>
    </>
  );
}

export default App;
