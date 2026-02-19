import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const Dashboard = () => {
    const { user } = useAuth();
    const [balanceMessage, setBalanceMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

    const checkBalance = async () => {
        try {
            const { data } = await api.get('/balance');
            setBalanceMessage(data.message);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);
        } catch (err) {
            setBalanceMessage('Failed to fetch balance');
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome, {user?.username}</h1>
            <div className="user-info">
                <p>Email: {user?.email}</p>
                <p>Role: {user?.role}</p>
            </div>

            <div className="balance-section">
                <button onClick={checkBalance}>Check Balance</button>
                {balanceMessage && (
                    <div className="balance-card">
                        <h3>{balanceMessage}</h3>
                    </div>
                )}
            </div>

            {showConfetti && (
                <div className="confetti-container">
                    <div className="confetti c1"></div>
                    <div className="confetti c2"></div>
                    <div className="confetti c3"></div>
                    <div className="confetti c4"></div>
                    <div className="confetti c5"></div>
                    <div className="confetti c6"></div>
                    <div className="party-popper">🎉</div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
