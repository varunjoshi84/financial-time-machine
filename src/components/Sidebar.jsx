import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const navItems = [
        { icon: 'fa-home', text: 'Dashboard', href: '#dashboard' },
        { icon: 'fa-wallet', text: 'My Finances', href: '#finances' },
        { icon: 'fa-chart-line', text: 'Simulations', href: '#simulations' },
        { icon: 'fa-lightbulb', text: 'Insights', href: '#insights' },
        { icon: 'fa-robot', text: 'AI Advisor', href: '#advisor' },
        { icon: 'fa-cog', text: 'Settings', href: '#settings' }
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">FT</div>
                <h2>Financial Time Machine</h2>
            </div>
            <ul className="nav-menu">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link to={item.href} className="nav-link">
                            <i className={`fas ${item.icon}`}></i>
                            <span>{item.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar; 