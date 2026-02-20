import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart2, CreditCard, Wallet, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const { logout } = useAuth();

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-icon"></div>
                <h2>Kodbank</h2>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/dashboard" className="nav-item">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/analytics" className="nav-item">
                    <BarChart2 size={20} />
                    <span>Analytics</span>
                </NavLink>
                <NavLink to="/cards" className="nav-item">
                    <CreditCard size={20} />
                    <span>Cards</span>
                </NavLink>
                <NavLink to="/assets" className="nav-item">
                    <Wallet size={20} />
                    <span>Assets</span>
                </NavLink>
                <NavLink to="/profile" className="nav-item">
                    <User size={20} />
                    <span>Profile</span>
                </NavLink>
            </nav>

            <div className="sidebar-bottom">
                <NavLink to="/settings" className="nav-item">
                    <Settings size={20} />
                    <span>Settings</span>
                </NavLink>
                <button onClick={logout} className="nav-item logout-btn">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
