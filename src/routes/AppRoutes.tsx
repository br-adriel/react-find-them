import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PlayLevel from '../pages/PlayLevel';
import Ranking from '../pages/Ranking';
import SelectLevel from '../pages/SelectLevel';

const AppRoutes = () => {
  return (
    <BrowserRouter basename='/react-find-them/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='play' element={<SelectLevel />} />
          <Route path='play/:levelId' element={<PlayLevel />} />
          <Route path='ranking' element={<Navigate to='/ranking/all' />} />
          <Route path='ranking/:levelId' element={<Ranking />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
