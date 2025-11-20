import { Route, Routes } from 'react-router';

import { AboutCharacter, Main } from './pages';
import { PageLayout } from './shared/components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<PageLayout />}
      >
        <Route
          index
          element={<Main />}
        />
        <Route
          path='/about'
          element={<AboutCharacter />}
        />
      </Route>
    </Routes>
  );
};
