import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductsRouter } from '../../products/routes/ProductsRouter';
import { StationsRouter } from '../../stations/routes/StationsRouter';
import { NavBar } from '../components/NavBar';
import { DashboardPage } from '../pages/DashboardPage';

export const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="products/*" element={<ProductsRouter />} />
          <Route path="stations/*" element={<StationsRouter />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};
