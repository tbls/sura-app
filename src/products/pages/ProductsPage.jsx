import { useSelector } from 'react-redux';
import { ProductsGroup } from '../components/ProductsGroup';
import { ProductModal } from '../components/ProductModal';

export const ProductsPage = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <h1 className="my-3 text-center">Lista de Productos</h1>
      {
        products.map((products) => (
          <ProductsGroup key={products.id} grupoDeProductos={products} tipo={products.type} />
        ))
      }
     
      <ProductModal />
    </>
  );
};
