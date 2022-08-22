import { useSelector } from 'react-redux';

import CardGroup from 'react-bootstrap/CardGroup';

import { CartItem } from '../components/CartItem';

export const CartPage = () => {

	const { products } = useSelector((state) => state.cart);

	return (
		<>
			<h1 className="my-3 text-center">Cart Page</h1>

			<CardGroup>
			{
				products.map( (product, index) => (
					<CartItem key={ product.id } product={ product } index ={ index } />
				))
			}
			</CardGroup>


		</>
	);
};
