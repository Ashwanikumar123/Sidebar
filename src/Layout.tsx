import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Layout = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">              
                <Sidebar/>
                <div className="layout-page">
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <h4 className="py-3 mb-4"><Outlet/></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;