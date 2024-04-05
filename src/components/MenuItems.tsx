import { useState } from 'react';
import { SidebarItem } from '../components/SidebarData';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  item: SidebarItem;
  isCollapsed: boolean;
}

const MenuItem = ({ item, isCollapsed }: MenuItemProps) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSubMenu = (e :React.MouseEvent<HTMLAnchorElement, MouseEvent>, isSubmenuExist : number | undefined) => {
        if(!isSubmenuExist) return;
        e.preventDefault();
        setIsOpen(!isOpen);
    };
  
    return (
        <>
            <li className={`menu-item ${isOpen ? 'open' : ''}`}>
                <Link to={item.path} className={`menu-link ${item.subnav && isCollapsed ? 'menu-toggle' : ''}`} onClick={(e) => toggleSubMenu(e,item.subnav?.length)}>
                    <div className="menu-icon tf-icons bx bx-home-circle">{item?.icon}</div>
                    {isCollapsed && <div>{item.title}</div> }
                </Link>
                {item.subnav && isOpen && isCollapsed && (
                    <ul className="submenu">
                        {item.subnav.map((subItem, index) => (
                            <MenuItem key={index} item={subItem} isCollapsed={isCollapsed}/>
                        ))}
                    </ul>
                )}
            </li>
        </>
    );
};

export default MenuItem;
  