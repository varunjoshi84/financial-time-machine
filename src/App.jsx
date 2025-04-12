import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AIAdvisor from './components/AIAdvisor';
import './styles/App.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const sections = {
        dashboard: <Dashboard />,
        advisor: <AIAdvisor />
        // Add other sections as they are created
    };

    return (
        <div className="app-container">
            <Sidebar onSectionChange={setActiveSection} />
            <main className="main-content">
                {sections[activeSection]}
            </main>
        </div>
    );
};

export default App; 