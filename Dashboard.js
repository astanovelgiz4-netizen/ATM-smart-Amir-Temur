import React, { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

function Dashboard() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.primaryColor, minHeight: '100vh', padding: '20px' }}>
      <h1>{theme.appName} – Dashboard</h1>
      <p>Bu yerda statistikalar va modul linklar bo‘ladi.</p>
    </div>
  );
}

export default Dashboard;
