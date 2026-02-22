import React from 'react';
import { User, Mail, Phone, Calendar, Shield, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-greeting">
                        <h1>Your Profile</h1>
                        <p>Manage your account settings and preferences.</p>
                    </div>
                </header>

                <div className="stats-grid" style={{ marginBottom: '2rem' }}>
                    <div className="stat-card" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--accent-orange), #ff471a)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            boxShadow: '0 8px 20px rgba(255, 94, 58, 0.3)'
                        }}>
                            {user?.username?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{user?.username || 'User'}</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>Member since {new Date().getFullYear()}</p>
                        </div>
                        <button className="btn-secondary" style={{ marginLeft: 'auto' }}>Edit Profile</button>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="chart-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3>Personal Information</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div className="stat-icon-wrapper"><User size={20} color="var(--accent-blue)" /></div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Full Name</p>
                                <p style={{ fontWeight: '500' }}>{user?.username || 'Not provided'}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div className="stat-icon-wrapper"><Mail size={20} color="var(--accent-green)" /></div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Email Address</p>
                                <p style={{ fontWeight: '500' }}>{user?.email || 'email@example.com'}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div className="stat-icon-wrapper"><Phone size={20} color="var(--accent-yellow)" /></div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Phone Number</p>
                                <p style={{ fontWeight: '500' }}>{user?.phone || '+1 (555) 000-0000'}</p>
                            </div>
                        </div>

                    </div>

                    <div className="transactions-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3>Security & Account</h3>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="stat-icon-wrapper"><Shield size={20} color="var(--accent-orange)" /></div>
                                <div>
                                    <p style={{ fontWeight: '500', marginBottom: '0.2rem' }}>Two-Factor Auth</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Off</p>
                                </div>
                            </div>
                            <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Setup</button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="stat-icon-wrapper"><Activity size={20} color="var(--text-primary)" /></div>
                                <div>
                                    <p style={{ fontWeight: '500', marginBottom: '0.2rem' }}>Account Status</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-green)' }}>Verified</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
};

export default Profile;
