import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  return (
    <div className="rounded overflow-hidden p-4" style={{ padding: '10px' }}>
      <Link style={{textDecoration: 'none'}} to={`/products/${props.product.id}`}>
        <img
          style={{
            backgroundImage: `url(${props.product.images})`,
            width: '100%',
            height: '200px',
            backgroundSize: 'cover',
            borderRadius: '8px',
            backgroundRepeat: 'no-repeat',
          }}
          // className="size-48 shadow-xl rounded-md"
          width={100}
          height={100}
        ></img>
        <h2 style={{color: 'black'}} >{props.product.name}</h2>
        <div style=
          {{
            fontSize: '1.25rem',
            marginBottom: '1px',
            color: 'black',
          }}>
          ${props.product.price}
        </div>
      </Link>
    </div>
  );
}
