import { useParams } from 'react-router-dom';
import { products } from '../data/products';

type Params = {
  id: string;
};

export function ProductPage() {
  const params = useParams<Params>(); //  {id:1}
  //console.log(params);
  const id = params.id === undefined ? undefined : parseInt(params.id);
  const requiredProduct = products.find((product) => product.id === id);
  console.log(requiredProduct);
  return <div> placeholder </div>;
}
