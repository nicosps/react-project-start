import { useEffect, useState } from 'react';
import axios from 'axios';

export function useAxiosGet(url) {
 const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({ loading: true, data: null, error: false });

    axios
      .get(url)
      .then((response) => {
        setProducts({ loading: false, data: response.data, error: false });
        console.log(response.data);
      })
      .catch((error) => {
        setProducts({ loading: false, data: null, error: true });
        console.error(error);
      });
  }, [url]);

  return products;
}
