import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginForm from '../forms/LoginForm';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
