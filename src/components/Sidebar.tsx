import { Link } from 'react-router-dom';
import MenuItem from './MenuItems';
import { menuData } from './SidebarData';
import { Fragment } from 'react/jsx-runtime';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
    const [isCollapsed, setCollapse] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        if (isCollapsed) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCollapse = () => {
        setCollapse(!isCollapsed);
        setIsHovered(false);
    };

    return( 
        <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${!isHovered && isCollapsed ? 'Collapsed' : ''}`} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="app-brand demo">
                <img src="https://www.zarla.com/images/zarla-e-1x1-2400x2400-20211115-bbtryd3dpx898dk6yfgb.png?crop=1:1,smart&width=250&dpr=2" width={20} height={25}/>
                {(!isCollapsed || isHovered) &&
            <>
                <Link to="/" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-bold ms-2">Evaly</span>
                </Link>
                <div className="layout-menu-toggle menu-link text-large ms-auto" onClick={() => handleCollapse()}>
                    <FaArrowCircleLeft size={16}/>
                </div>
            </>}
            </div>
            <div className="menu-inner-shadow" style={{display: 'none'}}></div>
            <ul className="menu-inner py-1 ps ps--active-y">                        
                {menuData.map((item, index) => {
                    return (
                        <Fragment key={`${index}-${item?.heading}`}>
                            {(!isCollapsed || isHovered) &&
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">{item?.heading}</span>
                    </li>}
                            {item.content.map((menuItem, subIndex) => (
                                <MenuItem key={`${subIndex}-${item?.heading}`} item={menuItem} isCollapsed={!isCollapsed || isHovered}/>
                            ))}
                        </Fragment>);
                })}      
            </ul>
        </aside>
    );
};

export default Sidebar;