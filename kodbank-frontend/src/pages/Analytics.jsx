import React from 'react';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import SpendingChart from '../components/SpendingChart';

const Analytics = () => {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-greeting">
                        <h1>Analytics Overview</h1>
                        <p>Detailed insights into your financial behavior.</p>
                    </div>
                </header>

                <div className="stats-grid">
                    <StatCard
                        icon={<TrendingUp size={18} color="var(--accent-green)" />}
                        label="Income vs Last Month"
                        value="+ 14.5%"
                        trend="Good"
                        isPositive={true}
                    />
                    <StatCard
                        icon={<Activity size={18} color="var(--accent-red)" />}
                        label="Spending Velocity"
                        value="High"
                        trend="Warning"
                        isPositive={false}
                    />
                    <StatCard
                        icon={<PieChart size={18} color="var(--accent-blue)" />}
                        label="Top Category"
                        value="Housing"
                        trend="35%"
                        isPositive={true}
                    />
                    <StatCard
                        icon={<BarChart3 size={18} color="var(--accent-yellow)" />}
                        label="Savings Rate"
                        value="22%"
                        trend="+2%"
                        isPositive={true}
                    />
                </div>

                <div className="content-grid">
                    <SpendingChart />

                    <div className="chart-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3>Expense Breakdown</h3>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Housing</span>
                                <span>35%</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '35%', height: '100%', background: 'var(--accent-blue)' }}></div>
                            </div>
                        </div>

                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Food & Dining</span>
                                <span>25%</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '25%', height: '100%', background: 'var(--accent-orange)' }}></div>
                            </div>
                        </div>

                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Transportation</span>
                                <span>15%</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '15%', height: '100%', background: 'var(--accent-yellow)' }}></div>
                            </div>
                        </div>

                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Entertainment</span>
                                <span>10%</span>
                            </div>
                            <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '10%', height: '100%', background: 'var(--accent-green)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Analytics;
