const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
  
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // In production, you would save to database or send email
  console.log('Contact form submission:', { firstName, lastName, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! We will get back to you soon.' 
  });
});

// Services endpoint
app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, title: 'Web Development', icon: '🌐', description: 'Modern, responsive websites' },
    { id: 2, title: 'App Development', icon: '📱', description: 'Native and cross-platform apps' },
    { id: 3, title: 'AI & ML Solutions', icon: '🤖', description: 'Intelligent automation' },
    { id: 4, title: 'Automation', icon: '⚡', description: 'Workflow optimization' }
  ]);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
