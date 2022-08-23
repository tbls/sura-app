import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select';
import {  Form } from 'react-bootstrap';

import { setDeliveryType } from '../../store/cart/cartSlice';

const deliveryOptions = [
	{ value: 'delivery', label: 'Delivery' },
	{ value: 'station', label: 'En estación' },
];

export const OrderTypeSelector = () => {

	const { deliveryType } = useSelector( state => state.cart );

	const dispatch = useDispatch();

	const onDeliverySelectChange = (value) => {
		dispatch(setDeliveryType(value));
	}


	return (
		<>
			<Form>
				<Form.Group className="mb-2">
					<Form.Label>Tipo de entrega</Form.Label>
					<Select options={deliveryOptions} onChange={onDeliverySelectChange}/>
				</Form.Group>
					{
						(deliveryType.value === "station") && (
							<Form.Group
								className="mb-2"
							>
								<Form.Label>Estación</Form.Label>
								<Select
					
								/>
							</Form.Group>
						)
					}
					{
						(deliveryType.value === "delivery") && (
							<>
							<Form.Group className="mb-2">
								<Form.Label>Distrito</Form.Label>
								<Form.Control type="text"/>
							</Form.Group>
							<Form.Group className="mb-2">
								<Form.Label>Dirección</Form.Label>
								<Form.Control type="text"/>
							</Form.Group>
							</>
						)
					}
			</Form>
		</>
	);
};
