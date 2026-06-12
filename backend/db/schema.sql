-- Create portfolio database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- About / Hero info
CREATE TABLE IF NOT EXISTS about (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  title VARCHAR(200) NOT NULL,
  subtitle VARCHAR(300),
  bio TEXT,
  github_url VARCHAR(255),
  linkedin_url VARCHAR(255),
  twitter_url VARCHAR(255),
  resume_url VARCHAR(255),
  avatar_url VARCHAR(255),
  email VARCHAR(150),
  location VARCHAR(100),
  years_experience INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills
CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(50) NOT NULL COMMENT 'Frontend | Backend | Database | Tools | DevOps',
  name VARCHAR(100) NOT NULL,
  proficiency INT DEFAULT 80 COMMENT '0-100',
  icon VARCHAR(100),
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  tech_stack JSON,
  github_url VARCHAR(255),
  live_url VARCHAR(255),
  image_url VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience / Work History
CREATE TABLE IF NOT EXISTS experience (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(200) NOT NULL,
  role VARCHAR(200) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT FALSE,
  description TEXT,
  tech_used JSON,
  location VARCHAR(100),
  display_order INT DEFAULT 0
);

-- Contact Messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===== SEED DATA =====

-- About
INSERT INTO about (name, title, subtitle, bio, github_url, linkedin_url, email, location, years_experience)
VALUES (
  'Rushikesh',
  'Full Stack Developer',
  'React • Node.js • MySQL',
  'Passionate full stack developer with expertise in building scalable web applications. I love creating elegant solutions to complex problems using modern technologies like React, Node.js, and cloud databases.',
  'https://github.com/rushikesha',
  'https://linkedin.com/in/rushikesha',
  'rushikesha@email.com',
  'India',
  2
) ON DUPLICATE KEY UPDATE name=name;

-- Skills - Frontend
INSERT INTO skills (category, name, proficiency, icon, display_order) VALUES
('Frontend', 'React.js', 92, 'react', 1),
('Frontend', 'JavaScript (ES6+)', 90, 'javascript', 2),
('Frontend', 'TypeScript', 78, 'typescript', 3),
('Frontend', 'HTML5 & CSS3', 95, 'html5', 4),
('Frontend', 'Redux / Zustand', 80, 'redux', 5),
('Frontend', 'Tailwind CSS', 85, 'tailwind', 6),
-- Backend
('Backend', 'Node.js', 88, 'nodejs', 1),
('Backend', 'Express.js', 87, 'express', 2),
('Backend', 'REST API Design', 90, 'api', 3),
('Backend', 'JWT & Auth', 82, 'jwt', 4),
('Backend', 'Python', 72, 'python', 5),
-- Database
('Database', 'MySQL', 88, 'mysql', 1),
('Database', 'MongoDB', 78, 'mongodb', 2),
('Database', 'PostgreSQL', 72, 'postgresql', 3),
('Database', 'Redis', 65, 'redis', 4),
-- Tools & DevOps
('Tools', 'Git & GitHub', 92, 'git', 1),
('Tools', 'Docker', 70, 'docker', 2),
('Tools', 'Railway / Vercel', 80, 'cloud', 3),
('Tools', 'VS Code', 95, 'vscode', 4),
('Tools', 'Postman', 88, 'postman', 5);

-- Projects
INSERT INTO projects (title, description, tech_stack, github_url, live_url, featured, display_order) VALUES
(
  'Restaurant Management System',
  'Full-featured restaurant management system with real-time order management, QR code generation for table ordering, dynamic billing, and admin dashboard. Handles kitchen workflows and customer orders seamlessly.',
  '["React.js", "Node.js", "MySQL", "Express", "Railway"]',
  'https://github.com/rushikesha/restaurant-management',
  'https://restorentmanagement-production.up.railway.app',
  TRUE,
  1
),
(
  'Finance Dashboard',
  'Advanced financial analytics dashboard featuring cash position tracking, overdue recovery reports, and real-time data visualization. Built for enterprise-level financial data management.',
  '["React.js", "TanStack Query", "Node.js", "MySQL", "Chart.js"]',
  'https://github.com/rushikesha/finance-dashboard',
  NULL,
  TRUE,
  2
),
(
  'Developer Portfolio',
  'This very portfolio! A full-stack animated portfolio website with React frontend, Node.js/Express backend, MySQL database, smooth animations, and complete mobile responsiveness.',
  '["React.js", "Framer Motion", "Node.js", "MySQL", "Railway", "Vite"]',
  'https://github.com/rushikesha/portfolio',
  NULL,
  TRUE,
  3
);

-- Experience
INSERT INTO experience (company, role, start_date, end_date, is_current, description, tech_used, location, display_order) VALUES
(
  'Self-Employed / Freelance',
  'Full Stack Developer',
  '2022-01-01',
  NULL,
  TRUE,
  'Building custom web applications for clients across various domains including finance, restaurant management, and e-commerce. Specializing in React frontends with Node.js/Express backends and MySQL databases.',
  '["React.js", "Node.js", "MySQL", "Express.js", "Railway", "Vercel"]',
  'India (Remote)',
  1
);
