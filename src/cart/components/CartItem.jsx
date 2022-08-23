import { Button } from 'react-bootstrap';

export const CartItem = ({ product, index }) => {
  const { amount, name, color, size } = product;

  return (
    <div className="d-flex justify-content-between border rounded border-primary mb-2 p-2">
      <div className="fs-3">
        {amount} {name} {color} {size}
      </div>
      <div>
        <Button variant="danger small">Delete</Button>
        <Button  className="ms-1">Edit</Button>
      </div>
    </div>
  );
};
