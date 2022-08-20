import { Row } from 'react-bootstrap';

import { ProductItem } from './ProductItem';

export const ProductsGroup = ({ grupoDeProductos = [] }) => {

	const { list } = grupoDeProductos;

	return (
		<>
			<h4 className="my-3">{grupoDeProductos.name}</h4>
			
			<Row xs={2} md={2} lg={3} className="g-1">
				{
					list.map((producto, index) => (
						<ProductItem key={index} producto={producto} />
					))
				}
			</Row>



		</>
	);
};
