import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function Products() {
	// verileri çek
	// maple
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axiosGet();
	}, []);

	const axiosGet = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
		console.log(response.data.products);
	};

	// responsive?
	return (
		<div className="container mt-5">
			<div className="row">
				{products.map(product => (
					<div className="col-3 mb-3">					
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
}