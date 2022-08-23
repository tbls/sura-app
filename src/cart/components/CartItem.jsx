import { Button } from 'react-bootstrap';

export const CartItem = ({ product, index }) => {
  const { amount, name, color, size, observations } = product;

  return (
    <div className=" border rounded border-secondary mb-2 p-2">
      <div className="d-flex justify-content-between">
        <div className="fs-3">
          {amount} {name} {color} {size}
        </div>
        <div>
          <Button variant="danger" size="lg">
            -
          </Button>
        </div>
      </div>
      <small>{observations}</small>
    </div>
  );
};
