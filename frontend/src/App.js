import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>🎯 نظام نقاط البيع - POS System</h1>
          <p>الإصدار 1.0.0</p>
        </div>
      </header>

      <nav className="navbar">
        <button onClick={() => setCurrentPage('dashboard')} className={currentPage === 'dashboard' ? 'active' : ''}>لوحة التحكم</button>
        <button onClick={() => setCurrentPage('sales')} className={currentPage === 'sales' ? 'active' : ''}>المبيعات</button>
        <button onClick={() => setCurrentPage('products')} className={currentPage === 'products' ? 'active' : ''}>المنتجات</button>
        <button onClick={() => setCurrentPage('reports')} className={currentPage === 'reports' ? 'active' : ''}>التقارير</button>
        <button onClick={() => setCurrentPage('users')} className={currentPage === 'users' ? 'active' : ''}>المستخدمون</button>
      </nav>

      <main className="container">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'sales' && <Sales />}
        {currentPage === 'products' && <Products />}
        {currentPage === 'reports' && <Reports />}
        {currentPage === 'users' && <Users />}
      </main>

      <footer className="footer">
        <p>© 2024 POS System - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h2>لوحة التحكم</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>المبيعات اليومية</h3>
          <p className="stat-value">0 ريال</p>
        </div>
        <div className="stat-card">
          <h3>عدد الفواتير</h3>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <h3>المنتجات</h3>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <h3>المستخدمون</h3>
          <p className="stat-value">0</p>
        </div>
      </div>
    </div>
  );
}

function Sales() {
  return <div className="page"><h2>إدارة المبيعات</h2><p>قيد التطوير...</p></div>;
}

function Products() {
  return <div className="page"><h2>إدارة المنتجات</h2><p>قيد التطوير...</p></div>;
}

function Reports() {
  return <div className="page"><h2>التقارير</h2><p>قيد التطوير...</p></div>;
}

function Users() {
  return <div className="page"><h2>إدارة المستخدمين</h2><p>قيد التطوير...</p></div>;
}

export default App;
