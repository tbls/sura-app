import Accordion from 'react-bootstrap/Accordion';
import { CartItem } from '../components/CartItem';

export const CartPage = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="my-3 text-center">Cart Page</h1>
      <Accordion defaultActiveKey={['0']}>
        {arr.map((ar, index) => (
          <CartItem key={ar} />
        ))}
      </Accordion>
    </>
  );
};
