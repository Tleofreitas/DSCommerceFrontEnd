import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ClientHome from './routes/ClientHome';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import Cart from './routes/ClientHome/Cart';
import Login from './routes/ClientHome/Login';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import {history} from './utils/history';

export default function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path='/admin/' element={<Admin />}>
          <Route index element={<AdminHome />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}