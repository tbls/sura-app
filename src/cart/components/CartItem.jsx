import Card from 'react-bootstrap/Card';

export const CartItem = ({ product, index }) => {

	const { amount, name, color, size } = product

	return (
		<Card>

				<div> {index+1} </div>
				<div> {amount} </div>
				<div> {name} </div>
				<div> {color} </div>
				<div> {size} </div>

		</Card>
	);
};
