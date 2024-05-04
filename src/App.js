import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './ComingSoon';  // Import your ComingSoon component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />  {/* Root path*/}
        <Route path="*" element={<Navigate replace to="/" />} />  {/*/ Redirect all unmatched routes to root */}
      </Routes>
    </Router>
  );
}

export default App;
