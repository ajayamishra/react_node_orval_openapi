import { useEffect, useState } from 'react';
import { objectToCamel } from 'ts-case-convert';

import { Product, useProductsIndex } from '../../../models/generated';

export const ProductListPage = () => {
  const [productList, setProductList] = useState<Product []>([]);

  const { isLoading, error, data } = useProductsIndex();

  useEffect(() => {
    console.log('data=', data)
    if (data?.data?.products) {
      setProductList(objectToCamel(data?.data?.products))
    }
  }, [data]);

  if (isLoading) return <div>Data is Loading</div>

  if (!isLoading && error) return <div>Error while fetching data.</div>

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product: any, id: number) => {
            return (
              <tr key={id}>    
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>$ {product.price}</td>
                <td>{product.color}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
