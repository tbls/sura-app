import { Navigate, Route, Routes } from 'react-router-dom';
import { CartPage } from '../pages/CartPage';

export const CartRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CartPage />} />
      <Route path="/*" element={<Navigate to="/cart" />} />
    </Routes>
  );
};
