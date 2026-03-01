import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Library from './components/Library';
import Olympiad from './components/Olympiad';
import Test from './components/Test';
import Chat from './components/Chat';
import Attendance from './components/Attendance';
import Payments from './components/Payments';
import Announcements from './components/Announcements';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/olympiad" element={<Olympiad />} />
          <Route path="/test" element={<Test />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
