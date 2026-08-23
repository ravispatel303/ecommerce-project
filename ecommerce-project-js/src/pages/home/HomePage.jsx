import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';
import { useSearchParams } from 'react-router';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  // below useEffect ensures that we get products from api once, regardless of any re-render of HomePage. 
  // useEffect(() => {
  //   axios.get('/api/products')
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  // using async and await
  useEffect(() => {
    const fetchHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : `/api/products`;
      const response = await axios.get(urlPath);
      setProducts(response.data);
    }

    fetchHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}