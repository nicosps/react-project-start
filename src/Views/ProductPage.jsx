import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequest';

export default function ProductPage() {
  const { id } = useParams();
  const url = `https://68d39dda214be68f8c6684f7.mockapi.io/ProductAPI/${id}`;
  let content = null;

  let product = useAxiosGet(url);

  if (product.loading) content = <Loader> </Loader>;

  if (product.error) content = <p>There was an error please try again</p>;

  if (product.data)
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img
            src={product.data.images}
            alt={product.data.name}
            width={100}
            height={100}
          />
        </div>
        <div className="font-bold text-xl mb-3"> $ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );

  return (
    <div>
      <h1>Product Page</h1>
      {content}
    </div>
  );
}
