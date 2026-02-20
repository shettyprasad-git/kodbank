import React, { useState } from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import SpendingChart from '../components/SpendingChart';
import RecentTransactions from '../components/RecentTransactions';

const Dashboard = () => {
    const { user } = useAuth();
    const [balanceMessage, setBalanceMessage] = useState('');

    const checkBalance = async () => {
        try {
            const { data } = await api.get('/balance');
            setBalanceMessage(data.message);
            // Hide message after 4 seconds
            setTimeout(() => setBalanceMessage(''), 4000);
        } catch (err) {
            if (err.response) {
                setBalanceMessage(err.response.data.message || 'Failed to fetch balance');
            } else {
                setBalanceMessage('Network Error');
            }
            setTimeout(() => setBalanceMessage(''), 4000);
        }
    };

    const handleSendMoney = () => {
        alert("Send Money functionality coming soon!");
    };

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-greeting">
                        <h1>Welcome back, {user?.username || 'user'}</h1>
                        <p>Here's what's happening with your finance today.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-secondary" onClick={checkBalance}>Check Balance</button>
                        <button className="btn-primary" onClick={handleSendMoney}>Send Money</button>
                    </div>
                </header>

                {balanceMessage && (
                    <div className="balance-message slide-in">
                        {balanceMessage}
                    </div>
                )}

                <div className="stats-grid">
                    <StatCard
                        icon={<span className="dollar-icon">$</span>}
                        label="Total Balance"
                        value="$45,231.89"
                        trend="12.5%"
                        isPositive={true}
                    />
                    <StatCard
                        icon={<ArrowUpRight size={18} color="#ff7675" />}
                        label="Monthly Income"
                        value="$8,432.5"
                        trend="8.2%"
                        isPositive={true}
                    />
                    <StatCard
                        icon={<Download size={18} color="#74b9ff" />}
                        label="Monthly Expenses"
                        value="$3,120.45"
                        trend="4.1%"
                        isPositive={false}
                    />
                    <StatCard
                        icon={<span className="card-icon">💳</span>}
                        label="Total Savings"
                        value="$12,450"
                        trend="15.3%"
                        isPositive={true}
                    />
                </div>

                <div className="content-grid">
                    <SpendingChart />
                    <RecentTransactions />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
