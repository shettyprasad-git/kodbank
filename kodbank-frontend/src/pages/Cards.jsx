import React from 'react';
import { CreditCard as CardIcon, Plus, Wifi, ChevronRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Cards = () => {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-greeting">
                        <h1>Your Cards</h1>
                        <p>Manage your credit and debit cards securely.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Plus size={18} /> Add New Card
                        </button>
                    </div>
                </header>

                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>

                    {/* Primary Credit Card */}
                    <div style={{
                        padding: '2rem',
                        background: 'linear-gradient(135deg, rgba(30, 31, 36, 0.8), rgba(20, 20, 25, 0.9))',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '220px'
                    }}>
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent-orange)', opacity: '0.1', borderRadius: '50%', filter: 'blur(30px)' }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>KodBank Premium</h3>
                            <Wifi size={24} color="rgba(255,255,255,0.6)" style={{ transform: 'rotate(90deg)' }} />
                        </div>

                        <div style={{ zIndex: 1, marginTop: '2rem' }}>
                            <div style={{ fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                                **** **** **** 8241
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Card Holder</p>
                                    <p style={{ fontSize: '1rem', fontWeight: '500' }}>Prasad Shetty</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Valid Thru</p>
                                    <p style={{ fontSize: '1rem', fontWeight: '500' }}>12/28</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Virtual Debit Card */}
                    <div style={{
                        padding: '2rem',
                        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15), rgba(46, 204, 113, 0.1))',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '220px'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Virtual Debit</h3>
                            <CardIcon size={24} color="var(--accent-blue)" />
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <div style={{ fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                                **** **** **** 4092
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Card Holder</p>
                                    <p style={{ fontSize: '1rem', fontWeight: '500' }}>Prasad Shetty</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Status</p>
                                    <p style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--accent-green)' }}>Active</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="transactions-container" style={{ marginTop: '2rem' }}>
                    <h3>Card Settings & Controls</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer' }}>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Freeze Card</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Instantly block new purchases on your Premium card.</p>
                            </div>
                            <ChevronRight size={20} color="var(--text-secondary)" />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer' }}>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Set Spending Limits</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Control your monthly outflow thresholds.</p>
                            </div>
                            <ChevronRight size={20} color="var(--text-secondary)" />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)', cursor: 'pointer' }}>
                            <div>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Show PIN</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Securely view your physical card PIN.</p>
                            </div>
                            <ChevronRight size={20} color="var(--text-secondary)" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Cards;
