import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/theme-default.css';
import './styles/demo.css';
import { AddProducs, Brand, Categories, CompletedOrders, Coupons, Customer, Daily, Dashboard, Monthly, NewOrders, Orders, PendingOrders, ProductLists, Status, Stock, Transactions, Weekly } from './pages';
import Layout from './Layout';


function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Dashboard />,
                },
                {
                    path: '/dashboard/sales',
                    children: [
                        {
                            path: 'daily',
                            element: <Daily />,
                        },
                        {
                            path: 'weekly',
                            element: <Weekly />,
                        },
                        {
                            path: 'monthly',
                            element: <Monthly />,
                        }
                    ]
                },
                {
                    path: '/dashboard/inventory',
                    children: [
                        {
                            path: 'stock',
                            element: <Stock />,
                        },
                        {
                            path: 'status',
                            element: <Status />,
                        }
                    ]
                },
                {
                    path: '/dashboard/orders',
                    children: [
                        {
                            path: '/dashboard/orders/new',
                            element: <NewOrders />,
                        },
                        {
                            path: '/dashboard/orders/pending',
                            element: <PendingOrders />,
                        },
                        {
                            path: '/dashboard/orders/completed',
                            element: <CompletedOrders />,
                        }
                    ]
                },
                {
                  path: '/orders',
                  element: <Customer />,
                },
                {
                    path: '/customers',
                    element: <Orders />,
                },
                {
                    path: '/coupon-code',
                    element: <Coupons />,
                },
                {
                    path: '/categories',
                    element: <Categories />,
                },
                {
                    path: '/transaction',
                    element: <Transactions />,
                },
                {
                    path: '/brand',
                    element: <Brand />,
                },
                {
                    path: '/add-product',
                    element: <AddProducs />,
                },
                {
                    path: '/list',
                    element: <ProductLists />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;