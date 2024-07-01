import React from 'react';

const products = [
  { id: 1, name: 'Apple MacBook Pro 17"', qty: 1, price: '$2999' },
  { id: 2, name: 'Microsoft Surface Pro', qty: 1, price: '$1999' },
  { id: 3, name: 'Magic Mouse 2', qty: 1, price: '$99' }
];

const totalQty = products.reduce((sum, product) => sum + product.qty, 0);
const totalPrice = products.reduce((sum, product) => sum + parseFloat(product.price.replace('$', '')), 0).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});

const TpTopUsers = () => {
  return (
    <div className="relative overflow-x-auto w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-s-lg">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">
                {product.qty}
              </td>
              <td className="px-6 py-4">
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-gray-900 bg-gray-950 dark:text-white">
            <th scope="row" className="px-6 py-3 text-base">Total</th>
            <td className="px-6 py-3">{totalQty}</td>
            <td className="px-6 py-3">{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TpTopUsers;
