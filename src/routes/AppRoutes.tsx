import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PlayLevel from '../pages/PlayLevel';
import SelectLevel from '../pages/SelectLevel';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='play' element={<SelectLevel />} />
          <Route path='play/:levelId' element={<PlayLevel />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
