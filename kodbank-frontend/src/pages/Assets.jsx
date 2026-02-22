import React from 'react';
import { Briefcase, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Assets = () => {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-greeting">
                        <h1>Your Assets</h1>
                        <p>Track your investments and portfolio performance.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-primary">Buy Assets</button>
                    </div>
                </header>

                <div className="stats-grid">
                    <div className="stat-card" style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(30, 31, 36, 0.8))' }}>
                        <div className="stat-header">
                            <div className="stat-icon-wrapper">
                                <Briefcase size={20} color="var(--accent-green)" />
                            </div>
                            <span className="stat-trend positive">+ 8.4% All Time</span>
                        </div>
                        <div className="stat-info" style={{ marginTop: '1rem' }}>
                            <p className="stat-label">Total Portfolio Value</p>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'white' }}>$124,500.00</h3>
                        </div>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="transactions-container" style={{ gridColumn: '1 / -1' }}>
                        <h3>Asset Allocation</h3>

                        <div className="transactions-list">

                            <div className="transaction-item" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div className="transaction-icon" style={{ background: 'rgba(52, 152, 219, 0.1)' }}>
                                    <TrendingUp size={20} color="var(--accent-blue)" />
                                </div>
                                <div className="transaction-info">
                                    <h4>Stocks & ETFs</h4>
                                    <p>S&P 500, Tech Growth</p>
                                </div>
                                <div className="transaction-amount-status">
                                    <p className="amount positive">$85,200.00</p>
                                    <p className="status" style={{ color: 'var(--accent-green)' }}>+12.4%</p>
                                </div>
                            </div>

                            <div className="transaction-item" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div className="transaction-icon" style={{ background: 'rgba(241, 196, 15, 0.1)' }}>
                                    <DollarSign size={20} color="var(--accent-yellow)" />
                                </div>
                                <div className="transaction-info">
                                    <h4>Cryptocurrency</h4>
                                    <p>Bitcoin, Ethereum</p>
                                </div>
                                <div className="transaction-amount-status">
                                    <p className="amount" style={{ color: 'white' }}>$24,100.00</p>
                                    <p className="status" style={{ color: 'var(--accent-red)' }}>-2.1%</p>
                                </div>
                            </div>

                            <div className="transaction-item" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div className="transaction-icon" style={{ background: 'rgba(231, 76, 60, 0.1)' }}>
                                    <TrendingDown size={20} color="var(--accent-red)" />
                                </div>
                                <div className="transaction-info">
                                    <h4>Real Estate REITs</h4>
                                    <p>Commercial, Residential</p>
                                </div>
                                <div className="transaction-amount-status">
                                    <p className="amount positive">$15,200.00</p>
                                    <p className="status" style={{ color: 'var(--accent-green)' }}>+4.8%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Assets;
