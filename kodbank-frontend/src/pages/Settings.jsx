import React from 'react';
import { Bell, Lock, User, Globe, Moon, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Settings = () => {
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-greeting">
                        <h1>Settings</h1>
                        <p>Manage your account preferences and security.</p>
                    </div>
                </header>

                <div className="content-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>

                    {/* General Settings */}
                    <div className="transactions-container">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <User size={20} color="var(--accent-blue)" /> App Preferences
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Dark Theme</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>KodBank uses a stunning dark glassmorphism theme by default.</p>
                                </div>
                                <div style={{ background: 'var(--accent-green)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold', color: '#000' }}>Active</div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Language</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Select your preferred app language.</p>
                                </div>
                                <select style={{ padding: '8px', background: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid var(--border-color)', borderRadius: '8px', outline: 'none' }}>
                                    <option>English (US)</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* Security Settings */}
                    <div className="transactions-container">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Shield size={20} color="var(--accent-orange)" /> Security & Notifications
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Push Notifications</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Receive alerts for transactions and security events.</p>
                                </div>
                                <label style={{ position: 'relative', display: 'inline-block', width: '40px', height: '24px' }}>
                                    <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                                    <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--accent-blue)', borderRadius: '24px' }}>
                                        <span style={{ position: 'absolute', height: '18px', width: '18px', left: '20px', bottom: '3px', backgroundColor: 'white', borderRadius: '50%', transition: '0.4s' }}></span>
                                    </span>
                                </label>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <div>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Change Password</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Update your account password regularly.</p>
                                </div>
                                <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Update</button>
                            </div>

                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
};

export default Settings;
