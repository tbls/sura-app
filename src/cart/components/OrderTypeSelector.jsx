import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';

const deliveryOptions = [
  { value: 'delivery', label: 'Delivery' },
  { value: 'station', label: 'En estación' },
];

export const OrderTypeSelector = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tipo de entrega</Form.Label>
          <Select options={deliveryOptions} />
        </Form.Group>
      </Form>
    </>
  );
};
