import { Route, Routes } from 'react-router';
import { PageLayout } from './components/PageLayout/PageLayuot.tsx';
import { AboutCharacter } from './pages/AboutCharacter/AboutCharacter.tsx';
import { Main } from './pages/Main/Main.tsx';

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
