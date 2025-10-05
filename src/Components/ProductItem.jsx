import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  return (
    <div className="rounded overflow-hidden p-4">
      <Link to={`/products/${props.product.id}`}>
        <img
          style={{ backgroundImage: `url(${props.product.images})` }}
          className="w-full h-48 object-cover mb-4"
          width={100}
          height={100}
        ></img>
        <h2 className="text-lg font-bold">{props.product.name}</h2>
        <div style=
          {{
            fontSize: '1.25rem',
            marginBottom: '10px',
          }}>
          ${props.product.price}
        </div>
        <div className="text-black-600">{props.product.description}</div>
      </Link>
    </div>
  );
}
