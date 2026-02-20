import React from 'react';

const StatCard = ({ icon, label, value, trend, isPositive }) => {
    return (
        <div className="stat-card">
            <div className="stat-header">
                <div className="stat-icon-wrapper">{icon}</div>
                <div className={`stat-trend ${isPositive ? 'positive' : 'negative'}`}>
                    {isPositive ? '↗' : '↘'} {trend}
                </div>
            </div>
            <div className="stat-info">
                <div className="stat-label">{label}</div>
                <div className="stat-value">{value}</div>
            </div>
        </div>
    );
};

export default StatCard;
