import React from 'react';

const customers = [
  {
    id: 1,
    name: 'Neil Sims',
    email: 'email@windster.com',
    amount: '$320',
    image: '/ppc.jpg'
  },
  {
    id: 2,
    name: 'Bonnie Green',
    email: 'email@windster.com',
    amount: '$3467',
    image: '/ppc.jpg'
  },
  {
    id: 3,
    name: 'Michael Gough',
    email: 'email@windster.com',
    amount: '$67',
    image: '/ppc.jpg'
  },
  {
    id: 4,
    name: 'Lana Byrd',
    email: 'email@windster.com',
    amount: '$367',
    image: '/ppc.jpg'
  },
  {
    id: 5,
    name: 'Thomas Lean',
    email: 'email@windster.com',
    amount: '$2367',
    image: '/ppc.jpg'
  },
];

const TpLatestCustomers = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {customers.map(customer => (
            <li key={customer.id} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={customer.image} alt={`${customer.name} image`} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {customer.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {customer.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {customer.amount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TpLatestCustomers;
