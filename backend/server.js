
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample API route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend powered by Node.js & Express!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});