import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import ProductItem from '../Components/ProductItem';
import { useAxiosGet } from '../Hooks/HttpRequest';

export default function HomePage() {
  let content = null;
  const { id } = useParams();
  const url = `https://68d39dda214be68f8c6684f7.mockapi.io/ProductAPI?limit=10&page=1`;
  
  let products = useAxiosGet(url);
  
  if (products.loading) content = <Loader> </Loader>;

  if (products.error) content = <p>There was an error please try again</p>;

  if (products.data)
    content = products.data.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));

// ...existing code...
  return (
    <div>
      <h1 style={{padding: '10px'}}>Best Sellers</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // <-- fixed
        gap: '10px',
      }}>
        {content}
      </div>
    </div>
  );
// ...existing code...
}
