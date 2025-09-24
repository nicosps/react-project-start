import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden p-4">
      <Link to={`/products/${props.product.id}`}>
        <img
          style={{ backgroundImage: `url(${props.product.images})` }}
          className="w-full h-64 bg-gray-200 bg-cover mb-2"
          width={100}
          height={100}
        ></img>
        <h2 className="text-lg font-bold">{props.product.name}</h2>
        <div className="text-blue-700 font-semibold mb-1">
          ${props.product.price}
        </div>
        <div className="text-gray-600">{props.product.description}</div>
      </Link>
    </div>
  );
}
