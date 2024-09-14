import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Todo App</h1>
        <nav className="nav">
          <a href="/todos">Todos</a>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Organize Your Tasks, Boost Productivity</h2>
        <p>
          Our Todo App helps you manage your day-to-day tasks efficiently. Keep track of everything in one place.
        </p>
        <a href="/dashboard" className="cta-button">Get Started</a>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Task Management</h3>
            <p>Easily add, edit, and manage your tasks with our intuitive interface.</p>
          </div>
          <div className="feature">
            <h3>Responsive Design</h3>
            <p>Use our app on any device, whether desktop, tablet, or mobile.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to get things done?</h2>
        <a href="/dashboard" className="cta-button">Create your todo now.</a>
      </section>

      <footer className="footer">
        <p>© 2024 Todo App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;