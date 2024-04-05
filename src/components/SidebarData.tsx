import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { RiCoupon2Fill } from 'react-icons/ri';
import { BiSolidCategory } from 'react-icons/bi';
import { FaFileAlt } from 'react-icons/fa';
import { FaProductHunt } from 'react-icons/fa';


export interface SidebarItem {
    title: string;
    path: string;
    icon?: any;
    subnav?: SidebarItem[];
}

interface menuList{
    heading : string,
    content : SidebarItem[]
}

const mainMenu: SidebarItem[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon : <FaHome />,
        subnav: [
            {
                title: 'Sales',
                path: '/dashboard/sales',
                icon : <FaHome />,
                subnav: [
                    {
                        title: 'Daily',
                        path: '/dashboard/sales/daily',
                        icon : <FaHome />,
                    },
                    {
                        title: 'Weekly',
                        path: '/dashboard/sales/weekly',
                        icon : <FaHome />,
                    },
                    {
                        title: 'Monthly',
                        path: '/dashboard/sales/monthly',
                        icon : <FaHome />,
                    }
                ]
            },
            {
                title: 'Inventory',
                path: '/dashboard/inventory',
                icon : <FaHome />,
                subnav: [
                    {
                        title: 'Stock',
                        path: '/dashboard/inventory/Stock',
                        icon : <FaHome />,
                        subnav: [
                            {
                                title: 'New Orders',
                                path: '/dashboard/orders/new',
                                icon : <FaHome />,
                            },
                            {
                                title: 'Pending Orders',
                                path: '/dashboard/orders/pending',
                                icon : <FaHome />,
                            },
                            {
                                title: 'Completed Orders',
                                path: '/dashboard/orders/completed',
                                icon : <FaHome />,
                            }
                        ]
                    },
                    {
                        title: 'Status',
                        path: '/dashboard/inventory/status',
                        icon : <FaHome />,
                    }
                ]
            },           
        ]
    },
    {
        title: 'Order Managment',
        path: '/orders',
        icon : <FaCartArrowDown />
    },
    {
        title: 'Customers',
        path: '/customers',
        icon : <FaUsers />
    },
    {
        title: 'Coupon Code',
        path: '/coupon-code',        
        icon : <RiCoupon2Fill />
    },
    {
        title: 'Categories',
        path: '/categories',        
        icon : <BiSolidCategory />
    },
    {
        title: 'Transaction',
        path: '/transaction',        
        icon : <FaFileAlt />
    },
    {
        title: 'Brand',
        path: '/brand',
        icon : <FaUsers />        
    }
];

const products : SidebarItem[] = [
    {
        title: 'Add Product',
        path: '/add-product',
        icon : <FaProductHunt />        
    },
    {
        title: 'Product Lists',
        path: '/list',        
        icon : <FaFileAlt />
    }
];

export const menuData : menuList[] =[
    {
        heading : 'Main Menu',
        content : mainMenu
    },
    {
        heading : 'Products',
        content : products
    }
];