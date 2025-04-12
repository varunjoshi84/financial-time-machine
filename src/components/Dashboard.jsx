import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
    const savingsChartRef = useRef(null);
    const expenseTrendChartRef = useRef(null);

    useEffect(() => {
        // Initialize charts
        const savingsChart = new Chart(savingsChartRef.current.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Savings', 'Expenses'],
                datasets: [{
                    data: [1800, 3200],
                    backgroundColor: ['#4361ee', '#f72585'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });

        const expenseTrendChart = new Chart(expenseTrendChartRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Expenses',
                    data: [3200, 2900, 3500, 3100, 3300, 3000],
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        return () => {
            savingsChart.destroy();
            expenseTrendChart.destroy();
        };
    }, []);

    return (
        <section id="dashboard" className="section">
            <div className="header">
                <h1 className="page-title">Dashboard</h1>
                <div className="user-profile">
                    <span>Welcome, User</span>
                    <div className="user-avatar">U</div>
                </div>
            </div>

            <div className="alert alert-info">
                <i className="fas fa-info-circle"></i> Reducing your dining expenses by ₹200/month can increase your savings by ₹2,400/year.
            </div>

            <div className="grid">
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Financial Snapshot</h2>
                    </div>
                    <table className="table">
                        <tr>
                            <td>Monthly Income</td>
                            <td id="monthly-income">₹5,000</td>
                        </tr>
                        <tr>
                            <td>Monthly Expenses</td>
                            <td id="monthly-expenses">₹3,200</td>
                        </tr>
                        <tr>
                            <td>Monthly Savings</td>
                            <td id="monthly-savings">₹1,800</td>
                        </tr>
                        <tr>
                            <td>Total Savings</td>
                            <td id="total-savings">₹15,000</td>
                        </tr>
                        <tr>
                            <td>Investments</td>
                            <td id="total-investments">₹8,000</td>
                        </tr>
                    </table>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title">Savings Rate</h2>
                    </div>
                    <div className="chart-container">
                        <canvas ref={savingsChartRef}></canvas>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Expense Trends</h2>
                    <div className="card-actions">
                        <select className="form-control btn-sm" id="trend-period">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                            <option>Last 2 Years</option>
                        </select>
                    </div>
                </div>
                <div className="chart-container">
                    <canvas ref={expenseTrendChartRef}></canvas>
                </div>
            </div>
        </section>
    );
};

export default Dashboard; 