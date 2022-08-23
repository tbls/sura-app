import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';
import { hideProductsModal } from '../../store/ui/uiSlice';
import {
  removeActiveProduct,
  updateActiveProductAmount,
  updateActiveProductColor,
  updateActiveProductObservations,
  updateActiveProductSize,
} from '../../store/products/productsSlice';

const colorOptions = [
  { value: 'Blanco', label: 'Blanco' },
  { value: 'Negro', label: 'Negro' },
  { value: 'Azul', label: 'Azul' },
];

const sizeOptions = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
];

export const ProductModal = () => {
  const { isProductsModalVisible } = useSelector((state) => state.ui);
  const { activeProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const ocultarModalDeEquipos = () => {
    dispatch(removeActiveProduct());
    dispatch(hideProductsModal());
  };
  const { amount, observations, name, haveColors, haveSizes } = activeProduct;

  const agregarAlCarrito = () => {
    console.log('agregar al carrito');
    console.log(activeProduct);
  };

  const onColorSelectChange = (value) => {
    dispatch(updateActiveProductColor(value));
  };

  const onSizeSelectChange = (value) => {
    dispatch(updateActiveProductSize(value));
  };

  const onAmountInputChange = ({ target }) => {
    dispatch(updateActiveProductAmount(target.value));
  };
  const onObservationsInputChange = ({ target }) => {
    dispatch(updateActiveProductObservations(target.value));
  };

  return (
    <>
      <Modal show={isProductsModalVisible} onHide={ocultarModalDeEquipos}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={amount}
                onChange={onAmountInputChange}
              />
            </Form.Group>
            <div className="row">
              {haveColors && (
                <Form.Group
                  className="mb-3 col-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Color</Form.Label>
                  <Select
                    options={colorOptions}
                    onChange={onColorSelectChange}
                  />
                </Form.Group>
              )}
              {haveSizes && (
                <Form.Group
                  className="mb-3 col-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Talla</Form.Label>
                  <Select options={sizeOptions} onChange={onSizeSelectChange} />
                </Form.Group>
              )}
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={observations}
                onChange={onObservationsInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ocultarModalDeEquipos}>
            Agregar cliente
          </Button>
          <Button variant="primary" onClick={agregarAlCarrito}>
            Agregar al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
