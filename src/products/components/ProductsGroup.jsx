import { Row } from 'react-bootstrap';

import { ProductItem } from './ProductItem';

export const ProductsGroup = ({ grupoDeProductos = [], tipo }) => {

	const { list } = grupoDeProductos;



	return (
		<>
			<h4 className="my-3">{grupoDeProductos.name}</h4>
			
			<Row  xs={2} sm={2} md={3} lg={4} className="g-2">
				{
					list.map((producto, index) => (
						<ProductItem key={index} producto={producto}/>
					))
				}
			</Row>



		</>
	);
};
