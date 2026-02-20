import React from 'react';
import { Laptop, Coffee, ArrowUpCircle, ShoppingBag } from 'lucide-react';

const transactions = [
    {
        id: 1,
        icon: <Laptop size={20} color="#888" />,
        title: 'Apple Store',
        description: 'Technology • Feb 20, 2026',
        amount: '-$999.00',
        status: 'Completed',
        type: 'negative'
    },
    {
        id: 2,
        icon: <Coffee size={20} color="#888" />,
        title: 'Starbucks Coffee',
        description: 'Food & Drink • Feb 19, 2026',
        amount: '-$15.50',
        status: 'Completed',
        type: 'negative'
    },
    {
        id: 3,
        icon: <ArrowUpCircle size={20} color="#4ade80" />,
        title: 'Salary Deposit',
        description: 'Income • Feb 18, 2026',
        amount: '+$5000.00',
        status: 'Completed',
        type: 'positive'
    },
    {
        id: 4,
        icon: <ShoppingBag size={20} color="#888" />,
        title: 'Amazon Prime',
        description: 'Subscription • Feb 17, 2026',
        amount: '-$14.99',
        status: 'Pending',
        type: 'warning'
    }
];

const RecentTransactions = () => {
    return (
        <div className="transactions-container">
            <h3>Recent Transactions</h3>
            <div className="transactions-list">
                {transactions.map((t) => (
                    <div className="transaction-item" key={t.id}>
                        <div className="transaction-icon">{t.icon}</div>
                        <div className="transaction-info">
                            <h4>{t.title}</h4>
                            <p>{t.description}</p>
                        </div>
                        <div className="transaction-amount-status">
                            <div className={`amount ${t.type}`}>{t.amount}</div>
                            <div className={`status ${t.status.toLowerCase()}`}>{t.status}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentTransactions;
