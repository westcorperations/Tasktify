import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import TodoIcon from '../../assets/todo.svg'
import HistoryIcon from '../../assets/historyicon.svg'

interface NavItem {
    path: string;
    label: string;
    icon: string;
}

// List of navigation items
const navItems: NavItem[] = [
    { path: '/', label: 'Tasks', icon: TodoIcon },
    { path: '/history', label: 'History', icon: HistoryIcon }
];

const Sidebar: React.FC = () => {
    const location = useLocation();

    return (
        <aside className="m-5">
            <div className="flex flex-row lg:flex-col gap-3">
                {navItems.map((item) => (
                   <Link to={item.path} className="ml-2"> <div key={item.path} className={`flex items-center m-2 p-2 ${
                        location.pathname === item.path ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-green-500' : ''
                    }`}>
                        <img src={item.icon} alt={`${item.label} icon`} className="w-5 lg:w-10 lg:h-10 h-5" />
                       <span className='mx-2'>{item.label}</span> 
                    </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
