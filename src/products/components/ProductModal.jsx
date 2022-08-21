import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';
import { hideProductsModal } from '../../store/ui/uiSlice';


export const ProductModal = () => {
	const { isProductsModalVisible } = useSelector((state) => state.ui);
	const { activeProduct } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const colorOptions = [
		{ value: 'Blanco', label: 'Blanco' },
		{ value: 'Negro',	label: 'Negro'	},
		{ value: 'Azul', label: 'Azul' },
	];

	const sizeOptions = [
		{ value: 'S', label: 'S' },
		{ value: 'M', label: 'M' },
		{ value: 'L', label: 'L' },
	];

	const ocultarModalDeEquipos = () => {
		dispatch(hideProductsModal());
	};
		const { id, name, haveColors, haveSizes } = activeProduct;

	const agregarAlCarrito = () => {
		console.log('agregar al carrito')
		console.log(activeProduct);
	}

	const onColorSelectChange = (value) => {
		console.log(value)
	}

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
						<Form.Control type="number" />
					</Form.Group>
					<div className='row'>
						{
							haveColors &&
							<Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
							<Form.Label>Color</Form.Label>
							<Select
								options={colorOptions}
								onChange={onColorSelectChange}
							/>
						</Form.Group>
						}
						{
							haveSizes &&
							<Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
								<Form.Label>Talla</Form.Label>
								<Select options={sizeOptions} />
							</Form.Group>
						}
					</div>
					<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlTextarea1"
					>
					<Form.Label>Observación</Form.Label>
					<Form.Control as="textarea" rows={3} />
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
