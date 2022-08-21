import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setActiveProduct } from '../../store/products/productsSlice';
import { showProductsModal } from '../../store/ui/uiSlice';

export const ProductItem = ({ producto }) => {
	const dispatch = useDispatch();

	const { id, name, colors, sizes } = producto;

	const mostarModalDeEquipos = () => {
		dispatch(setActiveProduct(producto));
		dispatch(showProductsModal());
	};

	return (
		<Col className='mb-3'>
			<Card
				className="text-center h-100"
			>
			<Card.Body>
				<Card.Title>
					{name}
				</Card.Title>
				<Button onClick={mostarModalDeEquipos} variant="primary">
					Agregar
				</Button>

			</Card.Body>
			<Card.Footer className="text-muted">2 days ago</Card.Footer>
			</Card>
		</Col>
	);
};
