import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import SelectLevel from '../pages/SelectLevel';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Home />} />
          <Route path='play' element={<SelectLevel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
