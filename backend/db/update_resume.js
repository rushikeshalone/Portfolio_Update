const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }
};

async function updateResume() {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to DB for resume update...');

    try {
        // 1. Clear existing data
        await connection.query('DELETE FROM contact_messages');
        await connection.query('DELETE FROM experience');
        await connection.query('DELETE FROM projects');
        await connection.query('DELETE FROM skills');
        await connection.query('DELETE FROM about');

        // 2. Insert About Info
        await connection.query(`
      INSERT INTO about (name, title, bio, email, location, github_url, linkedin_url, years_experience)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
            'RUSHIKESH N ALONE',
            'Full Stack Developer & AI Engineer',
            'Full Stack Developer with 3+ years of experience building scalable banking dashboards and financial reconciliation systems. Specialized in integrating Generative AI (Ollama, RAG) with React and Node.js. Adept at real-time data streaming and high-volume transaction processing.',
            'rushikeshaloneit@gmail.com',
            'Nagpur, India',
            'https://github.com/rushikeshalone',
            'https://linkedin.com/in/rushikesh-alone',
            3
        ]);

        // 3. Insert Skills
        const skillData = [
            ['Frontend', 'React.js', 95], ['Frontend', 'JavaScript (ES6+)', 95], ['Frontend', 'TypeScript', 85], ['Frontend', 'Tailwind CSS', 90], ['Frontend', 'Redux Toolkit', 88], ['Frontend', 'Chart.js', 85],
            ['Backend', 'Node.js', 92], ['Backend', 'Express.js', 90], ['Backend', 'ASP.NET Core (C#)', 85], ['Backend', 'RESTful APIs', 95], ['Backend', 'SSE & Websockets', 80],
            ['Database', 'SQL Server', 90], ['Database', 'MySQL', 88], ['Database', 'MongoDB', 85], ['Database', 'Pinecone (Vector DB)', 82], ['Database', 'Redis', 75],
            ['AI & NLP', 'RAG Architecture', 90], ['AI & NLP', 'Ollama LLM', 88], ['AI & NLP', 'Prompt Engineering', 85], ['AI & NLP', 'Semantic Search', 82]
        ];
        for (const [cat, name, prof] of skillData) {
            await connection.query('INSERT INTO skills (category, name, proficiency) VALUES (?, ?, ?)', [cat, name, prof]);
        }

        // 4. Insert Experience
        await connection.query(`
      INSERT INTO experience (company, role, location, start_date, is_current, description, tech_used)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [
            'Trust Fintech Limited',
            'Software Developer (Full Stack & AI)',
            'Nagpur, India',
            '2023-02-01',
            true,
            'Architected production-grade RAG applications, built embedding pipelines for 500+ documents, and developed NLP-to-SQL query engines. Developed AML monitoring modules processing 100K+ daily transactions. Built real-time banking dashboards for ATM/UPI/IMPS tracking.',
            JSON.stringify(['React.js', 'Node.js', 'C#', 'ASP.NET Core', 'Ollama', 'Pinecone', 'SQL Server', 'SSE'])
        ]);

        // 5. Insert Projects
        const projects = [
            {
                title: 'Bank ChatBot – Conversational AI',
                description: 'Conversational agent for banking operations using RAG. Deployed on-premise with Ollama for data sovereignty. Implemented multi-turn history and RBI regulatory query grounding.',
                tech_stack: JSON.stringify(['React.js', 'Node.js', 'Ollama', 'Pinecone', 'JWT', 'Redis']),
                github_url: 'https://github.com/rushikeshalone',
                live_url: null,
                featured: true
            },
            {
                title: 'FinTech – Reconciliation SaaS',
                description: 'Multi-tenant SaaS reconciliation dashboard with auto-matching logic for 10K+ daily transactions. Drill-down reports and audit trail logging.',
                tech_stack: JSON.stringify(['React.js', 'Node.js', 'SQL Server', 'Chart.js', 'Tailwind CSS']),
                github_url: 'https://github.com/rushikeshalone',
                live_url: null,
                featured: true
            },
            {
                title: 'Restaurant Management System',
                description: 'Full-stack POS platform with real-time table management, QR code ordering, and kitchen order tracking using WebSockets.',
                tech_stack: JSON.stringify(['React.js', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'JWT', 'Tailwind']),
                github_url: 'https://github.com/rushikeshalone',
                live_url: 'https://restorent-management-zeta.vercel.app/',
                featured: true
            },
            {
                title: 'Lovely Bakers',
                description: 'Responsive, SEO-friendly business website for a local bakery.',
                tech_stack: JSON.stringify(['React.js', 'CSS3', 'Git']),
                github_url: 'https://github.com/rushikeshalone',
                live_url: null,
                featured: false
            }
        ];

        for (const p of projects) {
            await connection.query(`
        INSERT INTO projects (title, description, tech_stack, github_url, live_url, featured)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [p.title, p.description, p.tech_stack, p.github_url, p.live_url, p.featured]);
        }

        console.log('Portfolio content updated successfully! 🚀');
    } catch (error) {
        console.error('Error updating resume:', error);
    } finally {
        await connection.end();
    }
}

updateResume();
