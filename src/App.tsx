// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/general/Layout';
import Index from './pages/Index';
import History from './pages/History';


const App: React.FC = () => {
    return (
        // Router component to enable routing in the application
        <Router>
            {/* Routes container to define the route structure */}
            <Routes>
                {/* Layout route to wrap the sidebar and main content */}
                <Route path="/" element={<Layout />}>
                    {/* Index route to render the IndexPage component */}
                    <Route index element={<Index />} />
                    {/* History route to render the HistoryPage component */}
                    <Route path="history" element={<History />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
